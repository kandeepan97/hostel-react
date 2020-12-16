import React from "react";
import { Link } from "react-router-dom";

const RegisterRoomButton = () => {
  return (
    <React.Fragment>
      <Link to="/registerRoom" className="btn btn-lg btn-info">
        Register My Room
      </Link>
    </React.Fragment>
  );
};

export default RegisterRoomButton;