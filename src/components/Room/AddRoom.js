import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import PropTypes from "prop-types"; 
import { connect } from "react-redux";
import { createRoom,getHostelId} from "../../actions/roomActions";
import axios from "axios";

class AddRoom extends Component {
  constructor() {
    super();

    this.state = {
      hostelId: "",
      roomid: "",
      numberOfBeds: "",
      gender:"",
      floorNumber:"",
      faculty:"",
      year:""

    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //life cycle hooks
  componentWillReceiveProps(nextProps){
    if(nextProps.errors){
      this.setState({errors:nextProps.errors});
    }

  }

 /* componentDidMount(){
    const { wardenid } = this.props.match.params;
    this.props.getHostelId(wardenid, this.props.history);
  }  */

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newRoom = {
      hostelId: this.state.hostelId,
      roomid: this.state.roomid,
      numberOfBeds: this.state.numberOfBeds,
      gender:this.state.gender,
      floorNumber:this.state.floorNumber,
      faculty:this.state.faculty,
      year:this.state.year
    };
    this.props.createRoom(newRoom, this.props.history);
    console.log(newRoom);
  }

  render() {
    return (
      <div>
        <div className="project">
          <div className="container">
            <div className="row" style={{width:'800px', margin:'0 auto' ,marginTop:'100px'}}>
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Create Hostel Rooms </h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg "
                      placeholder="Room Id"
                      name="roomid"
                      value={this.state.roomid}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Hostel ID"
                      name="hostelId"
                      value={this.state.hostelId}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                    type="text"
                      className="form-control form-control-lg"
                      placeholder="NumberOfBeds"
                      name="numberOfBeds"
                      value={this.state.numberOfBeds}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                    type="text"
                      className="form-control form-control-lg"
                      placeholder="Floor Number"
                      name="floorNumber"
                      value={this.state.floorNumber}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                    type="text"
                      className="form-control form-control-lg"
                      placeholder="Gender"
                      name="gender"
                      value={this.state.gender}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                  <select name='faculty' value={this.state.faculty} onChange={this.onChange} className="form-control form-control-lg">
                  <option value='0'>Faculty</option>
                  <option value='agri'>Agricultural Sciences</option>
                  <option value='applied'>Applied Sciences</option>
                  <option value='geo'>Geomatics</option>
                  <option value='management'>Management Studies</option>
                  <option value='medicine'>Medicine</option>
                  <option value='social'>Social Sciences & languages</option>
                  <option value='technology'>Technology</option>
                </select>
                  </div><div className="form-group">
                  <input
                  type="text"
                    className="form-control form-control-lg"
                    placeholder="Year"
                    name="year"
                    value={this.state.year}
                    onChange={this.onChange}
                  />
                </div>
                  
                

                  <input
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddRoom.propTypes = {
  createRoom: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  getHostelId:PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  errors: state.errors
});


export default connect(
  mapStateToProps,
  {createRoom,getHostelId}
)(AddRoom);