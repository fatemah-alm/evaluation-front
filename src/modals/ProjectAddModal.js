import React, { useState } from "react";
import { observer } from "mobx-react";
import { Modal, Button, Form } from "react-bootstrap";
import projectStore from "../stores/projectStore";
import criteriaStore from "../stores/criteriaStore";
import CriteriaAddModal from "./CriteriaAddModal";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import { IoIosAddCircleOutline } from "react-icons/io";

//code
const ProjectAddModal = ({ show, handleClose, semesterId }) => {
  const [show1, setShow1] = useState(false);

  const [project, setProject] = useState({
    name: "",
    criterias: "",
  });
  const key = criteriaStore.criterias.length + 1;
  const handleClose1 = () => setShow1(false);
  const handleShow = () => {
    setShow1(true);
  };

  const handleChange = (event) => {
    setProject({
      ...project,
      [event.target.name]: event.target.value,
      semester: semesterId,
    });
  };
  const handleSelect = (selected) => {
    setProject({ ...project, criterias: selected });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    projectStore.addProject(project);
    handleClose();
  };

  const criteriasIs = criteriaStore.criterias.map((criteria) => {
    return {
      key: criteria.id,
      label: criteria.name + " - " + criteria.weight,
    };
  });

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
            <Form.Label>Criteria</Form.Label>
            <div
              style={{ width: "100%", display: "flex", alignItems: "center" }}
            >
              <div style={{ width: "60%" }}>
                {/* here */}
                <DropdownMultiselect
                  options={[...criteriasIs]}
                  name="Criteria"
                  handleOnChange={handleSelect}
                />
              </div>
              <IoIosAddCircleOutline
                style={{ marginLeft: "7px" }}
                onClick={handleShow}
                size={24}
              />
            </div>
          </Form.Group>
          <Modal.Footer>
            <Button variant="light" type="submit">
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>

      <CriteriaAddModal show={show1} handleClose={handleClose1} />
    </Modal>
  );
};

export default observer(ProjectAddModal);
