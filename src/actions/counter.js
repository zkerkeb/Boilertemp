export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

export const incrementCounter = () => ({
  type: INCREMENT_COUNTER
})

export const decrementCounter = decrementValue => ({
  type: DECREMENT_COUNTER,
  payload: decrementValue
})
