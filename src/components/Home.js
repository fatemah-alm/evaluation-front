import React, { useState } from "react";
import { observer } from "mobx-react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import SemesterList from "./SemesterList";
import "../styles/Sidebar.css";
import SemesterAddModal from "../modals/SemesterAddModal";

const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    console.log("CLICKED");
    setShow(true);
  };
  return (
    <div className="home-page">
      <button
        className="btn .btn-outline-dark btn-block btn-text"
        onClick={handleShow}
      >
        + add semester
      </button>
      <SemesterList />
      <SemesterAddModal show={show} handleClose={handleClose} />
    </div>
  );
};

export default observer(Home);
