import React from "react"
import "./App.css"
import Hero from "./Hero/Hero"
import Goal from "./Goal/Goal"
import Services from "./Services/Services"

import Software from "./Software/Software"
import Technologies from "./Technologies/Technologies"
import Cases from "./Cases/Cases"
import Clients from "./Clients/Clients"
import Articles from "./Articles/Articles"
import Contact from "./Contact/Contact"
const App = () => {
  return (
    <div>
      <Hero />
      <Goal />
      <Services />
      <Software />
      <Technologies />
      <Cases />
      <Clients />
      <Articles />
      <Contact />
    </div>
  )
}

export default App
