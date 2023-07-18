import React from "react";
import './header.css';
import { Element } from "react-scroll";
import PhotoPicture from "./images/photopicture.png";
import {ButtonHire} from "../../features/buttonHire/buttonHire";


export const Header = () => {
    return (
        <Element name='home' className='header'>
            <h1>I’m Anna Lebedeva <span>Front-end</span> Developer</h1>
            <div className='about'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque
                rutrum semper sed suspendisse nunc lectus.</div>
            <ButtonHire />
            <img src={PhotoPicture} alt='PhotoPicture'/>
            <div className='element circle color-yellow position-1'></div>
            <div className='element circle color-yellow position-2'></div>
            <div className='element circle color-green position-3'></div>
            <div className='element circle color-green position-4'></div>
            <div className='element square color-blue position-5'></div>
            <div className='element square color-yellow position-6'></div>
            <div className='triangle position-7'></div>
        </Element>
    );
}
