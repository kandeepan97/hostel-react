import React, { Component } from "react";
import { connect } from "react-redux";
import { getHostel,getHostels,deleteHostel } from "../../actions/hostelActions";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";


class Hostels extends Component {
  componentDidMount(){
   this.props.getHostels()
  };

  onDeleteClick = (id) => {
    this.props.deleteHostel(id);
  };

  render() {
    const { hostels } = this.props.hostel;
    return (
      <div className="container">
      <div className="card card-body bg-light mb-3">
        <h1>Hostel Details</h1>
        </div>
        
      <table class="ui compact celled definition table">
      <thead>
        <tr>
          <th>Hostel Id</th>
          <th>Hostel Name</th>
          <th>Hostel Type</th>
          <th>Manage Hostels</th>
        </tr>
      </thead>

            {hostels.map(hostel => (

    <tbody>
    <tr>
      <td>{hostel.hostelId}</td>
      <td>{hostel.hostelName}</td>
      <td>{hostel.hostelName}</td>
      <td>
      <div class="extra content">
      <div class="ui two buttons">
        <div class="ui basic green button">
        <Link to={`/updateHostel/${hostel.hostelid}`}>
        Update
        </Link>
        </div>
        <div class="ui basic red button" onClick={this.onDeleteClick.bind(this, hostel.hostelid)}>
        Delete
        </div>
        </div>
        </div>
        </td>
      </tr>
      </tbody> 
   
    
          
            ))}
            </table>
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
  