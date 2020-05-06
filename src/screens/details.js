import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

import { publicKey, timeStamp, hash } from '../utils/getHash'

const Details = props => {
  const [details, setDetails] = useState({})
  useEffect(() => {
    const generatedUrl = `https://gateway.marvel.com/v1/public/characters/${props.match.params.id}`
    axios({
      method: 'GET',
      url: generatedUrl,
      params: {
        ts: timeStamp,
        apikey: publicKey,
        hash: hash
      }
    })
      .then(res => {
        setDetails(res.data.data.results[0])
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <div>
      <p>detail</p>
      <p>{details.name}</p>
      <p>{details.description}</p>
      <Link to='/home'>retour a home</Link>
    </div>
  )
}

export default Details
