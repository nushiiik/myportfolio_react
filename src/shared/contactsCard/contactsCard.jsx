import React from "react";
import './contactsCard.css';
import {ContentCard} from "./contentCard/contentCard";
import {IconMail} from "./icons/iconMail";

export const ContactsCard = ({data, icon}) => {
    const contentInfo = data.description.map((contacts, index) => <ContentCard data={contacts} key={`contacts_${index}`} />);

    return (
        <div className="contactsCard">
            <div className="iconCard">
                <IconMail />
            </div>
            <div className="contentCard">
                {contentInfo}
            </div>
        </div>
    );
}
