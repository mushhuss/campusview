import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';
import './HomePageView.css';

const HomePageView = () => {
  return (
    <div className="root">
      <Typography className="title">
        Campus Management System
      </Typography>

      <div className="buttonContainer">
        <Link to="/campuses" className="links">
          <Button 
            variant="contained" 
            color="primary" 
            className="button"
          >
            All Campuses
          </Button>
        </Link>

        <Link to="/students" className="links">
          <Button 
            variant="contained" 
            color="primary" 
            className="button"
          >
            All Students
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HomePageView;
