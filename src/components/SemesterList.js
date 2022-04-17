import React from "react";
import { observer } from "mobx-react";
import semesterStore from "../stores/semesterStore";
import Card from "./SemesterCard";
const SemesterList = () => {
  const semesters = semesterStore.semesters.map((semester) => (
    <Card key={semester._id} semester={semester} />
  ));
  console.log(semesters);
  return <div className="semester-list container">{semesters}</div>;
};

export default observer(SemesterList);
