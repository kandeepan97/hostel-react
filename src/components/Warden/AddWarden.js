import React, { Component } from "react";
import PropTypes from "prop-types"; 
import { connect } from "react-redux";
import { createWarden } from "../../actions/wardenActions";

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



class AddWarden extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      wardenid: "",
      phoneNumber: "",
      email:"",
      lastName:"",
      hostelId:"",
      password:"",
      role:"",
      formErorrs: {
        firstName:"",
        wardenid:"",
        phoneNumber:"",
        email:"",
        lastName:"",
        hostelId:"",
        password:"",
      }

    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //life cycle hooks
  componentWillReceiveProps(nextProps){
    if(nextProps.errors){
      this.setState({errors:nextProps.errors});
    }

  }

  onSubmit(e) {
    e.preventDefault();
 
    const newWarden = {
      firstName: this.state.firstName,
      wardenid: this.state.wardenid,
      mobileNumber: this.state.mobileNumber,
      email:this.state.email,
      lastName:this.state.lastName,
      hostelId:this.state.hostelId,
      password:this.state.password,
      role:"warden",
    };
    this.props.createWarden(newWarden, this.props.history);
    
   
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
          case "wardenid":
          formErrors.wardenid =
            value.length < 3 ? "Wardenid is required" : "";
          break;
          case "phoneNumber":
          formErrors.phoneNumber =
            value.length < 10 ? "Valid Phone Number is required" : "";
          break;
          case "hostelId":
          formErrors.hostelId =
            value.length < 3 ? "hostelId is required" : "";
          break;
          case "email":
          formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
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
      <div>
        <div className="project">
          <div className="container">
            <div className="row" style={{width:'800px', margin:'0 auto' ,marginTop:'100px'}}>
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Add Warden </h5>
                <hr />
                <form onSubmit={this.onSubmit} noValidate>
                
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg "
                      placeholder="Warden Id"
                      name="wardenid"
                      noValidate
                      value={this.state.wardenid}
                      onChange={this.onChange}
                    />
                    {formErrors.wardenid.length > 0 && (
                      <span className="errorMessage">{formErrors.wardenid}</span>
                    )}
                  </div>
                  <div className="form-group">
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
                  <div className="form-group">
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
                  <div className="form-group">
                    <input
                    type="text"
                      className="form-control form-control-lg"
                      placeholder="mobileNumber"
                      name="mobileNumber"
                      noValidate
                      value={this.state.mobileNumber}
                      onChange={this.onChange}
                    />
                    {formErrors.mobileNumber.length > 0 && (
                    <span className="errorMessage">{formErrors.mobileNumber}</span>
                  )}
                  </div>
                  
                  <div className="form-group">
                    <input
                    type="email"
                      className="form-control form-control-lg"
                      placeholder="email"
                      name="email"
                      noValidate
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                    {formErrors.email.length > 0 && (
                    <span className="errorMessage">{formErrors.email}</span>
                  )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg "
                      placeholder="Hostel Id"
                      name="hostelId"
                      noValidate
                      value={this.state.hostelId}
                      onChange={this.onChange}
                    />
                    {formErrors.hostelId.length > 0 && (
                    <span className="errorMessage">{formErrors.hostelId}</span>
                  )}
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-lg "
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
                  
                

                  <input
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }  
}

AddWarden.propTypes = {
  createWarden: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  {createWarden}
  )(AddWarden);

