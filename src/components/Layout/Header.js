import React, { Component } from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from '../../actions/securityActions';


class Header extends Component {
  //  {localstorage.getItem("logged") === true ? <Link>logout</Link> : <Link>login</Link> }
  logoutHandler =() => {
    this.props.logout();
}
  render() {
    const userLinks = (
      <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={this.logoutHandler}>
                  Logout
                </Link>
              </li>
            </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link " href="register">
                  Sign Up
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="login">
                  Login
                </a>
              </li>
            </ul>
    );
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Hostel Registration Sabaragamuwa University of srilanka
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse">
          { localStorage.getItem("logged") ? userLinks : guestLinks }
        </div>

        {/*  <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
               
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link " href="register">
                  Sign Up
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="login">
                  Login
                </a>
              </li>
            </ul>
    </div>*/}
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default connect(null, { logout })(Header);