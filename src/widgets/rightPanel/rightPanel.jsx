import React from "react";
import './rightPanel.css';
import {Navigation} from "../../features/navigation/navigation";
import {ThemeSwitcher} from "../../features/langSwitcher/themeSwitcher";
import {useTheme} from "../../processes/contextTheme";

export const RightPanel = () => {
    const {theme} = useTheme();

    return (
        <div className={`rightPanel rightPanel_${theme}`}>
            <ThemeSwitcher />
            <Navigation />
        </div>
    );
}
