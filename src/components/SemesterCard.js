import { Button, Card, Col } from "react-bootstrap";

function SemesterCard({ semester }) {
  // const handleDelete = () => semesterStore.deleteSemester(Semester._id);

  return (
    <Col className="col-lg-4 mx-auto">
      <Card>
        <Card.Body>
          <Card.Title>{semester.name}</Card.Title>
          <Card.Text>{semester.added_by} </Card.Text>
          {/* <Card.Text>{semester.description}</Card.Text> */}
          {/* <Button className="m-1" onClick={handleDelete} variant="danger">
              DELETE
            </Button> */}
          {/* <SemesterModal oldSemester={Semester} /> */}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SemesterCard;
