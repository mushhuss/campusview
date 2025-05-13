/*==================================================
NewStudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the new student page.
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
  title: {
    flexGrow: 1,
    textAlign: 'left',
    textDecoration: 'none'
  },
  customizeAppBar: {
    backgroundColor: '#11153e',
    shadows: ['none'],
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

const NewStudentView = (props) => {
  const { handleChange, handleSubmit } = props;
  const classes = useStyles();

  const [errors, setErrors] = useState({
    firstname: '',
    lastname: '',
    campusId: '',
    email: '',
    imageUrl: '',
    gpa: ''
  });

  const validate = (formData) => {
    const newErrors = {};
    let isValid = true;

    for (const field in formData) {
      if (!formData[field].trim()) {
        newErrors[field] = 'This field cannot be empty.';
        isValid = false;
      }
    }

    if (formData.gpa) {
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
      <h1>New Student</h1>

      <div className={classes.root}>
        <div className={classes.formContainer}>
          <div className={classes.formTitle}>
            <Typography style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e' }}>
              Add a Student
            </Typography>
          </div>
          <form style={{ textAlign: 'center' }} onSubmit={onSubmit}>
            <label style={{ color: '#11153e', fontWeight: 'bold' }}>First Name: </label>
            <input type="text" name="firstname" onChange={(e) => handleChange(e)} />
            {errors.firstname && <div className={classes.errorText}>{errors.firstname}</div>}
            <br/><br/>

            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Last Name: </label>
            <input type="text" name="lastname" onChange={(e) => handleChange(e)} />
            {errors.lastname && <div className={classes.errorText}>{errors.lastname}</div>}
            <br/><br/>

            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Campus Id: </label>
            <input type="text" name="campusId" onChange={(e) => handleChange(e)} />
            {errors.campusId && <div className={classes.errorText}>{errors.campusId}</div>}
            <br/><br/>

            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Email: </label>
            <input type="text" name="email" onChange={(e) => handleChange(e)} />
            {errors.email && <div className={classes.errorText}>{errors.email}</div>}
            <br/><br/>

            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Image URL: </label>
            <input type="text" name="imageUrl" onChange={(e) => handleChange(e)} />
            {errors.imageUrl && <div className={classes.errorText}>{errors.imageUrl}</div>}
            <br/><br/>

            <label style={{ color: '#11153e', fontWeight: 'bold' }}>GPA: </label>
            <input type="number" name="gpa" step="0.01" min="0" max="4" onChange={(e) => handleChange(e)} />
            {errors.gpa && <div className={classes.errorText}>{errors.gpa}</div>}
            <br/><br/>

            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
            <br/><br/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewStudentView;
