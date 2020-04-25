import React from "react"
import { Switch, Route } from "react-router"
import Home from "./pages/Home/Home"
import Agenda from "./pages/Agenda/Agenda"

const Router = () => {
  return (
    <Switch>
      <Route path="/agenda" component={Agenda} />
      <Route path="/" component={Home} />
    </Switch>
  )
}

export default Router
