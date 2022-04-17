import React from "react";
import { observer } from "mobx-react";
import semesterStore from "../stores/semesterStore";
import Card from "./SemesterCard";
const Home = () => {
  const semesters = semesterStore.semesters.map((semester) => (
    <Card key={semester._id} semester={semester} />
  ));
  console.log(semesters);
  return <>{semesters}</>;
};

export default observer(Home);
