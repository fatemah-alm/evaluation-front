import React, { useState } from "react";
import { observer } from "mobx-react";
import { Modal, Button, Form } from "react-bootstrap";
import projectStore from "../stores/projectStore";

//code
const ProjectAddModal = ({ show, handleClose, semesterId }) => {
  const [project, setProject] = useState({
    name: "",
  });

  const handleChange = (event) => {
    setProject({
      ...project,
      [event.target.name]: event.target.value,
      semester: semesterId,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    projectStore.addProject(project);
    handleClose();
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>project name</Form.Label>
            <Form.Control
              name="name"
              onChange={handleChange}
              placeholder="enter project name"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={handleSubmit} type="submit">
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default observer(ProjectAddModal);
