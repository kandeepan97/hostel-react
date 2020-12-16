import React, { Component } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import {createNewStudent} from "../../actions/securityActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import classnames from "classnames";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class Register extends Component {

    constructor(){
        super();

        this.state = {
            studentid:"",
            firstName:"",
            lastName:"",
            email:"",
            address:"",
            mobileNumber:"",
            department:"",
            faculty:"",
            year:"",
            gender:"",
            password:"",
            confirmPassword:"",
            role:"",
            formErrors: {
              studentid:"",
              firstName: "",
              lastName: "",
              email: "",
              address:"",
              mobileNumber:"",
              department:"",
              faculty:"",
              year:"",
              gender:"",
              password: "",
              confirmPassword:"",
            }              
        }
      this.onChange = this.onChange.bind(this);
      this.onSubmit= this.onSubmit.bind(this);  
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
      }


    onSubmit(e){
        e.preventDefault();
        const newStudent = {
            studentid:this.state.studentid,
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            email:this.state.email,
            address:this.state.address,
            mobileNumber:this.state.mobileNumber,
            department:this.state.department,
            faculty:this.state.faculty,
            year:this.state.year,
            gender:this.state.gender,
            password:this.state.password,
            confirmPassword:this.state.confirmPassword,
            role:"student",
        }
        this.props.createNewStudent(newStudent,this.props.history);
    }



    onChange(e) {
      e.preventDefault();
      const { name, value } = e.target;
      let formErrors = { ...this.state.formErrors };
  
      switch (name) {
        case "firstName":
          formErrors.firstName =
            value.length < 3 ? "FirstName is required" : "";
          break;
        case "lastName":
          formErrors.lastName =
            value.length < 3 ? "LastName is required" : "";
          break;
        case "email":
          formErrors.email = emailRegex.test(value)
            ? ""
            : "invalid email address";
          break;
        case "address":
          formErrors.address =
            value.length < 5 ? "Address is required" : "";
          break;
        case "mobileNumber":
            formErrors.mobileNumber =
              value.length < 10 ? "10 Numbers required" : "";
            break;
        case "department":
          formErrors.department =
            value.length < 3 ? "Departrment is required" : "";
          break;
        case "faculty":
            formErrors.faculty =
              value.length < 3 ? "Faculty is required" : "";
            break;
        case "year":
              formErrors.year =
                value.length < 1 ? "Year is required" : "";
              break;
        case "gender":
                formErrors.gender =
                  value.length < 1 ? "gender is required" : "";
                break;                 
        case "password":
          formErrors.password =
            value.length < 6 ? "minimum 6 characaters required" : "";
          break;
        default:
          break;
      }
  
      this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };

  render() {
    const { formErrors } = this.state;
    return (
      <div className="register">
        <div className="container">
          <div className="row" style={{ margin:'0 auto' ,marginTop:'100px'}}>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Register</h1>
              <p className="lead text-center">Create your Account</p>
              <form onSubmit={this.onSubmit} no>
                  <div style={{
                      display:'flex',
                      flexWrap:'wrap',
                      alignItems:'center',
                      justifyContent:'space-evenly',
                              }}>
              <div className="form-group" style={{ width:'300px'}}>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="First Name"
                    name="firstName"
                    noValidate
                    value={this.state.firstName}
                    onChange={this.onChange}
                  />
                  {formErrors.firstName.length > 0 && (
                    <span className="errorMessage">{formErrors.firstName}</span>
                  )}
                </div>
                <div className="form-group" style={{ width:'300px'}}>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Last Name"
                    name="lastName"
                    noValidate
                    value={this.state.lastName}
                    onChange={this.onChange}
                  />
                  {formErrors.lastName.length > 0 && (
                    <span className="errorMessage">{formErrors.lastName}</span>
                  )}
                </div>
                <div className="form-group" style={{ width:'300px'}}>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Student Id"
                    name="studentid"
                    noValidate
                    value={this.state.studentid}
                    onChange={this.onChange}
                  />
                  {formErrors.studentid.length > 0 && (
                    <span className="errorMessage">{formErrors.studentid}</span>
                  )}
                </div>
                <div className="form-group" style={{ width:'300px'}}>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email"
                    name="email"
                    noValidate
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  {formErrors.email.length > 0 && (
                    <span className="errorMessage">{formErrors.email}</span>
                  )}
                </div>
                <div className="form-group" style={{ width:'300px'}}>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Mobile Number"
                    name="mobileNumber"
                    noValidate
                    value={this.state.mobileNumber}
                    onChange={this.onChange}
                  />
                  {formErrors.mobileNumber.length > 0 && (
                    <span className="errorMessage">{formErrors.mobileNumber}</span>
                  )}
                </div>
                <div className="form-group" style={{ width:'300px'}}>
                <select name='faculty' value={this.state.faculty} onChange={this.onChange} className="form-control form-control-lg">
                <option value='0'>Faculty</option>
                <option value='agri'>Agricultural Sciences</option>
                <option value='applied'>Applied Sciences</option>
                <option value='geo'>Geomatics</option>
                <option value='management'>Management Studies</option>
                <option value='medicine'>Medicine</option>
                <option value='social'>Social Sciences & languages</option>
                <option value='technology'>Technology</option>
              </select>
              {formErrors.faculty.length > 0 && (
                <span className="errorMessage">{formErrors.faculty}</span>
              )}
                </div>
                <div className="form-group" style={{ width:'300px'}}>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Department"
                    name="department"
                    noValidate
                    value={this.state.department}
                    onChange={this.onChange}
                  />
                  {formErrors.department.length > 0 && (
                    <span className="errorMessage">{formErrors.department}</span>
                  )}
                </div>
                <div className="form-group" style={{ width:'300px'}}>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Address"
                    name="address"
                    noValidate
                    value={this.state.address}
                    onChange={this.onChange}
                  />
                  {formErrors.address.length > 0 && (
                    <span className="errorMessage">{formErrors.address}</span>
                  )}
                </div>
                <div className="form-group" style={{ width:'300px'}}>
                <select name='year' value={this.state.year} onChange={this.onChange} className="form-control form-control-lg">
                <option value='0'>Year</option>
                <option value='1st'>1st Year</option>
                <option value='2nd'>2nd Year</option>
                <option value='3rd'>3rd Year</option>
                <option value='4th'>4th Year</option>
              </select>
              {formErrors.year.length > 0 && (
                <span className="errorMessage">{formErrors.year}</span>
              )}
                </div>

                <div className="form-group" style={{ width:'300px'}}>
                <select name='gender' value={this.state.gender} onChange={this.onChange} className="form-control form-control-lg">
                <option value='0'>Gender</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </select>
              {formErrors.gender.length > 0 && (
                <span className="errorMessage">{formErrors.gender}</span>
              )}
                </div>
                <div className="form-group" style={{ width:'300px'}}>
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    noValidate
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {formErrors.password.length > 0 && (
                    <span className="errorMessage">{formErrors.password}</span>
                  )}
                </div>
                <div className="form-group" style={{ width:'300px'}}>
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    noValidate
                    value={this.state.confirmPassword}
                    onChange={this.onChange}
                  />
                  {formErrors.confirmPassword.length > 0 && (
                    <span className="errorMessage">{formErrors.confirmPassword}</span>
                  )}
                </div>
                  </div>
                <input type="submit"  style={{ width:'300px' , margin:'0 auto'}} className="btn btn-info btn-block mt-4" />

              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Register.propTypes = {
    createNewStudent: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state =>({
    errors: state.errors
});


export default connect (mapStateToProps,{createNewStudent})(Register);