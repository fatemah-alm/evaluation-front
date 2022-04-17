import React from "react";
import { observer } from "mobx-react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import SemesterList from "./SemesterList";
import Sidebar from "./Sidebar";
import "../styles/Sidebar.css";
const Home = () => {
  return (
    <>
      <Sidebar />
      <div className="home-page">
        <div className="title fonts">
          <h1>Semesters</h1>
        </div>
        <SemesterList />
      </div>
    </>
  );
};

export default observer(Home);
