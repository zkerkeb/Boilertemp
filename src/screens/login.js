import React, { useEffect } from 'react'
import axios from 'axios'

import Header from '../components/header'
import Signin from '../components/signin'
// import i18n from 'i18next'

import { useTranslation } from 'react-i18next'

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
  const { t, i18n } = useTranslation()
  useEffect(() => {
    console.log('Login -> i18n.t', i18n.t('menu'))
    const token = localStorage.getItem('token')
    console.log('Login -> token', token)
    if (token) {
      history.push('/home')
    }
  }, [])
  return (
    <div>
      <p>test</p>
      <p>{t('menu')}</p>
      <p>{t('login.title')}</p>
      <button onClick={() => i18n.changeLanguage('fr')}>Fr</button>
      <button onClick={() => i18n.changeLanguage('en')}>En</button>

      <Header backgroundColor='green'></Header>
      <Signin submit={submit}></Signin>
    </div>
  )
}

export default Login
