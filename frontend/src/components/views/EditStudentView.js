/*==================================================
EditStudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the home page.
================================================== */
// const EditStudentView = () => {
//   // Render EditStudentView page view
//   return (
//     <div >
//       <h1>Edit Student</h1>
//     </div>
//   );
// }

// export default EditStudentView;
import './EditStudentView.css';

const EditStudentView = (props) => {
  const { handleChange, handleSubmit, firstname, lastname, email, imageURL, gpa } = props;

  return (
    <div>
      <h1>Edit Student</h1>

      <div className="form-container">
        <div className="form-title">
          <p className="form-title-text">Update Student Info</p>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <label>First Name:</label>
          <input type="text" name="firstname" value={firstname} onChange={handleChange} />
          <br/><br/>

          <label>Last Name:</label>
          <input type="text" name="lastname" value={lastname} onChange={handleChange} />
          <br/><br/>

          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={handleChange} />
          <br/><br/>

          <label>Image URL:</label>
          <input type="text" name="imageURL" value={imageURL} onChange={handleChange} />
          <br/><br/>

          <label>GPA:</label>
          <input type="number" step="0.01" min="0" max="4" name="gpa" value={gpa} onChange={handleChange} />
          <br/><br/>

          <button type="submit">Save Changes</button>
          <br/><br/>
        </form>
      </div>
    </div>
  );
}

export default EditStudentView;