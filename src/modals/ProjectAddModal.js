import React, { useState } from "react";
import { observer } from "mobx-react";
import {
  Modal,
  Button,
  Form,
  Dropdown,
  DropdownButton,
  ButtonGroup,
} from "react-bootstrap";
import projectStore from "../stores/projectStore";
import criteriaStore from "../stores/criteriaStore";
import CriteriaAddModal from "./CriteriaAddModal";
//code
const ProjectAddModal = ({ show, handleClose, semesterId }) => {
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow = () => {
    setShow1(true);
  };
  const [project, setProject] = useState({
    name: "",
    criterias: [],
  });
  const key = criteriaStore.criterias.length + 1;

  const handleChange = (event) => {
    setProject({
      ...project,
      [event.target.name]: event.target.value,
      semester: semesterId,
    });
  };
  const handleSelect = (criteria) => {
    setProject({ ...project, criterias: [criteria.id] });
    console.log(project, "!!!");
    console.log(project.criterias, "$$$$");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(project, "CHECK");
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
          <Form.Group className="mb-3">
            <Form.Label>project weight</Form.Label>
            <Form.Control
              name="weight"
              onChange={handleChange}
              placeholder="enter project weight"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <DropdownButton
              as={ButtonGroup}
              key={"end"}
              id={`dropdown-button-drop-end`}
              drop="end"
              variant="light"
              title="Criteria"
            >
              {criteriaStore.criterias.map((criteria) => (
                <Dropdown.Item
                  eventKey={`${criteria.id}`}
                  onClick={() => handleSelect(criteria)}
                >
                  {criteria.name} - {criteria.weight}
                </Dropdown.Item>
              ))}
              <Dropdown.Divider />
              <Dropdown.Item eventKey={`${key}`} onClick={handleShow}>
                +Add{" "}
              </Dropdown.Item>
            </DropdownButton>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={handleSubmit} type="submit">
          Save
        </Button>
      </Modal.Footer>
      <CriteriaAddModal show={show1} handleClose={handleClose1} />
    </Modal>
  );
};

export default observer(ProjectAddModal);
