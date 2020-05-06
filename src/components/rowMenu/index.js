import React from 'react'
import styled from 'styled-components'

const RowMenu = ({ onClick, label }) => {
  return (
    <MenuRowContainer onClick={onClick}>
      <p>{label}</p>
    </MenuRowContainer>
  )
}

const MenuRowContainer = styled.div`
  cursor: pointer;
  border-radius: 12px;
  padding: 12px;
  background-color: green;
  margin: 6px 0px;
`

export default RowMenu
