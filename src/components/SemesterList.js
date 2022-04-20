import React, { useState } from "react";
import { observer } from "mobx-react";
import semesterStore from "../stores/semesterStore";
import { Accordion } from "react-bootstrap";
import ProjectAddModal from "../modals/ProjectAddModal";
import TeamAddModal from "../modals/TeamAddModal";
const SemesterList = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const [id, setId] = useState("");
  const [id1, setId1] = useState("");
  const handleClose = () => setShow(false);
  const handleClose1 = () => setShow1(false);
  const handleShow = (semester) => {
    setShow(true);
    setId(semester.id);
  };
  const handleShow1 = (project) => {
    setShow1(true);
    setId1(project.id);
  };

  const semesters = semesterStore.semesters.map((semester) => (
    <>
      <Accordion.Item eventKey={`${semester.id}`}>
        <Accordion.Header>
          <h6>{semester.name}</h6>
        </Accordion.Header>
        <Accordion.Body>
          <div className="project-list-header">
            <h6 style={{ color: "#5c5f62" }}>Projects</h6>
            <button
              className="btn .btn-outline-dark btn-block btn-text"
              onClick={() => handleShow(semester)}
            >
              + Add Project
            </button>
          </div>
          <hr />

          {semester.project_set.map((project) => (
            <div className="project-item">
              <div className="project-team-list">
                <h6>{project.name}: </h6>
                {project.teams.map((team) => (
                  <p className="margin23">{team.name}</p>
                ))}
              </div>
              <div>
                <button
                  className="btn .btn-outline-dark btn-block btn-text"
                  onClick={() => handleShow1(project)}
                >
                  + Add Team
                </button>
              </div>
            </div>
          ))}
        </Accordion.Body>
      </Accordion.Item>
    </>
  ));

  console.log(semesters);
  return (
    <>
      <Accordion defaultActiveKey="0">{semesters.reverse()}</Accordion>
      <ProjectAddModal show={show} handleClose={handleClose} semesterId={id} />
      <TeamAddModal show={show1} handleClose1={handleClose1} projectId={id1} />
    </>
  );
};

export default observer(SemesterList);
