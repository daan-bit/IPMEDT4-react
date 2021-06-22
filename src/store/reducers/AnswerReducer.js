const AnswerReducer = (store = [], action) => {
  
    switch(action.type) {
      case 'ADD_ANSWER':
        return action.payload 
      
      default: return store;
    }
}

export default AnswerReducer