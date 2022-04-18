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
          {semester.name}
          <AiOutlinePlus onClick={() => handleShow(semester)} />
        </Accordion.Header>
        <Accordion.Body>
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
