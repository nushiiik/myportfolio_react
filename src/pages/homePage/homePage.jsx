import React, {useEffect, useState} from "react";
import './homePage.css';
import {Header} from "../../widgets/header/header";
import {LeftPanel} from "../../widgets/leftPanel/leftPanel";
import {RightPanel} from "../../widgets/rightPanel/rightPanel";
import {Experience} from "../../widgets/experience/experience";
import {Portfolio} from "../../widgets/portfolio/portfolio";
import {Footer} from "../../widgets/footer/footer";
import {Contacts} from "../../widgets/contacts/contacts";
import {getEducation, getWork} from "../../processes/getExperienceData";

export const HomePage = () => {
    const [education, setEducation] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getEducation();
                setEducation(data);
                setLoading(false);
            } catch (error) {
                console.log("ошибка при отправке с клиента: ", error);
            }
        };

        getData();
    }, []);

    const [work, setWork] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getWork();
                setWork(data);
                setLoading(false);
            } catch (error) {
                console.log("ошибка при отправке с клиента: ", error);
            }
        };

        getData();
    }, []);

    return (
    <div className="container">
        <LeftPanel />
        <div className="inner">
            <Header />
            {loading ? (
                <p>loading</p>
            ) : (
                <Experience name="education" data={education} />
            )}
            {loading ? (
                <p>loading</p>
            ) : (
                <Experience name="work" data={work} />
            )}
            <Portfolio />
            <Contacts />
            <Footer />
        </div>
        <RightPanel />
    </div>
  );
}

