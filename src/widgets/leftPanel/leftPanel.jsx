import React from "react";
import './leftPanel.css';
import {IconFacebook} from "./icons/iconFacebook";
import {IconLinkedin} from "./icons/iconLinkedin";
import {IconTelegram} from "./icons/iconTelegram";
import {IconInstagram} from "./icons/iconInstagram";
import {IconTwitter} from "./icons/iconTwitter";
import {IconYoutube} from "./icons/iconYoutube";

export const LeftPanel = () => {
    return (
        <div className='leftPanel'>
            <div className='section'>
                <div className='avatar'>
                </div>
                <h6 className='sectionTitle'>Anna Lebedeva</h6>
                <p className='sectionSubtitle'>Font-end Developer</p>
                <ul className='socialsIcons'>
                    <li className='socialsIcon'>
                        <a href='/' className='socialIconLink' target="_blank" rel="noreferrer">
                            <IconLinkedin />
                        </a>
                    </li>
                    <li className='socialsIcon'>
                        <a href='/' className='socialIconLink' target="_blank" rel="noreferrer">
                            <IconTelegram />
                        </a>
                    </li>
                    <li className='socialsIcon'>
                        <a href='/' className='socialIconLink' target="_blank" rel="noreferrer">
                            <IconFacebook />
                        </a>
                    </li>
                    <li className='socialsIcon'>
                        <a href='/' className='socialIconLink' target="_blank" rel="noreferrer">
                            <IconInstagram />
                        </a>
                    </li>
                    <li className='socialsIcon'>
                        <a href='/' className='socialIconLink' target="_blank" rel="noreferrer">
                            <IconTwitter />
                        </a>
                    </li>
                    <li className='socialsIcon'>
                        <a href='/' className='socialIconLink' target="_blank" rel="noreferrer">
                            <IconYoutube />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
