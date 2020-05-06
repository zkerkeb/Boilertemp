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
  return (
    <div>
      <Link to='/search'>RECHERCHER PERSONNAGE</Link>
      {charactersList.map(character => (
        <div key={character.id}>
          <Link to={`/details/${character.id}`}>{character.name}</Link>
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
