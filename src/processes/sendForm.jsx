import axios from "axios";

export const sendForm = async (data) => {
    try {
        await axios.post("http://localhost:3002/api/send-email", data);
        console.log("Успешная отправка с клиента");
    } catch (error) {
        console.log("Ошибка при отправке с клиента: ", error);
    }
};

export const sendHookForm = async (data) => {
    const { name, email, subject, message } = data;

    try {
        await axios.post("http://localhost:3002/api/send-email", {
            name: { value: name },
            email: { value: email },
            subject: { value: subject },
            message: { value: message },
        });
        console.log("Успешная отправка с клиента");
    } catch (error) {
        console.log("Ошибка при отправке с клиента: ", error);
    }
};
