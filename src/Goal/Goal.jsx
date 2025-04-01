import React from "react"
import "./Goal.css"
import asset5 from "../assets/asset 5.jpeg"

const Goal = () => {
  return (
    <div className="main-box2">
      <div className="box2a">
        <img src={asset5} alt="User" />
      </div>
      <div className="box2b">
        <h5>
          Hi We, <mark>Are Lead Pather 😊</mark>
        </h5>
        <h1>Transforming Ideas into Powerful Software Solutions</h1>
        <p>
          In today’s rapidly evolving digital landscape, businesses need robust
          and reliable software to stay competitive. At Lead Panther, we
          specialize in developing innovative software solutions tailored to
          meet the unique needs of our clients.
        </p>
        <div className="circle-text">
          <div className="circle1">
            <span className="dot1"></span>
          </div>
          <p>Focus on quality first</p>
        </div>
        <div className="circle-text">
          <div className="circle1">
            <span className="dot1"></span>
          </div>
          <p>Get to the market on time</p>
        </div>
        <button className="btn2">
          CONTACT US TODAY <span className="arrow-icon">↗</span>
        </button>
      </div>
    </div>
  )
}

export default Goal
