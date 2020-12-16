import React, { Component } from "react";
import { connect } from "react-redux";
import { getRooms,deleteRoom } from "../../actions/roomActions";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";



class Rooms extends Component {
  componentDidMount(){
    this.props.getRooms();
  };

  onDeleteClick = (id) => {
    this.props.deleteRoom(id);
  };

  render() {
    const  {rooms}  = this.props.room;
   
    return (
      <div className="container">
        <div className="card card-body bg-light mb-3">
          <div className="row">

          <div className="col-lg-2 col-md-2 col-4">
          <h3>Hostel Id</h3>
          </div>
            <div className="col-lg-2 col-md-2 col-4">
              <h3>Room Id</h3>
              
            </div>
            <div className="col-lg-2 col-md-2 col-4">
              <h3>Floor No</h3>
              
            </div>
            <div className="col-lg-6 col-md-2 col-4">
              <h3>Manage Rooms</h3>
              
            </div>
            </div>
            <hr/>

            {rooms.map(room => (

              <div className="row">
          <div className="col-lg-2 col-md-2 col-4">
          <h6>{room.hostelId}</h6>
          </div>
            <div className="col-lg-2 col-md-2 col-4">
              <h6>{room.roomid}</h6>
              
            </div>
            <div className="col-lg-2 col-md-2 col-4">
              <h6>{room.floorNumber}</h6>
              
            </div>
            <div className="col-lg-2 col-md-2 col-4">
            <Link to={`/updateRoom/${room.roomid}`}>
            <i className="fa fa-edit pr-1"> Update</i>
        </Link>
            
          </div>
          <div className="col-lg-2 col-md-2 col-4" onClick={this.onDeleteClick.bind(this, room.roomid)}>
          
          <i className="fa fa-minus-circle pr-1"> Delete</i>  
      
          
        </div>
    
          </div>
            ))}
        </div>
      </div>

    );
  }
}


  Rooms.propTypes = {
    room: PropTypes.object.isRequired,
    getRooms: PropTypes.func.isRequired,
    deleteRoom: PropTypes.func.isRequired
  };
  
  const mapStateToProps = state => ({
    room: state.room
  });
  
  export default connect(
    mapStateToProps,
    {getRooms,deleteRoom}
    ) (Rooms);
  