import React from "react";
import "./portfolioTabs.css";
import {CATEGORIES} from "../../constants/portfolio";

export const PortfolioTabs = ({onClick}) => {
    const tabs = CATEGORIES.map((item) => (
        <li className="portfolioTab" key={item} onClick={() => onClick(item)}>
            {item}
        </li>
    ));

    return (
        <ul className="portfolioTabs">
            {tabs}
        </ul>
    );
}
