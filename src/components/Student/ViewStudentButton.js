import React from "react";
import { Link } from "react-router-dom";

const ViewStudentButton = () => {

  return (
    <React.Fragment>
      <Link to="/viewStudent" className="btn btn-lg btn-info">
        View Student
      </Link>
    </React.Fragment>
  );
};


export default ViewStudentButton;