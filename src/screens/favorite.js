import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Favorite = () => {
  const [fav, setFav] = useState(JSON.parse(localStorage.getItem('favorite')))
  useEffect(() => {
    console.log('Favorite -> fav', fav)
  })
  return (
    <div>
      <p>Favorite</p>
      {fav.map(character => (
        <div key={character.id}>
          <Link to={`/details/${character.id}`}>{character.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default Favorite
