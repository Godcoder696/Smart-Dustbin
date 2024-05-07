import React from 'react'
import {Switch,Route} from 'react-router-dom'
import LoginSign from "./Pages/LoginSignUp/LoginSign"
import Index from './Pages/Dashboard/Index'
import Error from './Pages/Error/Error'
import Card from './Pages/Card/Card'
import RouteDashboard from './Pages/Dashboard/Pages/RouteDashboard'

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
        <Route path="/routedashboard">
          <RouteDashboard></RouteDashboard>
        </Route>
        <Route path="*" exact>
          <Error/>
        </Route>
      </Switch>
    </>
  )
}

export default RoutesHandler
