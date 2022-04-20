import React, { useState } from "react";
import { observer } from "mobx-react";
import { Modal, Button, Form } from "react-bootstrap";
// stores
import criteriaStore from "../stores/criteriaStore";

// code
const CriteriaAddModal = ({ show, handleClose }) => {
  const [criteria, setCriteria] = useState({
    name: "",
    weight: "",
  });

  const handleChange = (event) => {
    setCriteria({ ...criteria, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    criteriaStore.createCriteria(criteria);
    handleClose();
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Criteria</Form.Label>
            <Form.Control
              name="name"
              onChange={handleChange}
              placeholder="enter criteria name"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Criteria Weight</Form.Label>
            <Form.Control
              name="weight"
              onChange={handleChange}
              placeholder="enter criteria weight"
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

export default observer(CriteriaAddModal);
