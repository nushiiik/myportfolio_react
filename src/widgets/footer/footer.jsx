import React from "react";
import './footer.css';
import {useTheme} from "../../processes/contextTheme";

export const Footer = () => {
    const {theme} = useTheme();

    return (
        <div className={`footer footer_${theme}`}>2023, All rights reserved.</div>
    );
}
