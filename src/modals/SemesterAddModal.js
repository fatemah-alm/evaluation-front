import React, { useState } from "react";
import { observer } from "mobx-react";
import { Modal, Button, Form } from "react-bootstrap";
// stores
import authStore from "../stores/authStore";
import semesterStore from "../stores/semesterStore";

// code
const SemesterAddModal = ({ show, handleClose }) => {
  const [semester, setSemester] = useState({
    name: "",
    user: authStore.user.id,
  });

  const handleChange = (event) => {
    setSemester({ ...semester, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    semesterStore.createSemester(semester);
    handleClose();
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>semester title</Form.Label>
            <Form.Control
              name="name"
              onChange={handleChange}
              placeholder="enter semester title"
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

export default observer(SemesterAddModal);
