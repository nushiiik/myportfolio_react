import React from "react";
import './skillElement.css';

export const SkillElement = ({data}) => {
    return (
        <div className='skillElement'>
            <div className="skillCaption">
                <span>{data.skill}</span>
                <span className='skillGrade'>{data.grade}</span>
            </div>
            <div className="skillBar">
                <div className="skillBar--inside" style={{width: `${data.grade}`}}></div>
            </div>
        </div>
    );
}
