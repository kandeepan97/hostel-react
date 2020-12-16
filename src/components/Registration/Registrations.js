import React, { Component } from "react";
import { connect } from "react-redux";
import { getRegistrations } from "../../actions/registrationActions";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import ApprovalCard from '../../common/ApprovalCard'


class Registrations extends Component {
  componentDidMount(){
    this.props.getRegistrations();
  }
  render() {
    const { registrations } = this.props.registration;
    return (
      
      <table class="ui compact celled definition table">
  <thead>
    <tr>
      <th>Reg Id</th>
      <th>Registration Date</th>
      <th>E-mail</th>
	    <th>hostel Id</th>
      <th>Room Id</th>
      <th>Payment Id</th>
      <th>Manage Registrations</th>
    </tr>
  </thead>

   {registrations.map(registration => (

  <tbody>
    <tr>
      <td>{registration.registrationid}</td>
      <td>{registration.registrationDate}</td>
      <td>{registration.email}</td>
	    <td>{registration.hostelId}</td>
	    <td>{registration.roomId}</td>
      <td>{registration.paymentId}</td>
      <td><ApprovalCard/></td>
    </tr>
   </tbody> 
    
            ))  
}
</table>
    );
  }
}
  
    
  Registrations.propTypes = {
    registration: PropTypes.object.isRequired,
    getRegistrations: PropTypes.func.isRequired
  };
  
  const mapStateToProps = state => ({
    registration: state.registration
  });
  
  export default connect(
    mapStateToProps,
    {getRegistrations}
    ) (Registrations);
  