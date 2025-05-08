import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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

const NewCampusView = (props) => {
  const { handleChange, handleSubmit } = props;
  const classes = useStyles();

  const [errors, setErrors] = useState({
    name: '',
    address: '',
    description: '',
    imageURL: ''
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

    setErrors(newErrors);
    return isValid;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // collect form data from inputs
    const formData = {};
    const formElements = e.target.elements;

    formData.name = formElements.name.value;
    formData.address = formElements.address.value;
    formData.description = formElements.description.value;
    formData.imageURL = formElements.imageURL.value;

    if (validate(formData)) {
      handleSubmit(e);
    }
  };

  return (
    <div>
      <h1>New Campus</h1>

      <div className={classes.root}>
        <div className={classes.formContainer}>
          <div className={classes.formTitle}>
            <Typography style={{
              fontWeight: 'bold',
              fontFamily: 'Courier, sans-serif',
              fontSize: '20px',
              color: '#11153e'
            }}>
              Add a Campus
            </Typography>
          </div>
          <form style={{ textAlign: 'center' }} onSubmit={onSubmit}>
            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Name: </label>
            <input type="text" name="name" onChange={(e) => handleChange(e)} />
            {errors.name && <div className={classes.errorText}>{errors.name}</div>}
            <br /><br />

            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Address: </label>
            <input type="text" name="address" onChange={(e) => handleChange(e)} />
            {errors.address && <div className={classes.errorText}>{errors.address}</div>}
            <br /><br />

            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Description: </label>
            <input type="text" name="description" onChange={(e) => handleChange(e)} />
            {errors.description && <div className={classes.errorText}>{errors.description}</div>}
            <br /><br />

            <label style={{ color: '#11153e', fontWeight: 'bold' }}>imageURL: </label>
            <input type="text" name="imageURL" onChange={(e) => handleChange(e)} />
            {errors.imageURL && <div className={classes.errorText}>{errors.imageURL}</div>}
            <br /><br />

            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
            <br /><br />
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewCampusView;
