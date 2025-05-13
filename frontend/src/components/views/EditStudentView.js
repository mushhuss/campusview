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
  const { handleChange, handleSubmit, firstname, lastname, email, imageURL, gpa } = props;
  const classes = useStyles();

  const [errors, setErrors] = useState({
    firstname: '',
    lastname: '',
    email: '',
    imageURL: '',
    gpa: ''
  });

  const validate = () => {
    const newErrors = {};
    let isValid = true;

    if (!firstname.trim()) {
      newErrors.firstname = 'This field cannot be empty.';
      isValid = false;
    }
    if (!lastname.trim()) {
      newErrors.lastname = 'This field cannot be empty.';
      isValid = false;
    }
    if (!email.trim()) {
      newErrors.email = 'This field cannot be empty.';
      isValid = false;
    }
    if (!imageURL.trim()) {
      newErrors.imageURL = 'This field cannot be empty.';
      isValid = false;
    }
    if (gpa === '' || isNaN(parseFloat(gpa)) || parseFloat(gpa) < 0 || parseFloat(gpa) > 4) {
      newErrors.gpa = 'GPA must be between 0 and 4.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
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
          <input type="text" name="firstname" value={firstname} onChange={handleChange} />
          {errors.firstname && <div className={classes.errorText}>{errors.firstname}</div>}
          <br /><br />

          <label style={{ color: '#11153e', fontWeight: 'bold' }}>Last Name: </label>
          <input type="text" name="lastname" value={lastname} onChange={handleChange} />
          {errors.lastname && <div className={classes.errorText}>{errors.lastname}</div>}
          <br /><br />

          <label style={{ color: '#11153e', fontWeight: 'bold' }}>Email: </label>
          <input type="email" name="email" value={email} onChange={handleChange} />
          {errors.email && <div className={classes.errorText}>{errors.email}</div>}
          <br /><br />

          <label style={{ color: '#11153e', fontWeight: 'bold' }}>Image URL: </label>
          <input type="text" name="imageURL" value={imageURL} onChange={handleChange} />
          {errors.imageURL && <div className={classes.errorText}>{errors.imageURL}</div>}
          <br /><br />

          <label style={{ color: '#11153e', fontWeight: 'bold' }}>GPA: </label>
          <input type="number" name="gpa" step="0.01" min="0" max="4" value={gpa} onChange={handleChange} />
          {errors.gpa && <div className={classes.errorText}>{errors.gpa}</div>}
          <br /><br />

          <Button variant="contained" color="primary" type="submit">
            Save Changes
          </Button>
          <br /><br />
        </form>
      </div>
    </div>
  );
};

export default EditStudentView;
