import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const pageCreator = (pagesNumber, setCurrentPage) => {
  let pagesElement = []

  for (let i = 0; i <= pagesNumber; i++) {
    pagesElement.push(
      <PagesComponent onClick={() => setCurrentPage(i)}>{i}</PagesComponent>
    )
  }
  return pagesElement
}

const Pagination = ({ total, setCurrentPage, valueOffset }) => {
  const [pages, setPages] = useState(0)
  useEffect(() => {
    const numberPages = total / valueOffset
    setPages(Math.floor(numberPages))
  }, [total])
  if (total === 0) return null
  return (
    <PaginationContainer>
      {pageCreator(pages, setCurrentPage)}
    </PaginationContainer>
  )
}

const PagesComponent = styled.a`
  margin: 3px 6px;
  cursor: pointer;
`

const PaginationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default Pagination
