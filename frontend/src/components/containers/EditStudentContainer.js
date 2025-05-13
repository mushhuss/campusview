/*==================================================
EditStudentContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
// import Header from './Header';
// import EditStudentView from '../views/EditStudentView';
import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditStudentView from '../views/EditStudentView';
import { fetchStudentThunk, editStudentThunk } from '../../store/thunks';

class EditStudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      campusId: '',
      email: '',
      imageURL: '',
      gpa: '',
      redirect: false,
      redirectId: null,
    };
  }

  componentDidMount() {
    const { student } = this.props;
    if (student) {
      this.setState({
        firstname: student.firstname,
        lastname: student.lastname,
        campusId: student.campusId,
        email: student.email,
        imageURL: student.imageUrl, // using 'imageURL' in state, 'imageUrl' in backend (like your EditCampus)
        gpa: student.gpa,
      });
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.name === 'gpa' ? parseFloat(event.target.value) : event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const studentId = this.props.match.params.id;

    let updatedStudent = {
      id: studentId,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      campusId: this.state.campusId,
      email: this.state.email,
      imageUrl: this.state.imageURL, // Send to backend as 'imageUrl'
      gpa: this.state.gpa,
    };

    await this.props.editStudent(updatedStudent);

    this.setState({
      redirect: true,
      redirectId: studentId,
    });
  };

  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/student/${this.state.redirectId}`} />;
    }

    return (
      <div>
        <Header />
        <EditStudentView
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          campusId={this.state.campusId}
          email={this.state.email}
          imageURL={this.state.imageURL}
          gpa={this.state.gpa}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

// Map state to props so the component can access the student from Redux
const mapState = (state, ownProps) => {
  return {
    student: state.student, // Assumes the student is fetched into 'student' slice in Redux
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    editStudent: (student) => dispatch(editStudentThunk(student)),
  };
};

export default connect(mapState, mapDispatch)(EditStudentContainer);