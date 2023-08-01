import React from "react";
import './homePage.css';
import {Header} from "../../widgets/header/header";
import {LeftPanel} from "../../widgets/leftPanel/leftPanel";
import {RightPanel} from "../../widgets/rightPanel/rightPanel";
import {Experience} from "../../widgets/experience/experience";
import {Portfolio} from "../../widgets/portfolio/portfolio";
import {Footer} from "../../widgets/footer/footer";
import {Contacts} from "../../widgets/contacts/contacts";
import {EDUCATION, WORK} from "../../constants/experience";

export const HomePage = () => {
  return (
    <div className="container">
        <LeftPanel />
        <div className="inner">
            <Header />
            <Experience name="education" data={EDUCATION}/>
            <Experience name="work" data={WORK}/>
            <Portfolio />
            <Contacts />
            <Footer />
        </div>
        <RightPanel />
    </div>
  );
}

