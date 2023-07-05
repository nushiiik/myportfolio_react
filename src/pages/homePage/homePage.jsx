import React from "react";
import './homePage.css';
import {Header} from "../../widgets/header/header";
import {Profile} from "../../widgets/profile/profile";
import {Navigation} from "../../widgets/navigation/navigation";
import {Education} from "../../widgets/education/education";
import {Experience} from "../../widgets/experience/experience";
import {Portfolio} from "../../widgets/portfolio/portfolio";
import {Footer} from "../../widgets/footer/footer";
import {Information} from "../../widgets/information/information";

export const HomePage = () => {
  return (
    <div className="container">
        <Profile />
        <div className="inner">
            <Header />
            <Education />
            <Experience />
            <Portfolio />
            <Information />
            <Footer />
        </div>
        <Navigation />
    </div>
  );
}

