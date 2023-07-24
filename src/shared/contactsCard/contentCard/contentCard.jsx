import React from "react";
import './contentCard.css';

export const ContentCard = ({data}) => {
    return (
        <div className="contentCard">
            <span className="property">{data.property}</span>
            <span className="meaning">{data.meaning}</span>
        </div>
    );
}
