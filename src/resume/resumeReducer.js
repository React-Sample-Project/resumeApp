import Redux from 'redux';
import { UPLOAD_IMAGE, EDIT_RESUME, MOVE_SECTION } from './resumeActions.js';
import exampleResume from '../exampleResume.js';

const resume = (state = exampleResume, action) => {
  switch(action.type){
    case UPLOAD_IMAGE:
      return state;
    case EDIT_RESUME:
      return state;
    case MOVE_SECTION:
      return state;
    default:
      return state;
  }
}

export default resume;
