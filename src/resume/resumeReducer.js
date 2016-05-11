import Redux from 'redux';
import { EDIT_RESUME_FIRSTNAME, EDIT_RESUME_LASTNAME, EDIT_RESUME_CITY, EDIT_RESUME_STATE, EDIT_RESUME_ICON, NEW_RESUME_ICON } from './resumeActions.js';
import exampleResume from '../exampleResume.js';

const ResumeReducer = (state = exampleResume, action) => {
  switch(action.type){
    case EDIT_RESUME_FIRSTNAME:
      return HeaderReducer(state, action);
    case EDIT_RESUME_LASTNAME:
      return HeaderReducer(state, action);
    case EDIT_RESUME_CITY:
      return HeaderReducer(state, action);
    case EDIT_RESUME_STATE:
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
    case EDIT_RESUME_CITY:
      return {...state, "user": { ...state.user, "city": action.value }};
    case EDIT_RESUME_STATE:
      return {...state, "user": { ...state.user, "state": action.value }};
  }
}

const IconsReducer = (state, action) => {
  switch(action.type){
    case EDIT_RESUME_ICON:
      return Object.assign({}, state.resume.user.mediaAccounts.filter((m) => m.id === action.value.id), action.value)
  }
}

export default ResumeReducer;
