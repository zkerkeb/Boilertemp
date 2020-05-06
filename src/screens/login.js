import React, { useEffect } from 'react'
import axios from 'axios'

import Header from '../components/header'
import Signin from '../components/signin'

const submit = (e, formState, setErrorMessage, history) => {
  e.preventDefault()
  if (!formState.username || !formState.password) {
    setErrorMessage('Les champs ne doivent pas etres vide')
    return
  }
  axios({
    method: 'POST',
    url: 'https://easy-login-api.herokuapp.com/users/login',
    data: {
      username: formState.username,
      password: formState.password
    }
  })
    .then(res => {
      localStorage.setItem('token', res.headers['x-access-token'])
      history.push('/home')
    })
    .catch(err => {
      setErrorMessage('Une erreur est survenue')
      console.log(err)
    })
}

const Login = ({ history }) => {
  useEffect(() => {
    const token = localStorage.getItem('token')
    console.log('Login -> token', token)
    if (token) {
      history.push('/home')
    }
  }, [])
  return (
    <div>
      <Header backgroundColor='green'></Header>
      <Signin submit={submit}></Signin>
    </div>
  )
}

export default Login
