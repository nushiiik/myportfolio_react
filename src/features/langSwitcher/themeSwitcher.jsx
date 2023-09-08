import React from "react";
import "./themeSwitcher.css";
import {useTheme} from "../../processes/contextTheme";
import {IconTheme} from "./icons/iconTheme";

export const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();

    const handleClick = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    return (
        <div onClick={handleClick} className="themeSwitcher">
            <IconTheme />
        </div>
    );
};
