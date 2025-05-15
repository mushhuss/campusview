/*==================================================
EditStudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the edit student page.
================================================== */
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';

// Create styling for the input form
const useStyles = makeStyles(() => ({
  formContainer: {
    width: '500px',
    backgroundColor: '#f0f0f5',
    borderRadius: '5px',
    margin: 'auto',
  },
  formTitle: {
    backgroundColor: '#c5c8d6',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '3px'
  },
  errorText: {
    color: 'red',
    fontSize: '0.8rem',
    marginTop: '4px'
  }
}));

const EditStudentView = (props) => {
  const { handleChange, handleSubmit, firstname, lastname, campusId, email, imageURL, gpa } = props;
  const classes = useStyles();

  const [errors, setErrors] = useState({
    firstname: '',
    lastname: '',
    email: '',
    imageURL: '',
    gpa: ''
  });

  const validate = (formData) => {
    const newErrors = {};
    let isValid = true;

    for (const field in formData) {
      if (field === 'campusId') continue;
      if (!formData[field] || formData[field].toString().trim().length === 0) {
        newErrors[field] = 'This field cannot be empty.';
        isValid = false;
      }
    }

    if (formData.gpa !== '') {
      const gpaValue = parseFloat(formData.gpa);
      if (isNaN(gpaValue) || gpaValue < 0 || gpaValue > 4) {
        newErrors.gpa = 'GPA must be between 0 and 4.';
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = {};
    const formElements = e.target.elements;

    formData.firstname = formElements.firstname.value;
    formData.lastname = formElements.lastname.value;
    formData.campusId = formElements.campusId.value;
    formData.email = formElements.email.value;
    formData.imageUrl = formElements.imageUrl.value;
    formData.gpa = formElements.gpa.value;

    if (validate(formData)) {
      handleSubmit(e);
    }
  };

  return (
    <div>
      <h1>Edit Student</h1>

      <div className={classes.formContainer}>
        <div className={classes.formTitle}>
          <Typography style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e' }}>
            Update Student Info
          </Typography>
        </div>

        <form style={{ textAlign: 'center' }} onSubmit={onSubmit}>
          <label style={{ color: '#11153e', fontWeight: 'bold' }}>First Name: </label>
          <input type="text" name="firstname" defaultValue={firstname} onChange={handleChange} />
          {errors.firstname && <div className={classes.errorText}>{errors.firstname}</div>}
          <br/><br/>

          <label style={{ color: '#11153e', fontWeight: 'bold' }}>Last Name: </label>
          <input type="text" name="lastname" defaultValue={lastname} onChange={handleChange} />
          {errors.lastname && <div className={classes.errorText}>{errors.lastname}</div>}
          <br/><br/>

          <label style={{ color: '#11153e', fontWeight: 'bold' }}>Campus ID: </label>
          <input type="text" name="campusId" defaultValue={campusId} onChange={handleChange} />
          <br/><br/>

          <label style={{ color: '#11153e', fontWeight: 'bold' }}>Email: </label>
          <input type="email" name="email" defaultValue={email} onChange={handleChange} />
          {errors.email && <div className={classes.errorText}>{errors.email}</div>}
          <br/><br/>

          <label style={{ color: '#11153e', fontWeight: 'bold' }}>Image URL: </label>
          <input type="text" name="imageUrl" defaultValue={imageURL} onChange={handleChange} />
          {errors.imageUrl && <div className={classes.errorText}>{errors.imageUrl}</div>}
          <br/><br/>

          <label style={{ color: '#11153e', fontWeight: 'bold' }}>GPA: </label>
          <input type="number" name="gpa" step="0.01" min="0" max="4" defaultValue={gpa} onChange={handleChange} />
          {errors.gpa && <div className={classes.errorText}>{errors.gpa}</div>}
          <br/><br/>

          <Button variant="contained" color="primary" type="submit">
            Save Changes
          </Button>
          <br/><br/>
        </form>
      </div>
    </div>
  );
};

export default EditStudentView;
