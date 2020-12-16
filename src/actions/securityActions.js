import axios from "axios";
import { GET_ERRORS,SET_CURRENT_STUDENT,LOGOUT} from "./types";
import setJWTToken from "../securityUtils/setJWTToken";
import jwt_decode from "jwt-decode";
import  { Redirect } from 'react-router-dom'


export const createNewStudent = (newStudent, history) => async dispatch => {
  try {
    await axios.post(`http://localhost:8080/api/register`, newStudent);
    history.push("/login");
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const logout = () => async dispatch => {
  localStorage.removeItem('logged');
  localStorage.removeItem('jwtToken');

 //dispatch({ type: LOGOUT }); 
 
}


export const login = (LoginRequest,history) => async dispatch => {
  try {
    const {email, password, role1, userId} = LoginRequest;
    const login = {email,password};
    console.log(login);
    // post => Login Request
      const res = await axios.post(`http://localhost:8080/api/login`, login);
      // extract token from res.data
      const { token,role } = res.data;
      // store the token in the localStorage
      localStorage.setItem("jwtToken", token);
      localStorage.setItem("logged", true);
      localStorage.setItem("role",role);
      localStorage.setItem("email",email);
      console.log(role);
      // set our token in header ***
      setJWTToken(token);
      // decode token on React
      const decoded = jwt_decode(token);
      // dispatch to our securityReducer
      dispatch({
        type: SET_CURRENT_STUDENT,
        payload: decoded
      });
   if(role=="student"){
     history.push("/studentDashboard");
    }
    else if(role=="warden"){
      history.push("/wardenDashboard");
    }
    else if(role=="admin"){
      history.push("/adminDashboard");
    }
    else{
      history.push("/adminDashboard");
    }
      
    }
    
   catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};
