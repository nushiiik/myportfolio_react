import React from "react";
import './rightPanel.css';
import {Navigation} from "../../features/navigation/navigation";
import {ThemeSwitcher} from "../../features/themeSwitcher/themeSwitcher";

export const RightPanel = () => {
    return (
        <div className='rightPanel'>
            <ThemeSwitcher />
            <Navigation />
        </div>
    );
}
