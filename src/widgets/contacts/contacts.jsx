import React from "react";
import './contacts.css';
import { Element } from "react-scroll";
import {Form} from "../../features/form/form";
import {Title} from "../../shared/title/title";
import {ContactsCard} from "../../shared/contactsCard/contactsCard";
import {EMAIL, LOCATION, MOBILE} from "../../constants/contacts";

export const Contacts = () => {
    return (
        <Element name='contacts' className='contacts'>
            <div className="wrapper">
                <div className="titleInfoContacts">
                    <Title title="Leave us your info" />
                </div>
                <div className="formInfo">
                    <Form />
                </div>
            </div>
            <div className="wrapper">
                <div className="titleInfoContacts">
                    <Title title="Contact information" />
                </div>
                <div className="contactsInfo">
                    <ContactsCard data={LOCATION}/>
                    <ContactsCard data={EMAIL}/>
                    <ContactsCard data={MOBILE}/>
                </div>
            </div>
        </Element>
    );
}
