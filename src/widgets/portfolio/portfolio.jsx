import React, {useState} from "react";
import './portfolio.css';
import { Element } from "react-scroll";
import {Title} from "../../shared/title/title";
import {Paragraph} from "../../shared/paragraph/paragraph";
import {CATEGORIES, PORTFOLIO} from "../../constants/portfolio";
import {PortfolioTabs} from "../../features/portfolioTabs/portfolioTabs";
import {PortfolioCard} from "../../shared/portfolioCard/portfolioCard";

export const Portfolio = () => {
    const [portfolioData, setPortfolioData] = useState(PORTFOLIO);

    const renderCards = (data) => {
       return data.map((item, index) => (
           <PortfolioCard data={item} key={`portfolio_${index}`} />
       ));
    };

    const handleTabClick = (category) => {
        if (category === CATEGORIES[0]) {
            setPortfolioData(PORTFOLIO);
        } else {
            const newData = PORTFOLIO.filter((item) => item.category === category);
            setPortfolioData(newData);
        }
    };

    return (
        <Element name='portfolio' className='portfolio'>
            <div className="titleInfo">
                <Title title="Portfolio"/>
                <Paragraph
                    text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
                    align="center"/>
            </div>
            <PortfolioTabs onClick={handleTabClick}/>
            <div className="portfolioWrapper">
                {renderCards(portfolioData)}
            </div>
        </Element>
    );
}
