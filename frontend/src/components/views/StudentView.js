/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import { Link } from "react-router-dom";
import './StudentView.css';

const StudentView = ({ student }) => {
  if (!student) return <p>Student not found.</p>;

  return (
    <div className="student-container">
      <div className="student-header">
        <h1>{student.firstname} {student.lastname}</h1>
      </div>
      <img
        src={student.imageUrl}
        alt="Student"
        width="150"
      />
      <div className="student-info">
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>GPA:</strong> {student.gpa ?? "N/A"}</p>
        {student.campus ? (
          <p>
            <strong>Enrolled Campus:</strong>{" "}
            <Link to={`/campus/${student.campus.id}`}>
              {student.campus.name}
            </Link>
          </p>
        ) : (
          <p><strong>Not Enrolled In Any Campus</strong></p>
        )}
      </div>
      <div className="student-buttons">
        <Link to={`/editstudent/${student.id}`}>
          <button>Edit Student</button>
        </Link>
        <Link to={`/students`}>
          <button>Back to All Students</button>
        </Link>
      </div>
    </div>

  );
};

export default StudentView;