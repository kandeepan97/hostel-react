import React from "react";
import { Link } from "react-router-dom";

const ViewSucessfulRegistrationButton = () => {
  return (
    <React.Fragment>
      <Link to="/viewSucessfulRegistration" className="btn btn-lg btn-info">
        View Registrations
      </Link>
    </React.Fragment>
  );
};

export default ViewSucessfulRegistrationButton;