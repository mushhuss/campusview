/*==================================================
AllStudentsView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the all students view page.
================================================== */
import { Link } from "react-router-dom";
import './AllStudentsView.css'

const AllStudentsView = (props) => {
  const {students, deleteStudent} = props;
  // If there is no student, display a message
  if (!students.length) {
    return (
    <div className="no-student">
      <p>There are no students.</p>
      <Link to={`newstudent`}>
        <button className="add-button">Add New Student</button>
      </Link>
    </div>
    );
  }
  
  // If there is at least one student, render All Students view 
  return (
    <div className="container">
      <h1 className="title">All Students</h1>

      {students.map((student) => {
          let name = student.firstname + " " + student.lastname;
          return (
            <div key={student.id} className="card">
              <Link to={`/student/${student.id}`} className="student-name">
                <h2>{name}</h2>
              </Link>
              <button className="button" onClick={() => deleteStudent(student.id)}>Delete</button>
              <hr/>
            </div>
          );
        }
      )}
      <br/>
      <Link to={`/newstudent`}>
        <button className="add-button">Add New Student</button>
      </Link>
      <br/><br/>
    </div>
  );
};


export default AllStudentsView;