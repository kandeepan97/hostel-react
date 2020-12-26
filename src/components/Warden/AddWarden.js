import React, { Component } from "react";
import PropTypes from "prop-types"; 
import { connect } from "react-redux";
import { createWarden } from "../../actions/wardenActions";





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
    this.setState({ [e.target.name]: e.target.value });
  }


  

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
                <form onSubmit={this.onSubmit} >
                
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg "
                      placeholder="Warden Id"
                      name="wardenid"
                      
                      value={this.state.wardenid}
                      onChange={this.onChange}
                    />
                    
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="First Name"
                      name="firstName"
                      
                      value={this.state.firstName}
                      onChange={this.onChange}
                    />
                    
                  </div>
                  <div className="form-group">
                    <input
                    type="text"
                      className="form-control form-control-lg"
                      placeholder="Last Name"
                      name="lastName"
                      
                      value={this.state.lastName}
                      onChange={this.onChange}
                    />
                   
                  </div>
                  <div className="form-group">
                    <input
                    type="text"
                      className="form-control form-control-lg"
                      placeholder="mobileNumber"
                      name="mobileNumber"
                      
                      value={this.state.mobileNumber}
                      onChange={this.onChange}
                    />
                    
                  </div>
                  
                  <div className="form-group">
                    <input
                    type="email"
                      className="form-control form-control-lg"
                      placeholder="email"
                      name="email"
                      
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                    
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg "
                      placeholder="Hostel Id"
                      name="hostelId"
                      
                      value={this.state.hostelId}
                      onChange={this.onChange}
                    />
                    
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-lg "
                      placeholder="Password"
                      name="password"
                      
                      value={this.state.password}
                      onChange={this.onChange}
                    />

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

