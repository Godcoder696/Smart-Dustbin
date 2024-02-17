import React from 'react'
import {Switch,Route} from 'react-router-dom'
import LoginSign from "./Pages/LoginSignUp/LoginSign"
import Index from './Pages/Dashboard/Index'
import Card from './Pages/Dashboard/Card'
import Error from './Pages/Error/Error'

function RoutesHandler() {
  return (
    <>
      <Switch >
        <Route path="/" exact>
          <LoginSign/>
        </Route>
        <Route path="/dashboard" exact>
          <Index/>
        </Route>
        <Route path="/card:id" exact>
          <Card/>
        </Route>
        <Route path="*" exact>
          <Error/>
        </Route>
      </Switch>
    </>
  )
}

export default RoutesHandler
