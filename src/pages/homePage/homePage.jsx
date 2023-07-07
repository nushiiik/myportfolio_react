import React from "react";
import {Header} from "../../widgets/header/header";
import {Profile} from "../../widgets/profile/profile";
import {RightPanel} from "../../widgets/rightPanel/rightPanel";
import {Experience} from "../../widgets/experience/experience";
import {Portfolio} from "../../widgets/portfolio/portfolio";
import {Footer} from "../../widgets/footer/footer";
import {Contacts} from "../../widgets/contacts/contacts";

import './homePage.css';

export const HomePage = () => {
  return (
    <div className="container">
        <Profile />
        <div className="inner">
            <Header />
            <Experience name="education" />
            <Experience name="work" />
            <Portfolio />
            <Contacts />
            <Footer />
        </div>
        <RightPanel />
    </div>
  );
}

