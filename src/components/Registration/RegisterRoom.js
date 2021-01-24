import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import PropTypes from "prop-types"; 
import { connect } from "react-redux";
import { registerRoom,getRoomIds } from "../../actions/registrationActions";
import axios from "axios";

class RegisterRoom extends Component {
  constructor() {
    super();

    this.state = {
      firstName:"",
      lastName:"",
      province:"",
      district:"",
      distance:"",
      address:"",
      bankAddress:"",
      roomId: "",
      paymentId:"",
      paymentDate:"",
      status:"",
      email:"",
      floorNumber:"",
      numberOfBeds:"",
      availableBeds:"",

    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    let email = localStorage.getItem("email");
    console.log(email);
    let roomIds = getRoomIds(email);

    this.state.roomId =  roomIds

    console.log(this.state.roomId);

  }

  //life cycle hooks
  componentWillReceiveProps(nextProps){
    if(nextProps.errors){
      this.setState({errors:nextProps.errors});
    }

  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }



  onSubmit(e) {
    e.preventDefault();
    const myRoom = {
      firstName: this.state.firstName,
      lastName:this.state.lastName,
      province:this.state.province,
      district:this.state.district,
      distance:this.state.distance,
      address:this.state.address,
      bankAddress:this.state.bankAddress,
      roomId: this.state.roomId,
      numberOfBeds:this.state.numberOfBeds,
      paymentId:this.state.paymentId,
      paymentDate:this.state.paymentDate,
      status:"PENDING",
      email:localStorage.getItem("email"),
      floorNumber:this.state.floorNumber,
      availableBeds:this.state.availableBeds,

    };
    console.log("Hello");
    console.log(myRoom);

    this.props.registerRoom(myRoom, this.props.history);
  }

  render() {
    return (
      <div>
      <div className="container">
      <div className="row" style={{width:'1000px', margin:'10 auto' ,marginTop:'50px'}}>
              <div className="col-md-12 m-auto"></div>
      <div class="ui form">
      <h1 class="ui dividing header">Register Your Room</h1>
      <form onSubmit={this.onSubmit}>
      <br/>
      <div class="field">
        <label>Name</label>
        <div class="two fields">
          <div class="field">
            <input type="text" 
            name="firstName" 
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.onChange}/>
          </div>
          <div class="field">
            <input type="text"
             name="lastName" 
             placeholder="Last Name"
             value={this.state.lastName}
             onChange={this.onChange}/>
          </div>
        </div>
      </div>
      <br/>
      <div class="field">
        
        <div class="fields">

          <div class="ten wide field">
          <label>Address</label>
            <input type="text" 
            name="address" 
            placeholder="Address"
            value={this.state.address}
            onChange={this.onChange}
            />
          </div>
          
          <div class="six wide field">
          <label>Distance From University</label>
            <input type="text" 
            name="distance" 
            placeholder="Distance"
            value={this.state.distance}
            onChange={this.onChange}
            />
          </div>
        </div>
      </div>
      <br/>
      <div class="two fields">
        <div class="field">
          <label>district</label>
          <select class="ui fluid dropdown">
            <option value=""></option>
        <option value="Ampara">Ampara</option>
        <option value="Anuradhapura">Anuradhapura</option>
        <option value="Badulla">Badulla</option>
        <option value="Batticaloa">Batticaloa</option>
        <option value="Colombo">Colombo</option>
        <option value="Galle">Galle</option>
        <option value="Gampaha">Gampaha</option>
        <option value="Hambantota">Hambantota</option>
        <option value="Jaffna">Jaffna</option>
        <option value="Kalutara">Kalutara</option>
        <option value="Kandy">Kandy</option>
        <option value="Kegalle">Kegalle</option>
        <option value="Kilinochchi">Kilinochchi</option>
        <option value="Kurunagala">Kurunagala</option>
        <option value="Mannar">Mannar</option>
        <option value="Matale">Matale</option>
        <option value="Matara">Matara</option>
        <option value="Moneragala">Moneragala</option>
        <option value="Mullaitivu">Mullaitivu</option>
        <option value="Nuwara Eliya">Nuwara Eliya</option>
        <option value="Polonnaruwa">Polonnaruwa</option>
        <option value="Puttalam">Puttalam</option>
        <option value="Ratnapura">Ratnapura</option>
        <option value="Trincomalee">Trincomalee</option>
        <option value="Vavuniya">Vavuniya</option>
        value={this.state.district}
        onChange={this.onChange}
        </select>
        </div>
        <div class="field">
          <label>province</label>
          <select class="ui fluid dropdown">
            <option value=""></option>
        <option value="Central">Central</option>
        <option value="Eastern">Eastern</option>
        <option value="North Central">North Central</option>
        <option value="Northern">Northern</option>
        <option value="North Westren">North Westren</option>
        <option value="Sabaragamuwa">Sabaragamuwa</option>
        <option value="Southern">Southern</option>
        <option value="Uva">Uva</option>
        <option value="Westren">Westren</option>
        value={this.state.province}
        onChange={this.onChange}
        </select>
        </div>
        </div>
      <br/>
      <h4 class="ui dividing header">Payment Information</h4>
      <br/>
      <div class="field">
        <label>Bank & Address</label>
        <div class="field">
          <input type="text" 
          name="bankAddress"
          placeholder="Bank Address"
          value={this.state.bankAddress}
          onChange={this.onChange}
          />
        </div>
      </div>
      <br/>
      <div class="fields">
        <div class="ten wide field">
          <label>Receipt Number</label>
          <input type="text" 
          name="paymentId" 
          placeholder="paymentId"
          value={this.state.paymentId}
          onChange={this.onChange}
          />
        </div>
        
        <div class="six wide field">
          <label>Date</label>
            
            <input type="date" 
            name="paymentDate" 
            placeholder="Date"
            value={this.state.date}
            onChange={this.onChange}
            /> 
            </div>
            
          </div>

          <br/>
      <h4 class="ui dividing header">Select Your Room</h4>
      <br/>
      <div class="two fields">
        <div class="field">
          <label>Room</label>
          <select class="ui fluid dropdown" >
          {/*{this.state.roomId.map(time => {
            return (
              <option value={time}> {time} </option>
            )
          })}*/}
        </select>
        </div>
        </div>

        <div class="field">
        
        <div class="three fields">
          <div class="field">
          <label>Floor Number</label>
            <input type="text"
             name="floorNumber"
            placeholder="Floor Number "
            value={this.state.floorNumber}
            onChange={this.onChange}/>
          </div>
          <div class="field">
          <label>Number Of Beds</label>
            <input type="text" 
            name="numberOfBeds" 
            placeholder="Number Of Beds"
            value={this.state.numberOfBeds}
            onChange={this.onChange}/>
          </div>
          <div class="field">
          <label>Available Beds</label>
            <input type="text" 
            name="availableBeds" 
            placeholder="Available Beds"
            value={this.state.availableBeds}
            onChange={this.onChange}
            />
          </div>
        </div>
      </div>

      <br/>
        
        
      <input
       type="submit"
       className="btn btn-primary btn-block mt-4"
       />
      <br/>
      </form>
    </div>
      </div>
      </div>
      </div>
    );
  }
}

RegisterRoom.propTypes = {
  getRoomIds:PropTypes.func.isRequired,
  registerRoom: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});


export default connect(
  mapStateToProps,
  {registerRoom,getRoomIds}
)(RegisterRoom);

