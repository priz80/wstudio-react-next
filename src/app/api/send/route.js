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
      // Удаляем @ в начале, если есть
      const username = telegram.trim().replace(/^@/, '');
      // Проверяем формат: только буквы, цифры, подчёркивания, длина 5–32
      if (/^[a-zA-Z0-9_]{5,32}$/.test(username)) {
        cleanedUsername = username;
      }
      // Если не прошёл валидацию — игнорируем, но не останавливаем отправку
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

    // --- Настройки бота ---
    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
      console.error('Ошибка: Не задан TELEGRAM_BOT_TOKEN или CHAT_ID');
      return Response.json(
        { error: 'Ошибка сервера: настройки бота' },
        { status: 500 }
      );
    }

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    // --- Клавиатура: кнопка "Написать клиенту", если есть username ---
    const reply_markup = cleanedUsername
      ? {
          inline_keyboard: [
            [
              {
                text: '📩 Написать клиенту',
                url: `https://t.me/${cleanedUsername}`
              }
            ]
          ]
        }
      : undefined;

    // --- Отправка в Telegram ---
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        reply_markup // кнопка только если есть username
      })
    });

    if (response.ok) {
      return Response.json({ success: true }, { status: 200 });
    } else {
      const data = await response.json().catch(() => ({}));
      console.error('Telegram API ошибка:', data);
      return Response.json(
        { error: 'Не удалось отправить сообщение в Telegram.' },
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