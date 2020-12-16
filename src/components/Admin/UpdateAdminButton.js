import React from "react";
import { Link } from "react-router-dom";

const UpdateAdminButton = () => {

  return (
    <React.Fragment>
      <Link to="/updateAdmin" className="btn btn-lg btn-info">
        Update My Profile
      </Link>
    </React.Fragment>
  );
};


export default UpdateAdminButton;