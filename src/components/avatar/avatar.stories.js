import React from 'react'
import Avatar from './index'

export default {
  title: 'Avatar',
  component: Avatar
}

export const AvatarDefault = () => <Avatar />

AvatarDefault.story = {
  name: 'Default'
}

export const AvatarUrl = () => (
  <Avatar url='https://microapp.com/images/visuels/volume_recadre/500/4009ID.jpg' />
)

AvatarDefault.story = {
  name: 'with url'
}
