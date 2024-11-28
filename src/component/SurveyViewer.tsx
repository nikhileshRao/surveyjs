import React from "react";
import { Model } from "survey-core";
import { Survey } from 'survey-react-ui';
import { useCallback } from 'react';

const SurveyViewer = () => {
    const surveyJson = localStorage.getItem("survey-json")

    const survey = new Model(surveyJson);

    const saveSurveyResults = (data) =>{
        window.localStorage.setItem("survey-result", data);
    }

    console.log("surveyJson",surveyJson);

    const surveyComplete = useCallback((survey) => {
        console.log("the survey is", survey.data)
        saveSurveyResults(survey.data)
      }, []);

    survey.onComplete.add(surveyComplete);
    saveSurveyResults(survey.data);


    return <div>
        <Survey model={survey}/>
    </div>
}

export default SurveyViewer;