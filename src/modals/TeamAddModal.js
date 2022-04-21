import React, { useState } from "react";
import { observer } from "mobx-react";
import { Modal, Button, Form } from "react-bootstrap";
import teamStore from "../stores/teamStore";

//code
const TeamAddModal = ({ show, handleClose1, projectId }) => {
  const [team, setTeam] = useState({
    name: "",
  });

  const handleChange = (event) => {
    setTeam({
      ...team,
      [event.target.name]: event.target.value,
      project: projectId,
    });
  };

  const handleSubmit = (event) => {
    // team.members = team.members
    //   .replace(/\s/g, "")
    //   .split(",")
    //   .filter((name) => name !== "");
    event.preventDefault();
    teamStore.addTeam(team);
    handleClose1();
  };
  return (
    <Modal show={show} onHide={handleClose1}>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Team Name</Form.Label>
            <Form.Control
              name="name"
              onChange={handleChange}
              placeholder="enter team name"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Team Members</Form.Label>
            <Form.Control
              name="members"
              onChange={handleChange}
              placeholder="enter team members"
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

export default observer(TeamAddModal);
