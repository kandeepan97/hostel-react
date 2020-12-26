import React, { Component } from "react";
import { connect } from "react-redux";
import { getRegistrations } from "../../actions/registrationActions";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";


class ManageRegistrations extends Component {
  componentDidMount(){
    this.props.getRegistrations();
  }
  render() {
    const { registrations } = this.props.registration;
    return (
      <div className="container">
      <div className="card card-body bg-light mb-3">
        <h1>Registrations History</h1>
        </div>
      <table class="ui compact celled definition table">
  <thead>
    <tr>
      <th>Reg Id</th>
      <th>Registration Date</th>
      <th>E-mail</th>
	    <th>hostel Id</th>
      <th>Room Id</th>
      <th>Payment Id</th>
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
    </tr>
   </tbody> 
    
            ))  
}
</table>
</div>
    );
  }
}
  


  ManageRegistrations.propTypes = {
    registration: PropTypes.object.isRequired,
    getRegistrations: PropTypes.func.isRequired
  };
  
  const mapStateToProps = state => ({
    registration: state.registration
  });
  
  export default connect(
    mapStateToProps,
    {getRegistrations}
    ) (ManageRegistrations);
  