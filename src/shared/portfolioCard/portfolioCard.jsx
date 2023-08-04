import React from "react";
import './portfolioCard.css';
import {IconPlus} from "./icons/iconPlus";
import {Link} from "react-router-dom";

export const PortfolioCard = ({data}) => {
    const link = data.link.includes('http') ? (
        <a href={data.link} target="_blank" rel="noreferrer">
            <img src={data.img} alt={data.img} />
            <div className="portfolioCardOverlay">
                <IconPlus />
            </div>
        </a>
    ) : (
        <Link to={data.link}>
            <img src={data.img} alt={data.img} />
            <div className="portfolioCardOverlay">
                <IconPlus />
            </div>
        </Link>
    );

    return (
        <div className="portfolioCard">
            {link}
        </div>
    );
}
