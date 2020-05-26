import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getCharacters } from '../actions/potter'

const Potter = () => {
  const dispatch = useDispatch()
  const characters = useSelector(state => state.potter.characters)
  useEffect(() => {
    dispatch(getCharacters())
  }, [])
  return (
    <div>
      <p>Potter</p>
      {characters.map(character => (
        <p>{character.name}</p>
      ))}
    </div>
  )
}

export default Potter
