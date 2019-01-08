import { combineReducers } from 'redux'
import todos from './todos'

const rootReducer = combineReducers({
  todos,
  nextId
})

export default rootReducer;