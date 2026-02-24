// app/api/send/route.js

export async function POST(request) {
  try {
    const body = await request.json();

    const { fio, phone, summ, email, description, _subject } = body;

    if (!fio || !email) {
      return Response.json(
        { error: 'Заполните обязательные поля.' },
        { status: 400 }
      );
    }

    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    if (!isValidEmail) {
      return Response.json({ error: 'Некорректный email' }, { status: 400 });
    }

    const subject = _subject || 'Новое сообщение с сайта StudioWeb!';

    const message = `
📬 <b>Новая заявка с сайта StudioWeb!</b>

📌 <b>Тема:</b> ${subject}

👨‍💼 <b>ФИО:</b> ${fio}
${phone ? `📞 <b>Телефон:</b> ${phone}` : ''}
${summ ? `💰 <b>Бюджет:</b> ${summ} ₽` : ''}
📧 <b>Email:</b> ${email}
${description ? `💬 <b>Комментарий:</b> ${description}` : ''}
⏰ <b>Время:</b> ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}
    `.trim();

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

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    if (response.ok) {
      return Response.json({ success: true }, { status: 200 });
    } else {
      const data = await response.json().catch(() => ({}));
      console.error('Telegram error:', data);
      return Response.json(
        { error: 'Не удалось отправить в Telegram' },
        { status: 500 }
      );
    }
  } catch (err) {
    console.error('Server error:', err);
    return Response.json(
      { error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    );
  }
}