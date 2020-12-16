import React from "react";
import { Link } from "react-router-dom";

const MyProfileButton = () => {

  return (
    <React.Fragment>
      <Link to="/myProfileAdmin" className="btn btn-lg btn-info">
        My Profile 
      </Link>
    </React.Fragment>
  );
};


export default MyProfileButton;