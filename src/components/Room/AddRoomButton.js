import React from "react";
import { Link } from "react-router-dom";

const AddRoomButton = () => {
  return (
    <React.Fragment>
      <Link to="/AddRoom" className="btn btn-lg btn-info">
        Add Room
      </Link>
    </React.Fragment>
  );
};

export default AddRoomButton;