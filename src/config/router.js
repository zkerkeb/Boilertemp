import React from 'react'

import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'

import Login from '../screens/login'
import Home from '../screens/home'
import Details from '../screens/details'
import Search from '../screens/search'
import Animation from '../screens/animation'
import Favorite from '../screens/favorite'
import Counter from '../screens/counter'
import Potter from '../screens/potter'

import PrivateRoute from '../utils/privateRoute'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <PrivateRoute path='/home' component={Home} />
        <PrivateRoute path='/details/:id' component={Details} />
        <PrivateRoute path='/search' component={Search} />
        <PrivateRoute path='/animation' component={Animation} />
        <PrivateRoute path='/favorite' component={Favorite} />
        <PrivateRoute path='/counter' component={Counter} />
        <PrivateRoute path='/potter' component={Potter} />
        <Redirect to='/'></Redirect>
      </Switch>
    </Router>
  )
}

export default Routes
