import React from 'react'
import styled from 'styled-components'

const Avatar = props => {
  return <AvatarComponent src={props.url}></AvatarComponent>
}

const AvatarComponent = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`

export default Avatar
