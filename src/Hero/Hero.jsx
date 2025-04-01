import React from "react"
import "./Hero.css"
import img1 from "../assets/img1.jpeg"
import img2 from "../assets/img2.jpeg"
import asset1 from "../assets/asset 1.webp"
import asset2 from "../assets/asset 2.webp"
import asset3 from "../assets/asset 3.webp"
import asset4 from "../assets/asset 4.webp"

const Hero = () => {
  return (
    <div className="hero-main-box1">
      <div className="hero-box1">
        <div className="hero-content">
          <div className="hero-header">
            <img src={img1} alt="User" />
            <span className="welcome-text">
              Hi We, <mark>Are Lead Pather</mark>
            </span>
          </div>
          <h1 className="hero-title">
            Grow your Business Organic <br /> & IT Solution Technology
          </h1>
          <p className="hero-description">
            In today's competitive business, the demand for efficient and
            cost-effective <br /> IT solutions has never been more critical.
          </p>
          <button className="hero-button">
            Get Started <span className="arrow-icon">↗</span>
          </button>
        </div>
      </div>

      <div className="hero-box2">
        <div className="hero-boxes-wrapper">
          <div className="hero-boxes-row">
            <div className="hero-small-box1">
              <img src={asset1} alt="User" />
            </div>
            <div className="hero-small-box2">
              <h3>150+</h3>
              <p>
                Worldwide Country <br /> has lots of clients
              </p>
              <div className="images-container">
                <img src={asset2} alt="User" />
                <img src={asset3} alt="User" />
                <img src={asset4} alt="User" />
                <div className="image-text">5k+</div>
              </div>
            </div>
          </div>
          <div className="hero-boxes-row">
            <div className="hero-small-box3">
              <div className="inner-box-container">
                <div className="inner-box">
                  <div className="text-box">Data Security</div>
                  <div className="circle-box">+</div>
                </div>
                <div className="inner-box">
                  <div className="circle-box">+</div>
                  <div className="text-box">Web Development</div>
                </div>
                <div className="inner-box">
                  <div className="text-box">Analytics & Optimization</div>
                  <div className="circle-box">+</div>
                </div>
              </div>
            </div>

            <div className="hero-small-box4">
              <div className="image-container">
                <img src={img2} alt="User" />
                <div className="overlay-text">
                  <h2>88%</h2>
                  <p>get 88% of the best services and growth business</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
