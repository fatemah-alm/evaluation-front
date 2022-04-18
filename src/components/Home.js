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
    <div className="home-page">
      <button
        className="btn .btn-outline-dark btn-block btn-text"
        onClick={handleShow}
      >
        + add semester
      </button>
      <MDBContainer>
        <div
          className="scrollbar scrollbar-primary  mt-5 mx-auto"
          style={scrollContainerStyle}
        >
          <SemesterList />
        </div>
      </MDBContainer>
      <SemesterAddModal show={show} handleClose={handleClose} />
    </div>
  );
};

export default observer(Home);
