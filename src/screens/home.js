import React, { useEffect, useState } from 'react'
import axios from 'axios'
import md5 from 'md5'

import { Link } from 'react-router-dom'

import Pagination from '../components/pagination'

import { publicKey, timeStamp, hash } from '../utils/getHash'

const Home = props => {
  const valueOffset = 20
  const [currentPage, setCurrentPage] = useState(0)
  const [total, setTotal] = useState(0)
  const [charactersList, setCharactersList] = useState([])
  useEffect(() => {
    const generatedUrl = 'https://gateway.marvel.com/v1/public/characters'

    axios({
      method: 'GET',
      url: generatedUrl,
      params: {
        ts: timeStamp,
        apikey: publicKey,
        hash: hash,
        offset: valueOffset * currentPage
      }
    })
      .then(res => {
        setCharactersList(res.data.data.results)
        setTotal(res.data.data.total)
      })
      .catch(err => {
        console.log(err)
      })
  }, [currentPage])

  const handleFavorite = hero => {
    console.log('handleFavorite -> hero', hero)
    const currentFavorite = localStorage.getItem('favorite')
      ? JSON.parse(localStorage.getItem('favorite'))
      : []

    const isPresent = currentFavorite.map(e => e.id).indexOf(hero.id)
    console.log('isPresent', isPresent)

    if (isPresent === -1) {
      currentFavorite.push(hero)
      localStorage.setItem('favorite', JSON.stringify(currentFavorite))
    } else {
      const filteredCharacters = currentFavorite.filter(
        character => character.id !== hero.id
      )
      console.log('filteredCharacters', filteredCharacters)
      localStorage.setItem('favorite', JSON.stringify(filteredCharacters))
    }
  }

  return (
    <div>
      <Link to='/search'>RECHERCHER PERSONNAGE</Link>
      <div>
        <Link to='/favorite'>Favoris</Link>
      </div>
      {!charactersList[0] ? <p>pas de connexion</p> : null}
      {charactersList.map(character => (
        <div key={character.id}>
          <Link to={`/details/${character.id}`}>{character.name}</Link>
          <button
            onClick={() =>
              handleFavorite({ id: character.id, name: character.name })
            }
          >
            add To Favorite
          </button>
        </div>
      ))}
      <Pagination
        total={total}
        setCurrentPage={setCurrentPage}
        valueOffset={valueOffset}
      ></Pagination>
    </div>
  )
}

export default Home
