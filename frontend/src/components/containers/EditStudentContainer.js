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
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            campusId: "",
            email: "",
            imageUrl: "",
            gpa: "",
            redirect: false,
            redirectId: null
        }
    }

    // get the student info
    async componentDidMount() {
        try {
          let student = await this.props.fetchStudent(this.props.match.params.id);
          this.setState({
            firstname: student.firstname,
            lastname: student.lastname,
            campusId: student.campusId,
            email: student.email,
            imageUrl: student.imageUrl,
            gpa: student.gpa
          });
        } catch (err) {
          console.error("Failed to fetch student:", err);
        }
      }
    
    handleChange = event => {
        this.setState({
            // if(event.target.name == "gpa")
            // {
            //     [event.target.name]: parseFloat(event.target.value);
            // }
            // else
            // {
            //     [event.target.name]: event.target.value
            // }
            [event.target.name]: event.target.name === "gpa"
            ? parseFloat(event.target.value)
            : event.target.value
        });
    }

    handleSubmit = async event => {
        event.preventDefault();  // Prevent browser reload/refresh after submit.
    
        let student = {
          id: this.props.match.params.id,  // ID from route
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          campusId: this.state.campusId,
          email: this.state.email,
          imageUrl: this.state.imageUrl,
          gpa: this.state.gpa
        };
    
        // Update student in back-end database
        await this.props.editStudent(student);
    
        // Update state and trigger redirect to show the updated student
        this.setState({
          redirect: true,
          redirectId: student.id
        });
    }

    componentWillUnmount() {
        this.setState({ redirect: false, redirectId: null });
    }

    render() {
        // Redirect to student's page after submit
        if (this.state.redirect) {
          return (<Redirect to={`/student/${this.state.redirectId}`} />);
        }
    
        // Display the input form via the corresponding View component
        return (
          <div>
            <Header />
            <EditStudentView 
              student={this.state}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </div>
        );
    }
}

const mapDispatch = (dispatch) => {
    return {
      fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
      editStudent: (student) => dispatch(editStudentThunk(student)),
    };
};

export default connect(null, mapDispatch)(EditStudentContainer);