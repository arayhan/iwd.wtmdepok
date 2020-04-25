import React from "react"
import NavBar from "./components/organisms/NavBar"
import Footer from "./components/organisms/Footer"
import Router from "./Router"
import "./styles/app.scss"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router />
      <Footer />
    </div>
  )
}

export default App
