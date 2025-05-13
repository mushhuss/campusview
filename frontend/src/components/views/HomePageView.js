import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Styling
const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f5',
  },
  title: {
    fontSize: '32px',
    color: '#11153e',
    fontWeight: 'bold',
    fontFamily: 'Courier, sans-serif',
    marginBottom: '40px',
  },
  buttonContainer: {
    display: 'flex',
    gap: '20px',
  },
  button: {
    fontWeight: 'bold',
    textTransform: 'none',
  },
  links: {
    textDecoration: 'none',
  },
}));

const HomePageView = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>
        Campus Management System
      </Typography>

      <div className={classes.buttonContainer}>
        <Link to="/campuses" className={classes.links}>
          <Button 
            variant="contained" 
            color="primary" 
            className={classes.button}
          >
            All Campuses
          </Button>
        </Link>

        <Link to="/students" className={classes.links}>
          <Button 
            variant="contained" 
            color="primary" 
            className={classes.button}
          >
            All Students
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HomePageView;
