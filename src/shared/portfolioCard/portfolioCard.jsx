import React from "react";
import './portfolioCard.css';
import {IconPlus} from "./icons/iconPlus";

export const PortfolioCard = ({data}) => {
    return (
        <div className="portfolioCard">
            <a href={data.link}>
                <img src={data.img} alt={data.img} />
            </a>
            <div className="portfolioCardOverlay">
                <IconPlus />
            </div>
        </div>
    );
}
