/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import { Link } from "react-router-dom";

const StudentView = ({ student }) => {
  if (!student) return <p>Student not found.</p>;

  return (
    <div>
      <h1>{student.firstname} {student.lastname}</h1>
      <img
        src={student.imageUrl || "https://via.placeholder.com/150"}
        alt="Student"
        width="150"
      />
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
        <p>No Campus</p>
      )}

      <Link to={`/editstudent/${student.id}`}>
        <button>Edit Student</button>
      </Link>
      <Link to={`/students`}>
        <button>Back to All Students</button>
      </Link>
    </div>
  );
};

export default StudentView;