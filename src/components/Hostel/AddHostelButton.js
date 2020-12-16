import React from "react";
import { Link } from "react-router-dom";

const AddHostelButton = () => {
  return (
    <React.Fragment>
      <Link to="/AddHostel" className="btn btn-lg btn-info">
        Add Hoslel
      </Link>
    </React.Fragment>
  );
};

export default AddHostelButton;