import React from "react";
import { Element } from "react-scroll";

import './experience.css';

export const Experience = ({name}) => {
    return (
        <Element name = {name} className='experience'>Experience</Element>
    );
}
