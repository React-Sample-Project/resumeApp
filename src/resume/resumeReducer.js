import Redux from 'redux';
import exampleResume from '../resumeExample.js';

const resume = (state = exampleResume, action) => {
  switch(action.type){
    case 'something':
      return state;
    default:
      return state;
  }
}

export default resume;
