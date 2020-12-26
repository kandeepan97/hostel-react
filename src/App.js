import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import StudentDashboard from "./components/StudentDashboard";
import WardenDashboard from "./components/WardenDashboard";
import AdminDashboard from "./components/AdminDashboard";
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AddRoom from "./components/Room/AddRoom";
import Rooms from "./components/Room/Rooms";
import AddWarden from "./components/Warden/AddWarden";
import Wardens from "./components/Warden/Wardens";
import Students from "./components/Student/Students";
import Register from "./components/UserManagement/Register";
import { Provider } from  "react-redux";
import store from "./store";
import Landing from "./components/Layout/Landing";
import UpdateWarden from "./components/Warden/UpdateWarden";
import UpdateRoom from "./components/Room/UpdateRoom";
import UpdateStudent from "./components/Student/UpdateStudent";
import AddHostel from "./components/Hostel/AddHostel";
import Hostels from "./components/Hostel/Hostels";
import UpdateHostel from "./components/Hostel/UpdateHostel";
import Registrations from "./components/Registration/ManageRegistrations";
import Login from "./components/UserManagement/Login";
import RegisterRoom from "./components/Registration/RegisterRoom";
import UpdateAdmin from "./components/Admin/UpdateAdmin";
import ManageRegistrations from "./components/Registration/Registrations";
import MyProfileButton from "./components/Warden/MyprofileButton";



class App extends Component {
  render() {
    return (
      
      <Provider store = {store}>
      <Router>
        <div className="App">
          <Header/>
          {
            //Public routes
          }

          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          
          {
            //Private routes
          }
    
    
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/studentDashboard" component={StudentDashboard} />
          <Route exact path="/adminDashboard" component={AdminDashboard}/>
          <Route exact path="/wardenDashboard" component={WardenDashboard} />
          <Route exact path="/viewRoom" component={Rooms} />
          <Route exact path="/addRoom" component={AddRoom} />
          <Route exact path="/addWarden" component={AddWarden} />
          <Route exact path="/viewWarden" component={Wardens} />
          <Route exact path="/updateWarden/:id" component={UpdateWarden} />
          <Route exact path="/updateRoom/:id" component={UpdateRoom} />
          <Route exact path="/updateStudent/:id" component={UpdateStudent} />
          <Route exact path="/viewStudent" component={Students} />
          <Route exact path="/signUp" component={Register} /> 
          <Route exact path="/addHostel" component={AddHostel} /> 
          <Route exact path="/viewHostel" component={Hostels} /> 
          <Route exact path="/updateHostel/:id" component={UpdateHostel} /> 
          <Route exact path="/viewSucessfulRegistration" component={Registrations} /> 
          <Route exact path="/registerRoom" component={RegisterRoom} /> 
          <Route exact path="/updateAdmin/:id" component={UpdateAdmin} />
          <Route exact path="/manageRegistration" component={ManageRegistrations} />   
          <Route exact path="/myProfileWarden" component={""}  />
          <Route exact path="/myProfileAdmin" component={""}  />
          <Route exact path="/myProfileStudent" component={""}  />
        

        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;