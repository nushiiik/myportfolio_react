import React from "react";
import './skillsContainer.css';
import {SkillElement} from "../skillElement/skillElement";

export const SkillsContainer = ({data}) => {
    const renderSkill = () => {
        return data.skills.map((item, index) => <SkillElement data={item} key={`skill_${index}`} />);
    };

    return (
        <div className="skillsContainer">
            {renderSkill(data)}
        </div>
    );
}
