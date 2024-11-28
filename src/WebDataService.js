const STORAGE_KEY = "surveys";

let surveys = [];

const setStoredSurveys = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(surveys));
}

export const getStoredSurveys = () =>{
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    console.log("stored", stored)
    return stored
}

export const createSurvey = () => {
    setTimeout(() => {
        setStoredSurveys();
        const getSurvey = getStoredSurveys();
        console.log("length",getSurvey.length)
        const newSurvey = {
            id: getSurvey.length + 1 ,
            name: "New Survey" + (getSurvey.length + 1) ,
            json: {},
        };
        surveys.push(newSurvey);
        setStoredSurveys(surveys)
    }, 500);    
}