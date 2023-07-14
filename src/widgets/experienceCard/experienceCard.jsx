import React from "react";
import './experienceCard.css';
import {Subtitle} from "../../shared/subtitle/subtitle";
import {Paragraph} from "../../shared/paragraph/paragraph";

export const ExperienceCard = ({data}) => {
    return (
        <div className="experienceCard">
            <div className="addInfo">
                <Subtitle subtitle={data.place} />
                <div className="wrapper">
                    <span className="grade">{data.grade}</span>
                    <span className="date">{data.date}</span>
                </div>
            </div>
            <div className="descriptionInfo">
                <Subtitle subtitle={data.name}/>
                <Paragraph text={data.description}/>
            </div>
        </div>
    );
}
