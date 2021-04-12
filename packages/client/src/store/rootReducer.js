import { combineReducers } from 'redux'
import authorsReducer from './authors/reducers'

export default combineReducers({
  authors: authorsReducer
})
