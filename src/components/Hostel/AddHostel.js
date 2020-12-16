import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import PropTypes from "prop-types"; 
import { connect } from "react-redux";
import { createHostel } from "../../actions/hostelActions";
import axios from "axios";

class AddHostel extends Component {
  constructor() {
    super();

    this.state = {
      hostelName: "",
      hostelid: "",
      numberOfRooms: "",
      hostelType:"",
      email:""

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

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newHostel = {
      hostelName: this.state.hostelName,
      hostelid: this.state.hostelid,
      numberOfRooms: this.state.numberOfRooms,
      hostelType:this.state.hostelType,
      email:this.state.email
    };
    this.props.createHostel(newHostel, this.props.history);
    console.log(newHostel);
  }

  render() {
    return (
      <div>
        {
          
        }

        <div className="project">
          <div className="container">
            <div className="row" style={{width:'800px', margin:'0 auto' ,marginTop:'100px'}}>
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Create Hostels </h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg "
                      placeholder="Hostel Id"
                      name="hostelid"
                      value={this.state.hostelid}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Hostel Name"
                      name="hostelName"
                      value={this.state.hostelName}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                    type="text"
                      className="form-control form-control-lg"
                      placeholder="NumberOfRooms"
                      name="numberOfRooms"
                      value={this.state.numberOfRooms}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                    type="text"
                      className="form-control form-control-lg"
                      placeholder="Warden Email"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                    type="text"
                      className="form-control form-control-lg"
                      placeholder="Hosteltype"
                      name="hostelType"
                      value={this.state.hostelType}
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

AddHostel.propTypes = {
  createHostel: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});


export default connect(
  mapStateToProps,
  {createHostel}
)(AddHostel);