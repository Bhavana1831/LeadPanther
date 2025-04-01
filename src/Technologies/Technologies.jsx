import React, { useState } from "react"
import "./Technologies.css"
import asset21 from "../assets/asset 21.svg"
import asset22 from "../assets/asset 22.svg"
import asset23 from "../assets/asset 23.svg"
import asset24 from "../assets/asset 24.svg"
import asset25 from "../assets/asset 25.svg"
import asset26 from "../assets/asset 26.svg"
import asset27 from "../assets/asset 27.svg"
import asset28 from "../assets/asset 28.svg"
import asset29 from "../assets/asset 29.svg"
import asset30 from "../assets/asset 30.svg"
import asset31 from "../assets/asset 31.svg"
import asset32 from "../assets/asset 32.svg"

const Technologies = () => {
  const [selectedCategory, setSelectedCategory] = useState("webPlatform")

  const technologies = {
    webPlatform: [
      { name: "PHP", logo: asset21 },
      { name: "JavaScript", logo: asset22 },
      { name: "PostgreSQL", logo: asset23 },
      { name: "Swift", logo: asset24 },
      { name: "TypeScript", logo: asset25 },
      { name: "Python", logo: asset26 },
      { name: "G318", logo: asset27 },
      { name: "Java", logo: asset28 },
      { name: "Ruby", logo: asset29 },
      { name: "C++", logo: asset30 },
      { name: "React JS", logo: asset31 },
      { name: "Laraval", logo: asset32 },
    ],
    databases: [
      { name: "PostgreSQL", logo: asset23 },
      { name: "Swift", logo: asset24 },
      { name: "TypeScript", logo: asset25 },
      { name: "Python", logo: asset26 },
      { name: "G318", logo: asset27 },
      { name: "Java", logo: asset28 },
      { name: "Ruby", logo: asset29 },
      { name: "C++", logo: asset30 },
      { name: "React JS", logo: asset31 },
      { name: "Laraval", logo: asset32 },
    ],
    cloudDevops: [
      { name: "Swift", logo: asset24 },
      { name: "TypeScript", logo: asset25 },
      { name: "Python", logo: asset26 },
      { name: "G318", logo: asset27 },
      { name: "Java", logo: asset28 },
      { name: "Ruby", logo: asset29 },
      { name: "C++", logo: asset30 },
      { name: "React JS", logo: asset31 },
      { name: "Laraval", logo: asset32 },
    ],
    MobileApps: [
      { name: "TypeScript", logo: asset25 },
      { name: "Python", logo: asset26 },
      { name: "G318", logo: asset27 },
      { name: "Java", logo: asset28 },
      { name: "Ruby", logo: asset29 },
      { name: "C++", logo: asset30 },
      { name: "React JS", logo: asset31 },
      { name: "Laraval", logo: asset32 },
    ],
    OtherFrameworks: [
      { name: "Python", logo: asset26 },
      { name: "G318", logo: asset27 },
      { name: "Java", logo: asset28 },
      { name: "Ruby", logo: asset29 },
      { name: "C++", logo: asset30 },
      { name: "React JS", logo: asset31 },
      { name: "Laraval", logo: asset32 },
    ],
  }

  return (
    <div className="technologies">
      <div className="technologies-top">
        <h2>Our Technologies</h2>
        <p>
          We Use <span>Technologies</span>
        </p>
      </div>

      <div className="technologies-bottom">
        <div className="technologies-bottom-1">
          {Object.keys(technologies).map((category) => (
            <button
              key={category}
              className={`category-btn ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.replace(/([A-Z])/g, " $1").trim()}
            </button>
          ))}
        </div>

        <div className="technologies-bottom-2">
          {technologies[selectedCategory].map((tech) => (
            <div key={tech.name} className="tech-item1">
              <div className="hexagon">
                <img src={tech.logo} alt={tech.name} className="tech-logo" />
              </div>
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Technologies
