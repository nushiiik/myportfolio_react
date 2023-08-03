import { EDUCATION, WORK } from "../constants/experience";

export const getEducation = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(EDUCATION), 1000);
    });
};

export const getWork = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(WORK), 1000);
    });
};
