import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
// import DeleteIcon from "@mui/icons-material/Delete";
// import IconButton from "@mui/material/IconButton";
// import Tooltip from "@mui/material/Tooltip";
// import { Link } from "react-router-dom";
import { createSurvey , getStoredSurveys  } from "../WebDataService.js";

const SurveyListWidget = (props) => {
  const paginationModel = { page: 0, pageSize: 5 };
  

  // const deleteIcon = () => {
  //   return (
  //     <Tooltip title="Delete">
  //       <IconButton>
  //         <DeleteIcon />
  //       </IconButton>
  //     </Tooltip>
  //   );
  // };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "name", headerName: "First name", width: 200 },
    { field: "edit", headerName: "Edit", width: 150, renderCell: (params) => (
      params.value ? (
        <a href={params.value} target="_blank" rel="noopener noreferrer">
          Edit
        </a>
      ) : (
        <span>No URL</span>
      )
    ), },
  ];

  const addSurvey = () =>{
    createSurvey();
  }

  const tableData = getStoredSurveys();

  const updatedTableData = tableData.map(item => ({
    ...item,
    edit: "http://localhost:3000/editsurvey/" +  item.id
  }));
  console.log("tableData:", updatedTableData);
  
  return (
    <div className="survey-list">
      <button onClick={addSurvey}>+ Add new survey</button>
      <Paper sx={{ height: "100%", width: "80%" }}>
        <DataGrid
          rows={updatedTableData}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          sx={{ border: 0 }}
        />
      </Paper>
    </div>
  );
};

export default SurveyListWidget;
