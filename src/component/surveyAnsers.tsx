import React, { useRef, useEffect } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { Tabulator } from "survey-analytics/survey.analytics.tabulator";
import "survey-core/defaultV2.min.css";
import "tabulator-tables/dist/css/tabulator.min.css";


const surveyJSON = {
    title: "Customer Feedback",
    elements: [
      { type: "text", name: "name", title: "Your Name:" },
      { type: "rating", name: "satisfaction", title: "Rate your experience:" },
      { type: "comment", name: "comments", title: "Additional Comments:" },
    ],
  };
  
  const SurveyWithTabulator = () => {
    const survey = new Model(surveyJSON);
    const tabulatorRef = useRef(null);
  
    useEffect(() => {
      survey.onComplete.add((sender) => {
        const results = sender.getAllValues();
        console.log("the result", results)
        if (tabulatorRef.current) {
          const tabulator = new Tabulator(
            survey,
            results
          );
          tabulator.render(tabulatorRef.current);
        }
      });
    }, [survey]);
  
    return (
      <div>
        <Survey model={survey} />
        <h3>Survey Results:</h3>
        <div ref={tabulatorRef}></div>
      </div>
    );
  };
  
  export default SurveyWithTabulator;
  