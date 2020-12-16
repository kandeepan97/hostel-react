import React, { Component } from "react";
import { connect } from "react-redux";
import { getWardens,deleteWarden } from "../../actions/wardenActions";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import ManageCard from '../../common/ManageCard' 


class Wardens extends Component {
  componentDidMount(){
    this.props.getWardens();
  }

  onDeleteClick = (id) => {
    this.props.deleteWarden(id);
  };
  


  render() {
    const { wardens } = this.props.warden;
    return (
      
      <div className="container">
        <div className="card card-body bg-light mb-3">
        <div className="row">
          
          <div className="col-lg-2 col-md-2 col-4">
          <h3>Wardens</h3>
          </div>
          </div>
          <hr/>

        {wardens.map(warden => (
      
          <div class="ui list">
          <div class="item">
             <img class="ui avatar image" src="/images/avatar2/small/rachel.png"/>
             <div class="content">
               <h3 class="header">{warden.firstName +"_"+ warden.lastName}</h3>
               <div class="description">{warden.email} <h5><h4>
               {warden.wardenid}</h4></h5>
             </div>
             <div>{warden.hostelId}</div>

             
             <div class="extra content">
      <div class="ui two buttons">
        <div class="ui basic green button">
        <Link to={`/updateWarden/${warden.wardenid}`}>
        Update
        </Link>
        </div>
        <div class="ui basic red button">Delete</div>
      </div>
    </div>
             
             
             </div>
          </div>
          </div>

          ))}
        </div>
      </div>

        
      
    );
  }
}

Wardens.propTypes = {
  warden: PropTypes.object.isRequired,
  getWardens: PropTypes.func.isRequired,
  deleteWarden:PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  warden: state.warden
});

export default connect(
  mapStateToProps,
  {getWardens,deleteWarden}
  ) (Wardens);
