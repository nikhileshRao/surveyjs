import React from "react";
import { SurveyCreator, SurveyCreatorComponent } from "survey-creator-react";
import { SurveyCreatorModel } from "survey-creator-core";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";
import themeJson from "../survey_theme.json";

const SurveyCreatorWidget = () => {
  const creatorOptions = {
    showLogicTab: true,
    isAutoSave: true,
    showThemeTab: true,
  };

  const creator = new SurveyCreator(creatorOptions);
  creator.isAutoSave = true;
  creator.theme = themeJson;
  
  creator.saveSurveyFunc = (saveNo, callback) => { 
    window.localStorage.setItem("survey-json", creator.text);
    callback(saveNo, true);
  }


  const style = { height: "100vh" };

  return (
    <div style={style}>
      {creator && (
        <SurveyCreatorComponent creator={creator}></SurveyCreatorComponent>
      )}
    </div>
  );
};

export default SurveyCreatorWidget;
