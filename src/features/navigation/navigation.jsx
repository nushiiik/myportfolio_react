import React from "react";
import './navigation.css';
import { Link } from "react-scroll";
import {IconContacts} from "./icons/iconContacts";
import {IconEducation} from "./icons/iconEducation";
import {IconHome} from "./icons/iconHome";
import {IconPortfolio} from "./icons/iconPortfolio";

export const Navigation = () => {
    return (
        <nav className='navigation'>
            <ul>
                <li className='item'>
                    <Link activeClass="active" to="home" smooth={true} duration={500}>
                        <IconHome />
                    </Link>
                </li>
                <li className='item'>
                    <Link activeClass="active" to="education" smooth={true} duration={500}>
                        <IconEducation />
                    </Link>
                </li>
                <li className='item'>
                    <Link activeClass="active" to="portfolio" smooth={true} duration={500}>
                        <IconPortfolio />
                    </Link>
                </li>
                <li className='item itemContacts'>
                    <Link activeClass="active" to="contacts" smooth={true} duration={500}>
                        <IconContacts />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
