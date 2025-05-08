import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import React from "react";
import "./CampusView.css";

const CampusView = (props) => {
  const { campus } = props;

  if (!campus) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1 className="title">
        {campus.name}
      </h1>

      <div className="card">
        <div className="cardContent">
          <p className="infoLabel">Description:</p>
          <p className="descriptionText">{campus.description}</p>

          <p className="infoLabel">Address:</p>
          <p className="addressText">{campus.address}</p>

          <p className="infoLabel">Image URL:</p>
          <p className="descriptionText">{campus.imageURL}</p>

          <h2 className="title">Students Enrolled:</h2>

          {campus.students && campus.students.length > 0 ? (
            campus.students.map((student) => {
              let name = student.firstname + " " + student.lastname;
              return (
                <Link to={`/student/${student.id}`} key={student.id} className="studentLink">
                  <p className="studentName">{name}</p>
                </Link>
              );
            })
          ) : (
            <p className="noStudentsText">No students enrolled.</p>
          )}
        </div>
      </div>

      <Link to={`/editcampus/${campus.id}`} className="editLink">
        <Button variant="contained" className="button">
          Edit Campus
        </Button>
      </Link>
    </div>
  );
};

export default CampusView;
