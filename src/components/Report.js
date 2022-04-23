import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";
import projectStore from "../stores/projectStore";
import semesterStore from "../stores/semesterStore";
import ReportTable from "./ReportTable";
import { BiFilterAlt } from "react-icons/bi";
import { HiShare } from "react-icons/hi";
import { IoIosLock } from "react-icons/io";
import ShareModal from "../modals/ShareModal";
const Report = () => {
  const { projectId } = useParams();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  const project = projectStore.projects.find((project) => {
    return +project.id === +projectId;
  }) ?? { name: "", teams: [], semester: "" };
  const semester = semesterStore.semesters.find(
    (semester) => semester.id === +project.semester
  ) ?? { name: "" };
  return (
    <div className="home-page report-page">
      <div className="icons">
        <div className="icon-item" onClick={handleShow}>
          <HiShare size={26} className="icon" />
          <p>Share</p>
        </div>
        <div className="icon-item">
          <IoIosLock size={26} className="icon" />
          <p>Lock</p>
        </div>
      </div>
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
      <div className="report">
        <ReportTable />
      </div>
      <div className="total">
        <h5>Total: 99%</h5>
      </div>
      <ShareModal show={show} handleClose={handleClose} projectId={projectId} />
    </div>
  );
};

export default observer(Report);
