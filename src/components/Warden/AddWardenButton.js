import React from "react";
import { Link } from "react-router-dom";

const AddWardenButton = () => {
  return (
    <React.Fragment>
      <Link to="/AddWarden" className="btn btn-lg btn-info">
        Add Warden
      </Link>
    </React.Fragment>
  );
};

export default AddWardenButton;