import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";
import projectStore from "../stores/projectStore";
import semesterStore from "../stores/semesterStore";
import { Button } from "react-bootstrap";
import judgeStore from "../stores/judgeStore";
import { useNavigate } from "react-router-dom";
const JudgeScreen = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [input, setInput] = useState({ name: "", project: projectId });
  const project = projectStore.projects.find((project) => {
    return +project.id === +projectId;
  }) ?? { name: "", teams: [], semester: "" };
  const semester = semesterStore.semesters.find(
    (semester) => semester.id === +project.semester
  ) ?? { name: "" };
  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
    console.log(input);
  };
  const handleSubmit = async () => {
    const judge = await judgeStore.createJudge(input);
    navigate(`/teams/${projectId}/${judge.id}`);
  };
  return (
    <div className="home-page report-page judge-page">
      <div className="judge-page-header">
        <h2>{project.name}</h2>
        <h6 style={{ color: "#54575b" }}>{semester.name}</h6>
      </div>
      <form className="input-judge">
        <label>
          Judge Name:
          <input
            type="text"
            name="name"
            className="input-field"
            onChange={handleChange}
          />
        </label>
      </form>
      <div className="btn-judge">
        <Button variant="light" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default observer(JudgeScreen);
