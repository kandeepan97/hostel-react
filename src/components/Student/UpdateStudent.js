import React, { Component } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { getStudent,updateStudent } from "../../actions/studentActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

 class UpdateStudent extends Component {

    constructor(){
        super();

        this.state = {
            studentid:"",
            firstName: "",
            lastName:"",
            address:"",
            mobileNumber: "",
            email:"",
            year:"",
            faculty:"",
            department:"",
            gender:"",
            password:""
      
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps){
        const{
            studentid,
            firstName,
            lastName,
            address,
            mobileNumber,
            email,
            year,
            faculty,
            department,
            gender,
            password
        } = nextProps.student;

       this.setState({
        studentid,
            firstName,
            lastName,
            address,
            mobileNumber,
            email,
            year,
            faculty,
            department,
            gender,
            password

       });

    } 


     componentDidMount(){
         const { id } = this.props.match.params;
         this.props.getStudent(id, this.props.history);
     }

     onChange(e){
         this.setState({[e.target.name]: e.target.value });
     }

     onSubmit(e) {
         e.preventDefault();

         const UpdateStudent = {
            studentid: this.state.studentid,
            firstName: this.state.firstName,
            lastName:this.state.lastName,
            address:this.state.address,
            mobileNumber:this.state.mobileNumber,
            email:this.state.email,
            year:this.state.year,
            faculty:this.state.faculty,
            department:this.state.department,
            gender:this.state.gender,
            password:this.state.password
         };
         this.props.updateStudent(UpdateStudent,this.props.history);
     }
    render() {
        return (
            <div className="project">
            <div className="container">
            <div className="row" style={{width:'800px', margin:'0 auto' ,marginTop:'100px'}}>
                <div className="col-md-8 m-auto">
                    <h5 className="display-4 text-center">Update Student</h5>
                    <hr />
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg "
                             placeholder="Student Id"
                             name="studentid"
                             value={this.state.studentid} 
                             onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" 
                            placeholder="First Name"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg"
                             placeholder="Last Name"
                             name="lastname"
                             value={this.state.lastName}
                             onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                        <input type="text" className="form-control form-control-lg"
                         placeholder="Mobile Number"
                         name="mobileNumber"
                         value={this.state.mobileNumber}
                         onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                    <input type="text" className="form-control form-control-lg"
                     placeholder="Email"
                     name="email"
                     value={this.state.email}
                     onChange={this.onChange}/>
                </div>
                <div className="form-group">
                <input type="text" className="form-control form-control-lg"
                 placeholder="Year"
                 name="year"
                 value={this.state.year}
                 onChange={this.onChange}/>
            </div>
            <div className="form-group">
                <input type="text" className="form-control form-control-lg"
                 placeholder="Faculty"
                 name="faculty"
                 value={this.state.faculty}
                 onChange={this.onChange}/>
            </div>
            <div className="form-group">
                <input type="text" className="form-control form-control-lg"
                 placeholder="Department"
                 name="department"
                 value={this.state.department}
                 onChange={this.onChange}/>
            </div>
            <div className="form-group">
                <input type="text" className="form-control form-control-lg"
                 placeholder="Year"
                 name="year"
                 value={this.state.year}
                 onChange={this.onChange}/>
            </div>
            <div className="form-group">
            <input type="text" className="form-control form-control-lg" 
            placeholder="Gender"
            name="gender"
            value={this.state.gender}
            onChange={this.onChange}/>
        </div>
                        
                        

                        <input type="submit" className="btn btn-primary btn-block mt-4" />
                    </form>
                </div>
            </div>
        </div>
    </div>
        )
    }
}

UpdateStudent.propTypes = {
    getStudent: PropTypes.func.isRequired,
    updateStudent:PropTypes.func.isRequired,
    student: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    student: state.student.student
});

export default connect(
    mapStateToProps,
    {getStudent,updateStudent} 
    )(UpdateStudent);