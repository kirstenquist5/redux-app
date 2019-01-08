const todos = (state = [], action) => {
  switch(action.type) {
    case 'TODOS':
      return action.todos
    case 'ADD_TODOS':
      return [action.tod, ...state]
    default:
      return state 
  }
}

export default todos;