import React from "react";
import { Link } from "react-router-dom";

const ViewRoomButton = () => {
  return (
    <React.Fragment>
      <Link to="/viewRoom" className="btn btn-lg btn-info">
        View Room
      </Link>
    </React.Fragment>
  );
};

export default ViewRoomButton;