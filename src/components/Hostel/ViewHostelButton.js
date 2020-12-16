import React from "react";
import { Link } from "react-router-dom";

const ViewHostelButton = () => {
  return (
    <React.Fragment>
      <Link to="/viewHostel" className="btn btn-lg btn-info">
        View Hostel
      </Link>
    </React.Fragment>
  );
};

export default ViewHostelButton;