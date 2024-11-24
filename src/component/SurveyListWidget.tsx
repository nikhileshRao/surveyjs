import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSurveyItems, createSurvey } from "../WebDataService.js";

const SurveyListWidget = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    updateSurveyList();
  });

  const updateSurveyList = () => {
    getSurveyItems((currentItems) => {
      setItems(currentItems);
    });
  };

  const addNewSurvey = () => {
    createSurvey((newItem) => {
      props.history.push("/editsurvey/" + newItem.id.toString());
    });
  };

  let list = [];
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    list.push(
      <li key={item.id}>
        <Link to={`/editsurvey/${item.id}`}>{item.name}</Link>
        <Link className="edit-link" to={`/editsurvey/${item.id}`}>
          <button type="button" className="btn btn--primary">
            Edit
          </button>
        </Link>
        <button
          type="button"
          className="btn btn--danger"
          onClick={() => {
            removeSurvey(item.id);
          }}
        >
          Remove
        </button>
      </li>
    );
  }

  if (list.length === 0) {
    list.push(<li key={-1}>Your survey list is empty</li>);
  }

  return (
    <div className="survey-list">
      <ul>{list}</ul>
      <button className="add-btn" type="button" onClick={addNewSurvey}>
        Add New Survey
      </button>
    </div>
  );
};

export default SurveyListWidget;
