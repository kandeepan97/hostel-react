import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import PropTypes from "prop-types"; 
import { connect } from "react-redux";
import { registerRoom } from "../../actions/registrationActions";
import axios from "axios";

class RegisterRoom extends Component {
  constructor() {
    super();

    this.state = {
      hostelId: "",
      roomId: "",
      bedId:"",
      paymentId:"",
      status:"",
      email:"",

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

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const myRoom = {
      roomId: this.state.roomId,
      hostelId: this.state.hostelId,
      bedId:this.state.bedId,
      paymentId:this.state.paymentId,
      status:1,
      email:localStorage.getItem("email"),

    };
    this.props.registerRoom(myRoom, this.props.history);
    console.log(myRoom);
  }

  render() {
    return (
      <div>
      <div className="container">
      <div className="row" style={{width:'1000px', margin:'0 auto' ,marginTop:'50px'}}>
              <div className="col-md-8 m-auto"></div>
      <form class="ui form">
      <h1 class="ui dividing header">Register Your Room</h1>
      <br/>
      <div class="field">
        <label>Name</label>
        <div class="two fields">
          <div class="field">
            <input type="text" name="firstName" placeholder="First Name"/>
          </div>
          <div class="field">
            <input type="text" name="lastName" placeholder="Last Name"/>
          </div>
        </div>
      </div>
      <br/>
      <div class="field">
        
        <div class="fields">

          <div class="ten wide field">
          <label>Address</label>
            <input type="text" name="address" placeholder="Address"/>
          </div>
          
          <div class="six wide field">
          <label>Distance From University</label>
            <input type="text" name="distance" placeholder="Distance From University"/>
          </div>
        </div>
      </div>
      <br/>
      <div class="two fields">
        <div class="field">
          <label>district</label>
          <select class="ui fluid dropdown">
            <option value="">district</option>
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
          </select>
        </div>
        <div class="field">
          <label>Province</label>
          <div class="ui fluid search selection dropdown">
            <input type="hidden" name="province"/>
            <i class="dropdown icon"></i>
            <div class="default text">Province</div>
            <div class="menu">
        <div class="item" data-value="af"><i class="af flag"></i>Afghanistan</div>
        <div class="item" data-value="ax"><i class="ax flag"></i>Aland Islands</div>
        
      </div>
           </div>
        </div>
      </div>
      <br/>
      <h4 class="ui dividing header">Payment Information</h4>
      <br/>
      <div class="field">
        <label>Bank & Address</label>
        <div class="ui selection dropdown">
          <input type="hidden" name="bank"/>
          <div class="default text">Bank & Address</div>
          <i class="dropdown icon"></i>
          <div class="menu">
            <div class="item" data-value="visa">
              <i class="visa icon"></i>
              Visa
            </div>
            <div class="item" data-value="amex">
              <i class="amex icon"></i>
              American Express
            </div>
            <div class="item" data-value="discover">
              <i class="discover icon"></i>
              Discover
            </div>
          </div>
        </div>
      </div>
      <br/>
      <div class="fields">
        <div class="ten wide field">
          <label>Receipt Number</label>
          <input type="text" name="receiptNumber" maxlength="16" placeholder="ReceiptNumber"/>
        </div>
        
        <div class="six wide field">
          <label>Date</label>
            
            <input type="text" name="date" maxlength="16" placeholder="Date"/> 
            </div>
            
          </div>
        
       
       <div class="ui segment">
        <div class="field">
          <div class="ui toggle checkbox">
            <input type="checkbox" name="gift" tabindex="0" class="hidden"/>
            <label>Do not include a receipt in the package</label>
          </div>
        </div>
      </div>
      <div class="ui button" tabindex="0">Submit Order</div>
    </form>
      </div>
      </div>
      </div>
    );
  }
}

RegisterRoom.propTypes = {
  registerRoom: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});


export default connect(
  mapStateToProps,
  {registerRoom}
)(RegisterRoom);