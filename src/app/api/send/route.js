// app/api/send/route.js

export async function POST(request) {
  try {
    const body = await request.json();

    const { fio, phone, summ, email, description, telegram, _subject } = body;

    // --- Валидация обязательных полей ---
    if (!fio || !email) {
      return Response.json(
        { error: 'Заполните обязательные поля: имя и email.' },
        { status: 400 }
      );
    }

    // --- Валидация email ---
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    if (!isValidEmail) {
      return Response.json({ error: 'Некорректный email.' }, { status: 400 });
    }

    // --- Опциональная валидация Telegram (@username) ---
    let cleanedUsername = null;
    if (telegram && typeof telegram === 'string') {
      const username = telegram.trim().replace(/^@/, '');
      if (/^[a-zA-Z0-9_]{5,32}$/.test(username)) {
        cleanedUsername = username;
      }
    }

    // --- Тема сообщения ---
    const subject = _subject || 'Новая заявка с сайта StudioWeb!';

    // --- Формируем текст сообщения ---
    const message = `
📬 <b>Новая заявка с сайта StudioWeb!</b>

📌 <b>Тема:</b> ${subject}

👨‍💼 <b>ФИО:</b> ${fio}
📧 <b>Email:</b> ${email}
${phone ? `📞 <b>Телефон:</b> ${phone}` : ''}
${summ ? `💰 <b>Бюджет:</b> ${summ} ₽` : ''}
${description ? `💬 <b>Комментарий:</b> ${description}` : ''}
${cleanedUsername ? `👤 <b>Telegram:</b> @${cleanedUsername}` : '👤 <b>Telegram:</b> не указан'}
⏰ <b>Время:</b> ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}
    `.trim();

    // --- Настройки промежуточного сервера (Vercel) ---
    const RELAY_URL = process.env.RELAY_URL || 'https://telegram-relay.vercel.app/api/notify';
    const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET; // Должен совпадать с тем, что на Vercel

    if (!WEBHOOK_SECRET) {
      console.error('Ошибка: Не задан WEBHOOK_SECRET');
      return Response.json({ error: 'Ошибка сервера: отсутствует секретный ключ' }, { status: 500 });
    }

    // --- Отправка на промежуточный сервер ---
    const relayRes = await fetch(RELAY_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-webhook-secret': WEBHOOK_SECRET // Защита от внешних вызовов
      },
      body: JSON.stringify({
        message,
        chat_id: process.env.TELEGRAM_CHAT_ID // Передаём chat_id сюда
      })
    });

    if (relayRes.ok) {
      return Response.json({ success: true }, { status: 200 });
    } else {
      const errorText = await relayRes.text();
      console.error('Ошибка промежуточного сервера:', errorText);
      return Response.json(
        { error: 'Не удалось отправить уведомление. Повторите позже.' },
        { status: 500 }
      );
    }
  } catch (err) {
    console.error('Серверная ошибка:', err);
    return Response.json(
      { error: 'Внутренняя ошибка при обработке запроса.' },
      { status: 500 }
    );
  }
}