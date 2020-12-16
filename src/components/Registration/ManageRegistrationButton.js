import React from "react";
import { Link } from "react-router-dom";

const ManageRegistrationButton = () => {
  return (
    <React.Fragment>
      <Link to="/manageRegistration" className="btn btn-lg btn-info">
        manage Registrations
      </Link>
    </React.Fragment>
  );
};

export default ManageRegistrationButton;