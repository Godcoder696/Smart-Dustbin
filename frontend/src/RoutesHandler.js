import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Card from './Pages/Card/Card'
import Index from './Pages/Dashboard/Index'
import RouteDashboard from './Pages/Dashboard/Pages/RouteDashboard'
import Error from './Pages/Error/Error'
import LoginSign from "./Pages/LoginSignUp/LoginSign"
import Analysis from './Pages/Analysis/Analysis'

function RoutesHandler() {
  const [login, setLogin]= useState(false);
  
  return (
    <>
      <Switch >
        <Route path="/" exact>
          <LoginSign login={login} setLogin={setLogin}/>
        </Route>
        {
          login &&
          <>
            <Route path="/dashboard" exact>
              <Index login={login}/>
            </Route>
            <Route path="/card:id" exact>
              <Card login={login}/>
            </Route>
            <Route path="/routedashboard">
              <RouteDashboard login={login}></RouteDashboard>
            </Route>
            <Route path="/dashboard/analysis">
              <Analysis login={login}></Analysis>
            </Route>
          </>
        }
        <Route path="*" exact>
          <Error/>
        </Route>
      </Switch>
    </>
  )
}

export default RoutesHandler
