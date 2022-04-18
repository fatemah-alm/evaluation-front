import React, { useState } from "react";
import "../styles/Sidebar.css";
import { observer } from "mobx-react";
import { MDBContainer } from "mdbreact";
import SemesterList from "./SemesterList";
import SemesterAddModal from "../modals/SemesterAddModal";

const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const scrollContainerStyle = { width: "800px", maxHeight: "400px" };

  return (
    <div className="home-page ">
      <div className="home-page-header">
        <h3>semesters</h3>
        <button
          className="btn .btn-outline-dark btn-block btn-text"
          onClick={handleShow}
        >
          + Add Semester
        </button>
      </div>

      <div className="scroll-list">
        <MDBContainer className="mdb-container">
          <div
            className="scrollbar scrollbar-hidden
            mt-5 mx-auto"
            style={scrollContainerStyle}
          >
            <SemesterList />
          </div>
        </MDBContainer>
      </div>

      <SemesterAddModal show={show} handleClose={handleClose} />
    </div>
  );
};

export default observer(Home);
