import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { observer } from "mobx-react";
import projectStore from "../stores/projectStore";
import semesterStore from "../stores/semesterStore";
import ReportTable from "./ReportTable";
import { BiFilterAlt } from "react-icons/bi";
const Report = () => {
  const { projectId } = useParams();
  const project = projectStore.projects.find((project) => {
    console.log(project.id, "first");
    return project.id == projectId;
  });

  const semester = semesterStore.semesters.find(
    (semester) => semester.id == project.semester
  );
  return (
    <div className="home-page report-page">
      <div className="report-page-header">
        <h2>{project.name}</h2>
        <h6 style={{ color: "#54575b" }}>{semester.name}</h6>
      </div>
      <div className="teams-list">
        <BiFilterAlt size={26} color="#54575b" />
        <div className="team-item">
          <p>All</p>
          <hr />
        </div>
        {project.teams.map((team) => (
          <div className="team-item">
            <p>{team.name}</p>
            <hr />
          </div>
        ))}
      </div>
      <p style={{ textAlign: "center", color: "#54575b" }}>
        this project has been graded by 2 judges
      </p>
      <ReportTable />
    </div>
  );
};

export default observer(Report);
