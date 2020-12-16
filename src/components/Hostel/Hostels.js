import React, { Component } from "react";
import { connect } from "react-redux";
import { getHostel,getHostels,deleteHostel } from "../../actions/hostelActions";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";


class Hostels extends Component {
  componentDidMount(){
   this.props.getHostels(localStorage.getItem.email);
   //this.props.getHostel("hostel1");
   // console.log(localStorage.getItem("userId"));
  };

  onDeleteClick = (id) => {
    this.props.deleteHostel(id);
  };

  render() {
    const { hostels } = this.props.hostel;
    return (
      <div className="container">
        <div className="card card-body bg-light mb-3">
          <div className="row">

          <div className="col-lg-2 col-md-2 col-4">
          <h3>Hostel Id</h3>
          </div>
            <div className="col-lg-2 col-md-2 col-4">
              <h3>Hostel Name</h3>
              
            </div>
            <div className="col-lg-2 col-md-2 col-4">
              <h3>Hostel Type</h3>
              
            </div>
            <div className="col-lg-6 col-md-2 col-4">
              <h3>Manage Rooms</h3>
              
            </div>
            </div>
            <hr/>

            {hostels.map(hostel => (

              <div className="row">
          <div className="col-lg-2 col-md-2 col-4">
          <h6>{hostel.hostelid}</h6>
          </div>
            <div className="col-lg-2 col-md-2 col-4">
              <h6>{hostel.hostelName}</h6>
              
            </div>
            <div className="col-lg-2 col-md-2 col-4">
              <h6>{hostel.hostelType}</h6>
              
            </div>
            <div className="col-lg-2 col-md-2 col-4">
            <Link to={`/updateHostel/${hostel.hostelid}`}>
            <i className="fa fa-edit pr-1"> Update</i>
        </Link>
            
          </div>
          
          <div className="col-lg-2 col-md-2 col-4" onClick={this.onDeleteClick.bind(this, hostel.hostelid)}>
          <i className="fa fa-minus-circle pr-1"> Delete</i>  
      </div>
          
        </div>
    
          
            ))}
        </div>
      </div>

    );
  }
}


  Hostels.propTypes = {
    hostel: PropTypes.object.isRequired,
    getHostels: PropTypes.func.isRequired,
    deleteHostel:PropTypes.func.isRequired
  };
  
  const mapStateToProps = state => ({
    hostel: state.hostel
  });
  
  export default connect(
    mapStateToProps,
    {getHostels,deleteHostel}
    ) (Hostels);
  