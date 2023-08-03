const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express(); // Инициализируется серверная часть приложения

app.use(express.json());

app.use(cors()); // Добавьте это промежуточное ПО перед определением маршрутов

app.post("/api/send-email", (req, res) => {
    const { name, email, subject, message } = req.body; // Получение данных, чтобы их потом куда-то дальше отправить

    // Создание транспортера для отправки писем (куда эти данные мы будем отправлять)
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "nutik093@gmail.com", // Ваша почта Gmail
            pass: "vyoasuzkkzjhymmu", // Пароль от почты Gmail (из паролей приложений)
        },
    });

    // Настройки письма
    const mailOptions = {
        from: email.value, // Отправитель
        to: "nutik093@gmail.com", // Получатель
        subject: subject.value, // Тема письма
        text: `Имя: ${name.value}\nEmail: ${email.value}\nСообщение: ${message.value}`, // Текст письма
    };

    // Отправка письма
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send("Ошибка отправки письма.");
        } else {
            console.log("Письмо успешно отправлено: " + info.response);
            res.sendStatus(200);
        }
    });
});

app.listen(3002, () => {
    console.log("Сервер запущен на порту 3002.");
});
