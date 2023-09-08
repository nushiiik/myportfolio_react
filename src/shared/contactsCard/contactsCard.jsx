import React from "react";
import './contactsCard.css';
import {useTheme} from "../../processes/contextTheme";

export const ContactsCard = ({data}) => {
    const {theme} = useTheme();

    const renderContentCard = () => {
        return data.description.map((data) => (
            <div className="contentCard">
                <span className="property">{data.property}</span>
                <span className="meaning">{data.meaning}</span>
            </div>
        ));
    };

    return (
        <div className={`contactsCard contactsCard_${theme}`}>
            <div className="iconCard">
                <img src={data.icon} alt={data.icon} />
            </div>
            {renderContentCard(data)}
        </div>
    );
}
