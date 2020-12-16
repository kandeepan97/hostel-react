import React from "react";
import { Link } from "react-router-dom";

const ViewWardenButton = () => {

  return (
    <React.Fragment>
      <Link to="/viewWarden" className="btn btn-lg btn-info">
        View Warden
      </Link>
     
    </React.Fragment>
  );
};


export default ViewWardenButton;