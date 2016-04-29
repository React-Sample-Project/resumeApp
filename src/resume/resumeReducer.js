import Redux from 'redux';
import { EDIT_RESUME_FIRSTNAME, EDIT_RESUME_LASTNAME } from './resumeActions.js';
import exampleResume from '../exampleResume.js';

const ResumeReducer = (state = exampleResume, action) => {
  switch(action.type){
    case EDIT_RESUME_FIRSTNAME:
      return HeaderReducer(state, action);
    case EDIT_RESUME_LASTNAME:
      return HeaderReducer(state, action);
    default:
      return state;
  }
}

const HeaderReducer = (state, action) => {
  switch(action.type){
    case EDIT_RESUME_FIRSTNAME:
      return {...state, "user": { ...state.user, "firstName": action.value }};
    case EDIT_RESUME_LASTNAME:
      return {...state, "user": { ...state.user, "lastName": action.value }};
  }
}

export default ResumeReducer;
