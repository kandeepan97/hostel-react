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
        <h1>Rooms Details</h1>
        </div>
        
      <table class="ui compact celled definition table">
      <thead>
        <tr>
          <th>Room Id</th>
          <th>Hostel Id</th>
          <th>Floor No</th>
          <th>Manage Rooms</th>
        </tr>
      </thead>

            {rooms.map(room => (

              <tbody>
              <tr>
                <td>{room.roomid}</td>
                <td>{room.hostelId}</td>
                <td>{room.floorNumber}</td>
                <td>
                <div class="extra content">
                <div class="ui two buttons">
                  <div class="ui basic green button">
                  <Link to={`/updateRoom/${room.roomid}`}>
                  Update
                  </Link>
                  </div>
                  <div class="ui basic red button" onClick={this.onDeleteClick.bind(this, room.roomid)}>
                  Delete
                  </div>
                  </div>
                  </div>
                  </td>
                </tr>
                </tbody> 
             
            
            ))}
        </table>
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
  