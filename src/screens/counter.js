import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  incrementCounter,
  decrementCounter,
  fakeFunction
} from '../actions/counter'
import { Link } from 'react-router-dom'

const Counter = () => {
  const counterState = useSelector(state => state.counter.counterValue)
  const dispatch = useDispatch()
  return (
    <div>
      <p>{counterState}</p>
      <div>
        <button onClick={() => dispatch(incrementCounter())}>+</button>
      </div>
      <br></br>
      <div>
        <button onClick={() => dispatch(decrementCounter(4))}>-</button>
      </div>

      <Link to='/home'>home</Link>
    </div>
  )
}

export default Counter
