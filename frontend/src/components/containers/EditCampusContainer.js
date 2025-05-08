/*==================================================
EditCampusContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */

import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditCampusView from '../views/EditCampusView';
import { editCampusThunk, fetchCampusThunk } from '../../store/thunks';

class EditCampusContainer extends Component {
  // Initialize state
  constructor(props){
    super(props);
    this.state = {
      name: "", 
      address: "", 
      description: "", 
      imageURL: "",
      redirect: false, 
      redirectId: null
    };
  }

  // Fetch existing campus info when component mounts
  componentDidMount() {
    const { campus } = this.props;
    if (campus) {
      this.setState({
        name: campus.name,
        address: campus.address,
        description: campus.description,
        imageURL: campus.imageURL,
      });
    }
  }

  // Capture input data when it is entered
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // Take action after user clicks the submit button
  handleSubmit = async event => {
    event.preventDefault();

    const campusId = this.props.match.params.id;

    // Create updated campus object
    let updatedCampus = {
      id: campusId,
      name: this.state.name,
      address: this.state.address,
      description: this.state.description,
      imageURL: this.state.imageURL
    };

    // Dispatch edit action to backend
    await this.props.editCampus(updatedCampus);

    // Update state and trigger redirect
    this.setState({
      redirect: true,
      redirectId: campusId
    });
  }

  // Unmount when the component is being removed from the DOM
  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null });
  }

  // Render edit campus input form
  render() {
    // Redirect to the campus page after submit
    if(this.state.redirect) {
      return (<Redirect to={`/campus/${this.state.redirectId}`} />);
    }

    // Display the form with prefilled data via the View component
    return (
      <div>
        <Header />
        <EditCampusView 
          name={this.state.name}
          address={this.state.address}
          description={this.state.description}
          imageURL={this.state.imageURL}
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

// Map dispatch to props to allow editing and fetching a campus
const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    editCampus: (campus) => dispatch(editCampusThunk(campus))
  }
}

// Export store-connected container by default
export default connect(null, mapDispatch)(EditCampusContainer);
