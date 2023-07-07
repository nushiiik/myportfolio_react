import React from "react";
import { Link } from "react-scroll";
import HomeIcon from "./images/home.svg";
import EducationIcon from "./images/education.svg";
import PortfolioIcon from "./images/portfolio.svg";
import ContactsIcon from "./images/contacts.svg";

import './navigation.css';

export const Navigation = () => {
    return (
        <nav className='navigation'>
            <ul>
                <li className='item'>
                    <Link activeClass="active" to="home" smooth={true} duration={500}>
                        <img src={HomeIcon} alt="HomeIcon" />
                    </Link>
                </li>
                <li className='item'>
                    <Link activeClass="active" to="education" smooth={true} duration={500}>
                        <img src={EducationIcon} alt="EducationIcon" />
                    </Link>
                </li>
                <li className='item'>
                    <Link activeClass="active" to="portfolio" smooth={true} duration={500}>
                        <img src={PortfolioIcon} alt="PortfolioIcon" />
                    </Link>
                </li>
                <li className='item'>
                    <Link activeClass="active" to="contacts" smooth={true} duration={500}>
                        <img src={ContactsIcon} alt="ContactsIcon" />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
