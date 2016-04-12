import Redux from 'redux';


const resume = (state, action) => {

  switch(action.type){
    case 'something':
      return state;
    default:
      return null;
  }
}

export default resume;
