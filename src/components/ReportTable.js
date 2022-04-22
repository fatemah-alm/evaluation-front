import React from "react";
import { Table } from "react-bootstrap";
import { observer } from "mobx-react";
const ReportTable = () => {
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
        <tr>
          <td>presentaion</td>
          <td>90%</td>
          <td>20</td>
          <td>19</td>
        </tr>
        <tr>
          <td>reading</td>
          <td>95%</td>
          <td>30</td>
          <td>27.5</td>
        </tr>
        <tr>
          <td>Listening</td>
          <td>86%</td>
          <td>20</td>
          <td>16</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default observer(ReportTable);
