import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter'

const initialState = {
  counterValue: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        counterValue: state.counterValue + 1
      }
    case DECREMENT_COUNTER:
      return {
        ...state,
        counterValue: state.counterValue - action.payload
      }
    default:
      return state
  }
}
