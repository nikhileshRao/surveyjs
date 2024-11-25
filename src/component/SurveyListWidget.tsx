import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
// import { Link } from "react-router-dom";
// import { getSurveyItems, createSurvey } from "../WebDataService.js";

const SurveyListWidget = (props) => {
  const paginationModel = { page: 0, pageSize: 5 };

  const deleteIcon = () => {
    return (
      <Tooltip title="Delete">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    );
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "SurveyName", headerName: "First name", width: 200 },
    { field: "Delete", headerName: "Delete", width: 150 },
  ];

  const rows = [
    { id: 1, SurveyName: "Snow", Delete: deleteIcon() },
    { id: 2, SurveyName: "Lannister" },
  ];

  return (
    <div className="survey-list">
      <Paper sx={{ height: "100%", width: "80%" }}>
        <DataGrid
          rows={rows}
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
