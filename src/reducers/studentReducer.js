import { GET_STUDENTS,GET_STUDENT, DELETE_STUDENT } from "../actions/types";

const initialState = {
    students: [],
    student: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
     case GET_STUDENTS:
      return {
          ...state,
          students:action.payload
      };
      case GET_STUDENT:
        return {
          ...state,
          student:action.payload
        };
      case DELETE_STUDENT:
        return {
          ...state,
          students:state.students.filter(student=>student.studentid !== action.payload)
        }
    default:
      return state;
  }
}