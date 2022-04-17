import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";
import semesterStore from "../stores/semesterStore";
const SemesterAddModal = ({ show, handleClose }) => {
  const [semester, setSemester] = useState({
    name: "",
    added_by: authStore.user.id,
  });

  const handleChange = (event) => {
    setSemester({ ...semester, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // setSemester({ ...semester, added_by: authStore.user });
    console.log(semester);
    semesterStore.createSemester(semester);
    handleClose();
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Add new semester</Modal.Title>
      </Modal.Header>
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
