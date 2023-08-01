import React, { useState } from "react";
import './form.css';
import {Button} from "../button/button";

export const Form = () => {

    const [formState, setFormState] = useState({
        name: {value: ''},
        email: {value: ''},
        subject: {value: ''},
        message: {value: ''}
    });

    const [formErrorState, setFormErrorState] = useState({
        name: {error: false},
        email: {error: false},
        subject: {error: false},
        message: {error: false}
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({...formState, [name]: {value: value}});
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        let error = 0;
        let updatedFormErrorState = {};

        for (const [key, value] of Object.entries(formState)) {
            if (!isValidValue({name: key, value: value.value})) {
                updatedFormErrorState[key] = {error: true};
                error++;
            } else {
                updatedFormErrorState[key] = {error: false};
            }
            if (error === 0) {
                setFormState ({
                    name: {value: ''},
                    email: {value: ''},
                    subject: {value: ''},
                    message: {value: ''}
                });
            }
        }
        setFormErrorState(updatedFormErrorState);
        console.log(error > 0 ? "ERROR" : "SUCCESS");
    };

    const isValidValue = (value) => {
        switch (value.name) {
            case "name":
                return /^[a-zA-Z]{2,}$/.test(value.value);
            case "email":
                return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-z0-9-.]+$/.test(value.value);
            default:
                return true;
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Your full name</label>
            <input type="text" name="name" value={formState.name.value} onChange={handleChange} className={formErrorState.name.error ? "errorInput" : ""} />
            <label>Your e-mail</label>
            <input type="text" name="email" value={formState.email.value} onChange={handleChange} className={formErrorState.email.error ? "errorInput" : ""} />
            <label>Subject</label>
            <input type="text" name="subject" value={formState.subject.value} onChange={handleChange} />
            <label>Your message</label>
            <textarea name="message" value={formState.message.value} onChange={handleChange}/>
            <Button />
        </form>
    );
}
