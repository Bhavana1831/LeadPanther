import React, { useEffect, useState, useRef } from "react"
import "./Clients.css"

import asset43 from "../assets/asset 43.jpeg"
import asset44 from "../assets/asset 44.jpeg"
import asset46 from "../assets/asset 46.jpeg"
import asset47 from "../assets/asset 47.jpeg"
import asset48 from "../assets/asset 48.jpeg"
import asset49 from "../assets/asset 49.jpeg"
import asset50 from "../assets/asset 50.jpeg"
import asset51 from "../assets/asset 51.jpeg"
import asset52 from "../assets/asset 52.jpeg"
import asset53 from "../assets/asset 53.jpeg"
import asset54 from "../assets/asset 54.jpeg"
import asset55 from "../assets/asset 55.jpeg"
import asset56 from "../assets/asset 56.jpeg"
import asset57 from "../assets/asset 57.jpeg"
import asset58 from "../assets/asset 58.jpeg"
import asset59 from "../assets/asset 59.jpeg"
import asset60 from "../assets/asset 60.jpeg"
import asset61 from "../assets/asset 61.jpeg"
import asset62 from "../assets/asset 62.jpeg"
import asset63 from "../assets/asset 63.jpeg"
import asset75 from "../assets/asset 75.jpeg"
const images = [
  asset43,
  asset44,
  asset46,
  asset47,
  asset48,
  asset49,
  asset50,
  asset51,
  asset52,
  asset53,
  asset54,
  asset55,
  asset56,
  asset57,
  asset58,
  asset59,
  asset60,
  asset61,
  asset62,
  asset63,
]

const duplicatedImages = [...images, ...images]

const Clients = () => {
  const [index, setIndex] = useState(0)
  const imageWidth = 160
  const trackRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (index >= images.length) {
      setTimeout(() => {
        setIndex(0)
        trackRef.current.style.transition = "none"
      }, 500)
    } else {
      trackRef.current.style.transition = "transform 1s ease-in-out"
    }
  }, [index])

  return (
    <div className="clients">
      <div className="clients-top">
        <h2 className="clients-heading">Our Clients</h2>

        <div className="clients-slider">
          <div
            ref={trackRef}
            className="clients-track"
            style={{ transform: `translateX(-${index * imageWidth}px)` }}
          >
            {duplicatedImages.map((img, i) => (
              <img key={i} src={img} alt={`Client ${i + 1}`} />
            ))}
          </div>
        </div>

        <button className="clients-btn">
          View More <span className="arrow-icon">↗</span>
        </button>
      </div>
      <div className="clients-bottom">
        <div className="clients-bottom-left">
          <img src={asset75} alt="User" />
        </div>
        <div className="clients-bottom-right">
          <h2>
            National Gaurav Award 2024: Honouring Excellence in AI Development
          </h2>
          <p>
            At Lead Panther, we are thrilled to announce that our CEO and team
            were honoured with the prestigious National Gaurav Award 2024 for
            our groundbreaking achievements in AI development. This esteemed
            accolade recognizes our relentless dedication to innovation and
            excellence, as we continue to empower businesses with cutting-edge
            technology. The award ceremony was a proud moment for our entire
            team, celebrating our collective efforts and vision for a smarter
            future.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Clients
