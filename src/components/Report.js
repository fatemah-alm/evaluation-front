import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";
import projectStore from "../stores/projectStore";
import semesterStore from "../stores/semesterStore";
import evaluationStore from "../stores/evaluationStore";
import ReportTable from "./ReportTable";
import { BiFilterAlt } from "react-icons/bi";
import { HiShare } from "react-icons/hi";
import { IoIosLock } from "react-icons/io";
import ShareModal from "../modals/ShareModal";
const Report = () => {
  const { projectId } = useParams();
  const [show, setShow] = useState(false);
  const [evaluation, setEvaluation] = useState({ project: projectId });
  const [teamId, setTeamId] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = async () => {
    const eva = await evaluationStore.createEvaluation(evaluation);
    setEvaluation(eva);
    console.log(evaluation);
    setShow(true);
  };
  const project = projectStore.projects.find((project) => {
    return +project.id === +projectId;
  }) ?? { name: "", teams: [], semester: "" };
  const semester = semesterStore.semesters.find(
    (semester) => semester.id === +project.semester
  ) ?? { name: "" };

  const handleTeam = (teamID) => {
    setTeamId(teamID);
  };
  const handlelocked = () => {
    project.isLocked = true;
    projectStore.updateProject(projectId, project);
  };
  return (
    <div className="home-page report-page">
      <div className="icons">
        {project.isLocked ? (
          <div className="icon-item">
            <IoIosLock size={28} className="icon-locked" />
            <p>Locked!</p>
          </div>
        ) : (
          <>
            <div className="icon-item" onClick={handleShow}>
              <HiShare size={26} className="icon" />
              <p>Share</p>
            </div>
            <div className="icon-item">
              <IoIosLock size={26} className="icon" onClick={handlelocked} />
              <p>Lock</p>
            </div>
          </>
        )}
      </div>
      <div className="report-page-header">
        <h2>{project.name}</h2>
        <h6 style={{ color: "#54575b" }}>{semester.name}</h6>
      </div>
      <div className="teams-list">
        <BiFilterAlt size={26} color="#54575b" />
        <div className="team-item">
          <p onClick={() => handleTeam(0)} style={{ cursor: "pointer" }}>
            All
          </p>
          <hr />
        </div>
        {project.teams.map((team) => (
          <div key={team.id} className="team-item">
            <p
              onClick={() => handleTeam(team.id)}
              style={{ cursor: "pointer" }}
            >
              {team.name}
            </p>
            <hr />
          </div>
        ))}
      </div>
      <p style={{ textAlign: "center", color: "#54575b" }}>
        this project has been graded by{" "}
        {project.judge ? project.judge.length : "0"} judges
      </p>

      <ReportTable project={project} teamId={teamId} />

      <ShareModal
        show={show}
        handleClose={handleClose}
        projectId={projectId}
        evaluation={evaluation}
      />
    </div>
  );
};

export default observer(Report);
