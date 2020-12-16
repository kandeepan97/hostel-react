import React, { Component } from "react";
import { connect } from "react-redux";
import { getStudents } from "../../actions/studentActions";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {deleteStudent} from "../../actions/studentActions";


class Students extends Component {
  componentDidMount(){
    this.props.getStudents();
  };

onDeleteClick = (id) => {
  this.props.deleteStudent(id,this.props.history);
};

  render() {
    const { students } = this.props.student;
    console.log(students);
    return (
      <div className="container">
        <div className="card card-body bg-light mb-3">
        <div className="row">
          </div>
          <h1>Students</h1>
          <hr/>

        {students.map(student => (
      
          <div class="ui list">
          <div class="item">
             <img class="ui avatar image" src="/images/avatar2/small/rachel.png"/>
             <div class="content">
               <h3 class="header">{student.firstName +"_"+ student.lastName}</h3>
               <div class="description">{student.email} <h5><h4>
               {student.studentid}</h4></h5>
             </div>
            
             <div class="extra content">
      <div class="ui two buttons">
        <div class="ui basic green button">
        <Link to={`/updateStudent/${student.studentid}`}>
        View
        </Link>
        </div>
      </div>
    </div>
             
             
             </div>
          </div>
          </div>
          ))}
        </div>
      </div>

        
      
    );
  }
}

Students.propTypes = {
  student: PropTypes.object.isRequired,
  getStudents: PropTypes.func.isRequired,
  deleteStudent: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  student: state.student
});

export default connect(
  mapStateToProps,
  {getStudents,deleteStudent}
  ) (Students);
