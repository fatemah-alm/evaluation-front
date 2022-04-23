import React from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";
import projectStore from "../stores/projectStore";
import semesterStore from "../stores/semesterStore";
import judgeStore from "../stores/judgeStore";
import { Accordion } from "react-bootstrap";
import { Slider } from "@mui/material";

const TeamsPage = () => {
  const { projectId, judgeId } = useParams();
  const project = projectStore.projects.find((project) => {
    return +project.id === +projectId;
  }) ?? { name: "", teams: [], semester: "" };
  const semester = semesterStore.semesters.find(
    (semester) => semester.id === +project.semester
  ) ?? { name: "" };
  const judge = judgeStore.judges.find((judge) => {
    return +judge.id === +judgeId;
  }) ?? { name: "", project: "" };
  return (
    <div className="home-page report-page">
      {" "}
      <div className="report-page-header">
        <h2>{project.name}</h2>
        <h6 style={{ color: "#54575b" }}>{semester.name}</h6>
      </div>
      <div className="report-page-header judge-name">
        <h5>hello {judge.name},</h5>
        <p>
          Please watch the presentaions of the following teams carefully, and
          judge them according to the criteria below
        </p>
      </div>
      <div className="teams-page">
        <h5>Teams</h5>
        <Accordion defaultActiveKey="0">
          {project.teams.map((team) => (
            <>
              <Accordion.Item eventKey={`${team.id}`}>
                <Accordion.Header>
                  <h6>{team.name}</h6>
                </Accordion.Header>
                <Accordion.Body>
                  {project.criterias.map((criteria) => (
                    <div className="criterion">
                      <p>{criteria.name}</p>
                      <div className="slider">
                        <Slider
                          aria-label="Temperature"
                          defaultValue={30}
                          // getAriaValueText={valuetext}
                          valueLabelDisplay="auto"
                          step={10}
                          marks
                          min={10}
                          max={110}
                        />
                      </div>
                    </div>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default observer(TeamsPage);
