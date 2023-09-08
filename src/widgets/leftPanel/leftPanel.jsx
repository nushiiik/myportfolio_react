import React from "react";
import './leftPanel.css';
import {IconFacebook} from "./icons/iconFacebook";
import {IconLinkedin} from "./icons/iconLinkedin";
import {IconTelegram} from "./icons/iconTelegram";
import {IconInstagram} from "./icons/iconInstagram";
import {IconTwitter} from "./icons/iconTwitter";
import {IconYoutube} from "./icons/iconYoutube";
import {IconSkill} from "./icons/iconSkill";
import {SkillsContainer} from "../../shared/skillsContainer/skillsContainer";
import {LANGUAGES, SKILLS} from "../../constants/skills";
import {ButtonDownload} from "../../features/buttonDownload/buttonDownload";
import {useTheme} from "../../processes/contextTheme";

export const LeftPanel = () => {
    const {theme} = useTheme();

    return (
        <div className={`leftPanel leftPanel_${theme}`}>
            <div className='section'>
                <div className='avatar'>
                </div>
                <div className='sectionWrapper'>
                    <h6 className='sectionTitle'>Anna Lebedeva</h6>
                    <p className='sectionSubtitle'>Font-end Developer</p>
                </div>
                <ul className='socialsIcons'>
                    <li className='socialsIcon'>
                        <a href='https://www.linkedin.com/in/lebedeva-ann/' className='socialIconLink' target="_blank" rel="noreferrer">
                            <IconLinkedin />
                        </a>
                    </li>
                    <li className='socialsIcon'>
                        <a href='https://t.me/nushiiik' className='socialIconLink' target="_blank" rel="noreferrer">
                            <IconTelegram />
                        </a>
                    </li>
                    <li className='socialsIcon'>
                        <a href='/' className='socialIconLink' target="_blank" rel="noreferrer">
                            <IconFacebook />
                        </a>
                    </li>
                    <li className='socialsIcon'>
                        <a href='https://www.instagram.com/le_nushiiik/' className='socialIconLink' target="_blank" rel="noreferrer">
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
            <div className='section'>
                <ul className='characteristics'>
                    <li className='characteristic'>
                        <span className='characteristicTitle'>Age:</span>
                        <span className='characteristicValue'>30</span>
                    </li>
                    <li className='characteristic'>
                        <span className='characteristicTitle'>Residence:</span>
                        <span className='characteristicValue'>RUS</span>
                    </li>
                    <li className='characteristic'>
                        <span className='characteristicTitle'>Freelance:</span>
                        <span className='characteristicValue'>Available</span>
                    </li>
                    <li className='characteristic'>
                        <span className='characteristicTitle'>Address:</span>
                        <span className='characteristicValue'>Moscow, Russia</span>
                    </li>
                </ul>
            </div>
            <div className='section'>
                <h6 className='sectionTitle'>Languages</h6>
                <SkillsContainer data={LANGUAGES} />
            </div>
            <div className='section'>
                <h6 className='sectionTitle'>Skills</h6>
                <SkillsContainer data={SKILLS} />
            </div>
            <div className='section'>
                <h6 className='sectionTitle'>Extra skills</h6>
                <ul className='extraSkills'>
                    <li className='extraSkill'>
                        <IconSkill />
                        SCSS, Sass
                    </li>
                    <li className='extraSkill'>
                        <IconSkill />
                        GIT
                    </li>
                    <li className='extraSkill'>
                        <IconSkill />
                        Gulp, Webpack, Vite
                    </li>
                    <li className='extraSkill'>
                        <IconSkill />
                        Bootstrap, Materialize
                    </li>
                    <li className='extraSkill'>
                        <IconSkill />
                        BEM
                    </li>
                </ul>
            </div>
            <ButtonDownload />
        </div>
    );
}
