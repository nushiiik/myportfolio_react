import React from "react";
import './experience.css';
import { Element } from "react-scroll";
import {Title} from "../../shared/title/title";
import {Paragraph} from "../../shared/paragraph/paragraph";
import {ExperienceCard} from "../../shared/experienceCard/experienceCard";
import {useTheme} from "../../processes/contextTheme";

export const Experience = ({name, data}) => {
    const {theme} = useTheme();

    const mainInfo = data.history.map((experience, index) => <ExperienceCard data={experience} key={`experience_${index}`} />);

    return (
        <Element name = {name} className='experience'>
            <div className="titleInfo">
                <Title title = {data.title}/>
                <Paragraph text = {data.text} align="center"/>
            </div>
            <div className={`mainInfo mainInfo_${theme}`}>
                {mainInfo}
            </div>
        </Element>
    );
}
