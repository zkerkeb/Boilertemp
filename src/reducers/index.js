import { combineReducers } from 'redux'

import counter from './counter'
import potter from './potter'

export default combineReducers({
  counter,
  potter
})
