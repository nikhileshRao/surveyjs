import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SurveyCreatorWidget from "./component/SurveyCreatorWidget.tsx";
import SurveyListWidget from "./component/SurveyListWidget.tsx";
import SurveyViewer from "./component/SurveyViewer.tsx"

const App = () => {
  return (
    <BrowserRouter>
      <div className="App__header">
        <h1>SurveyJS POC</h1>
      </div>
      <Routes>
        <Route path="/" element={<SurveyListWidget />} />
        <Route path="/editsurvey/:id" element={<SurveyCreatorWidget />} />
        <Route path="/run/:id" element={<SurveyViewer />} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <SurveyCreatorWidget />
    // </div>
  );
};

export default App;
