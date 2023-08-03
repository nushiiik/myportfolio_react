import { useForm } from "react-hook-form"
import React from "react";
import './hookForm.css';
import {ButtonSend} from "../buttonSend/buttonSend";

export const HookForm = () => {
    const { register, handleSubmit, formState: {errors}, } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <form className='hookForm' onSubmit={handleSubmit(onSubmit)}>
            <label>Your full name</label>
            <input
                {...register("name", { required: true, pattern: /^[a-zA-Z]{2,}$/ })}
                className={errors.name ? "errorInput" : ""}
            />
            <label>Your e-mail</label>
            <input
                {...register("email", { required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-z0-9-.]+$/ })}
                className={errors.name ? "errorInput" : ""}
            />
            <label>Subject</label>
            <input
                {...register("subject")}
            />
            <label>Your message</label>
            <textarea
                {...register("message")}
            />
            <ButtonSend />
        </form>
    );
}
