import React, { useEffect, useState } from 'react'
import axios from 'axios'
import md5 from 'md5'
import styled from 'styled-components'

import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

import Pagination from '../components/pagination'

import { publicKey, timeStamp, hash } from '../utils/getHash'

const Home = props => {
  const counter = useSelector(state => state.counter.counterValue)
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
        console.log('res.data.data.results', res.data.data.results)
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
      <p>{counter}</p>
      <Link to='/search'>RECHERCHER PERSONNAGE</Link>
      <div>
        <Link to='/favorite'>Favoris</Link>
      </div>
      {charactersList.map(character => (
        <div key={character.id}>
          <CharacterContainer>
            <CharacterImage
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            ></CharacterImage>
            <UpperCharacter>
              <StyledText>{character.name}</StyledText>
            </UpperCharacter>
          </CharacterContainer>
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

const CharacterContainer = styled.div`
  width: 300px;
  height: 300px;
  background-color: red;
  margin: 12px;
  display: flex;
  position: relative;
`

const CharacterImage = styled.img`
  width: 300px;
  height: 300px;
`

const UpperCharacter = styled.div`
  width: 300px;
  height: 300px;
  background-color: #0000007f;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`

const StyledText = styled.span`
  color: white;
  font-size: 24px;
`

export default Home
