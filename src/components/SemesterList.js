import React from "react";
import { observer } from "mobx-react";
import semesterStore from "../stores/semesterStore";
import { ListGroup } from "react-bootstrap";
import Card from "./SemesterCard";
const SemesterList = () => {
  const semesters = semesterStore.semesters.map((semester) => (
    <ListGroup.Item action>{semester.name}</ListGroup.Item>
  ));

  console.log(semesters);
  return (
    <>
      <ListGroup className="list-group" variant="flush" scro>
        {semesters.reverse()}
      </ListGroup>
    </>
  );
};

export default observer(SemesterList);
