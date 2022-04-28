import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react";
import projectStore from "../stores/projectStore";
import semesterStore from "../stores/semesterStore";
import judgeStore from "../stores/judgeStore";
import { Accordion } from "react-bootstrap";
import { Slider } from "@mui/material";
import { AiOutlineFileDone } from "react-icons/ai";
const TeamsPage = () => {
  const { projectId, evaluationId, judgeId } = useParams();
  const [done, setDone] = useState(false);
  const project = projectStore.projects.find((project) => {
    return +project.id === +projectId;
  }) ?? { name: "", teams: [], semester: "" };
  const semester = semesterStore.semesters.find(
    (semester) => semester.id === +project.semester
  ) ?? { name: "" };
  const judge = judgeStore.judges.find((judge) => {
    return +judge.id === +judgeId;
  }) ?? { name: "", project: "" };
  const handleChange = (event, criteria, grade) => {
    criteria.grade = event.target.value;
    grade.grade.map((criteria1) => {
      if (+criteria1.id === +criteria.id)
        return (criteria1.grade = event.target.value);
    });
    judge.grade.map((team) => {
      if (+team.id === +grade.id) return (team = grade);
    });
  };

  const handleSubmit = () => {
    judgeStore.updateJudge(judgeId, judge);
    setDone(true);
  };
  return project.isLocked ? (
    <div className="locked">
      <h4>This Project Is Locked!</h4>
    </div>
  ) : (
    <div className="home-page report-page">
      <div className="report-page-header">
        <h2>{project.name}</h2>
        <h6 style={{ color: "#54575b" }}>{semester.name}</h6>
      </div>
      {done ? (
        <div className="thank-you">
          <h2>Thank You!</h2>
          <AiOutlineFileDone size={40} />
        </div>
      ) : (
        <>
          <div className="report-page-header judge-name">
            <h5>hello {judge.name},</h5>
            <p>
              Please watch the presentaions of the following teams carefully,
              and judge them according to the criteria below
            </p>
          </div>
          <div className="teams-page">
            <h5>Teams</h5>
            <Accordion defaultActiveKey="0">
              {judge.grade &&
                judge.grade.map((grade) => (
                  <div key={grade.id}>
                    <Accordion.Item eventKey={`${grade.id}`}>
                      <Accordion.Header>
                        <h6>{grade.name}</h6>
                      </Accordion.Header>
                      <Accordion.Body>
                        {grade.grade.map((criteria) => (
                          <div className="criterion" key={criteria.id}>
                            <p>{criteria.name}</p>
                            <div className="slider">
                              <p>0</p>
                              <Slider
                                aria-label="Temperature"
                                defaultValue={0}
                                //   getAriaValueText={valuetext}
                                valueLabelDisplay="auto"
                                onChange={(event) =>
                                  handleChange(event, criteria, grade)
                                }
                                step={0.5}
                                marks
                                min={0}
                                max={10}
                              />
                              <p>10</p>
                            </div>
                          </div>
                        ))}
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                ))}
            </Accordion>
            <div className="btn-done">
              <Button variant="light" onClick={handleSubmit}>
                Done
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default observer(TeamsPage);
