import React, { useState } from 'react'
import {Switch,Route} from 'react-router-dom'
import LoginSign from "./Pages/LoginSignUp/LoginSign"
import Index from './Pages/Dashboard/Index'
import Error from './Pages/Error/Error'
import Card from './Pages/Card/Card'
import RouteDashboard from './Pages/Dashboard/Pages/RouteDashboard'
import { useNavigate } from "react-router-dom";

function RoutesHandler() {
  const [login, setLogin]= useState(false);
  


  return (
    <>
      <Switch >
        <Route path="/" exact>
          <LoginSign login={login} setLogin={setLogin}/>
        </Route>
        {
          // login &&
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
