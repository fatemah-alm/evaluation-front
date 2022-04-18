import React, { useState } from "react";
import { observer } from "mobx-react";
import semesterStore from "../stores/semesterStore";
import { Accordion } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import ProjectAddModal from "../modals/ProjectAddModal";
const SemesterList = () => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = (semester) => {
    setShow(true);
    setId(semester.id);
  };

  const semesters = semesterStore.semesters.map((semester) => (
    <>
      <Accordion.Item eventKey={`${semester.id}`}>
        <Accordion.Header>
          <h6>{semester.name}</h6>
        </Accordion.Header>
        <Accordion.Body>
          <div className="project-list-header">
            <h6>Projects</h6>
            <button
              className="btn .btn-outline-dark btn-block btn-text"
              onClick={() => handleShow(semester)}
            >
              + add project
            </button>
          </div>
          <hr />

          {semester.projects.map((project) => (
            <p>{project}</p>
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
    </>
  );
};

export default observer(SemesterList);
