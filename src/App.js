import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import Routes from './config/router'

import { theme } from './config/theme'
import { store } from './config/store'

import './App.css'

import './config/translations'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes></Routes>
      </ThemeProvider>
    </Provider>
  )
}

export default App
