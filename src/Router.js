import React from "react"
import { Switch, Route } from "react-router"
import Home from "./pages/Home/Home"

const Router = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  )
}

export default Router
