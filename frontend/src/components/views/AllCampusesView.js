import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import React from "react";
import "./AllCampusesView.css";

const AllCampusesView = (props) => {

  if (!props.allCampuses.length) {
    return (
      <div className="no-campus">
        There are no campuses.
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="title">All Campuses</h1>

      <Link to={`/newcampus`} style={{ textDecoration: 'none' }}>
        <button className="add-button">Add New Campus</button>
      </Link>

      {props.allCampuses.map((campus) => (
        <Link to={`/campus/${campus.id}`} key={campus.id} className="card">
          <div className="campus-name">{campus.name}</div>
          <button
            className="button"
            onClick={(e) => {
              e.stopPropagation(); // Prevent the card click
              props.deleteCampus(campus.id);
            }}
          >
            Delete
          </button>
        </Link>
      ))}
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
