import React, { useState } from "react";
import './form.css';
import {Button} from "../button/button";

export const Form = () => {

    const [formState, setFormState] = useState({
        name: {value: ''},
        email: {value: ''},
        subject: {value: ''}
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({...formState, [name]: {value: value}});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        for (const [key, value] of Object.entries(formState)) {
            console.log(key, value.value);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Your full name</label>
            <input type="text" name="name" value={formState.name.value} onChange={handleChange} />
            <label>Your e-mail</label>
            <input type="text" name="email" value={formState.email.value} onChange={handleChange} />
            <label>Subject</label>
            <input type="text" name="subject" value={formState.subject.value} onChange={handleChange} />
            <label>Your message</label>
            <textarea />
            <Button />
        </form>
    );
}
