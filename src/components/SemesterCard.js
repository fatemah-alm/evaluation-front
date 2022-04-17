import { Button, Card, Col } from "react-bootstrap";

function SemesterCard({ semester }) {
  // const handleDelete = () => semesterStore.deleteSemester(Semester._id);

  return (
    <div className="card">
      <Card>
        <Card.Body>
          <div>
            <Card.Title>{semester.name}</Card.Title>
          </div>
          <div>
            <Card.Text>{semester.added_by.username} </Card.Text>
          </div>
          {/* <Card.Text>{semester.description}</Card.Text> */}
          {/* <Button className="m-1" onClick={handleDelete} variant="danger">
              DELETE
            </Button> */}
          {/* <SemesterModal oldSemester={Semester} /> */}
        </Card.Body>
      </Card>
    </div>
  );
}

export default SemesterCard;
