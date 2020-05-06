import React, { useState, useEffect, useRef } from 'react'

import axios from 'axios'

import { publicKey, timeStamp, hash } from '../utils/getHash'

const Search = () => {
  const timer = useRef(false)
  const [query, setQuery] = useState(' ')
  const [results, setResults] = useState([])
  useEffect(() => {
    const generatedUrl = 'https://gateway.marvel.com/v1/public/characters'

    clearTimeout(timer.current)

    timer.current = setTimeout(() => {
      axios({
        method: 'GET',
        url: generatedUrl,
        params: {
          ts: timeStamp,
          apikey: publicKey,
          hash: hash,
          nameStartsWith: query
        }
      })
        .then(res => {
          setResults(res.data.data.results)
        })
        .catch(err => {
          console.log(err)
        })
    }, 500)
  }, [query])

  return (
    <div>
      <p>search</p>
      <input type='text' onChange={e => setQuery(e.target.value)}></input>
      {results.map(res => (
        <p key={res.id}>{res.name}</p>
      ))}
    </div>
  )
}

export default Search
