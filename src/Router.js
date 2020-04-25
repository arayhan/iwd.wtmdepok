import React from "react"
import { Switch, Route } from "react-router"
import Home from "./pages/Home/Home"
import Agenda from "./pages/Agenda/Agenda"
import Speakers from "./pages/Speakers/Speakers"
import Team from "./pages/Team/Team"

const Router = () => {
  return (
    <Switch>
      <Route path="/team" component={Team} />
      <Route path="/speakers" component={Speakers} />
      <Route path="/agenda" component={Agenda} />
      <Route path="/" component={Home} />
    </Switch>
  )
}

export default Router
