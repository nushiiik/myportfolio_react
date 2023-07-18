import React from "react";
import './contacts.css';
import { Element } from "react-scroll";
import {Form} from "../../features/form/form";
import {Title} from "../../shared/title/title";

export const Contacts = () => {
    return (
        <Element name='contacts' className='contacts'>
            <div>
                <div className="titleInfo">
                    <Title title="Leave us your info" />
                </div>
                <div className="formInfo">
                    <Form />
                </div>
            </div>
            <div>
                <div className="titleInfo">
                    <Title title="Contact information" />
                </div>
                <div className="contactInfo">
                </div>
            </div>
        </Element>
    );
}
