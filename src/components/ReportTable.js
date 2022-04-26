import React from "react";
import { Table } from "react-bootstrap";
import { observer } from "mobx-react";
const ReportTable = ({ project, teamId }) => {
  console.log(teamId, "TEAM");
  let length = project.judge.length;
  let avgScorePerTeam = 0;
  const handleCriteria = (criteriaId) => {
    console.log(criteriaId, "ID");
    project.judge.map((judge) =>
      judge.grade.map((team) => {
        if (+team.id === +teamId)
          team.grade.map((criteria) => {
            if (+criteria.id === +criteriaId) {
              console.log("teeest");
              return (avgScorePerTeam += criteria.grade);
            }
          });
      })
    );

    console.log(avgScorePerTeam);
  };

  return (
    <Table striped bordered hover style={{ width: "80%", textAlign: "center" }}>
      <thead>
        <tr>
          <th>Criteria</th>
          <th>Avg. Score</th>
          <th>Weight</th>
          <th>Weighted Avg.</th>
        </tr>
      </thead>
      <tbody>
        {project.criterias.map((criteria) => {
          handleCriteria(criteria.id);
          return (
            <tr>
              <th scope="row">{criteria.name}</th>
              <td>{(avgScorePerTeam / length) * 10}%</td>
              <td>{criteria.weight}</td>
              <td>
                {((avgScorePerTeam / length) * 0.1 * criteria.weight) / 100}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default observer(ReportTable);
