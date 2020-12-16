import axios from "axios";
import { GET_ERRORS,GET_STUDENT,GET_STUDENTS,DELETE_STUDENT } from "./types";

export const updateStudent = (student, history) => async dispatch => {
  try {
    const res = await axios.put('http://localhost:8080/api/student', student);
    history.push("/wardenDashboard");
      console.log("student");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  } 
};


export const getStudents =() => async dispatch => {
const res = await axios.get('http://localhost:8080/api/students');
dispatch({
  type:GET_STUDENTS,
  payload: res.data
});
}

export const getStudent =(id, history) => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:8080/api/student/${id}`);
  dispatch({
    type:GET_STUDENT,
    payload: res.data
  });
  } catch (error) {
    history.push("/wardenDashboard");
  }
  
};

export const deleteStudent =(id,history)  => async dispatch => {

  if (
    window.confirm(
      "Are you sure? This will delete the student and all the data related to it"
    )
  ) 
  
  await axios.delete(`http://localhost:8080/api/student/${id}`);
  dispatch({
  
    type:DELETE_STUDENT,
    payload: id
  });
  
}

export const createStudent = (student, history) => async dispatch => {
  try {
    const res = await axios.post('http://localhost:8080/api/student', student);
    history.push("/wardenDashboard");
      console.log("student");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  } 
};