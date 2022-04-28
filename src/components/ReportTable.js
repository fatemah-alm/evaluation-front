import React from "react";
import { Table } from "react-bootstrap";
import { observer } from "mobx-react";
const ReportTable = ({ project, teamId }) => {
  let length = project.judge ? project.judge.length : 0;
  let avgScorePerTeam = 0;
  let total = 0;

  const handleCriteria = (criteriaId) => {
    avgScorePerTeam = 0;
    // total = 0;

    project.judge.map((judge) =>
      judge.grade.map((team) => {
        if (+team.id === +teamId || teamId == 0)
          team.grade.map((criteria) => {
            if (+criteria.id === +criteriaId) {
              return (avgScorePerTeam += criteria.grade);
            }
          });
      })
    );

    total += avgScorePerTeam;
  };
  return (
    <>
      <div className="report">
        <Table
          striped
          bordered
          hover
          style={{ width: "80%", textAlign: "center" }}
        >
          <thead>
            <tr>
              <th>Criteria</th>
              <th>Avg. Score</th>
              <th>Weight</th>
              <th>Weighted Avg.</th>
            </tr>
          </thead>
          <tbody>
            {project.criterias &&
              project.criterias.map((criteria) => {
                handleCriteria(criteria.id);
                return (
                  <tr key={criteria.id}>
                    <th scope="row">{criteria.name}</th>
                    <td>
                      {teamId == 0
                        ? Math.round(
                            (((avgScorePerTeam / length) * 10) /
                              project.teams.length) *
                              100
                          ) / 100
                        : Math.round((avgScorePerTeam / length) * 10 * 100) /
                          100}
                      %
                    </td>
                    <td>{criteria.weight}</td>
                    <td>
                      {teamId == 0
                        ? Math.round(
                            (((avgScorePerTeam / length) *
                              10 *
                              criteria.weight) /
                              100 /
                              project.teams.length) *
                              100
                          ) / 100
                        : Math.round(
                            (((avgScorePerTeam / length) *
                              10 *
                              criteria.weight) /
                              100) *
                              100
                          ) / 100}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
      <div className="total">
        <h5>
          Total:{" "}
          {project.criterias && project.teams
            ? teamId == 0
              ? Math.round(
                  (((total / project.judge.length) * 10) /
                    project.criterias.length /
                    project.teams.length) *
                    100
                ) / 100
              : Math.round(
                  (((total / project.judge.length) * 10) /
                    project.criterias.length) *
                    100
                ) / 100
            : ""}
          %
        </h5>
      </div>
    </>
  );
};

export default observer(ReportTable);
