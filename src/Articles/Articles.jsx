import React from "react"
import "./Articles.css"
import asset77 from "../assets/asset 77.webp"
import asset79 from "../assets/asset 79.webp"
import asset80 from "../assets/asset 80.webp"
const Card = ({ image, title, author, date, comments }) => {
  return (
    <div className="card1">
      <div className="card-image-container">
        <img src={image} alt={title} className="card-image" />
        <div className="hover-icon">
          <div className="circle3">
            <span className="arrow1">↗</span>
          </div>
        </div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <div className="card-meta">
          <span>🖊 By {author}</span>
          <span>📅 {date}</span>
          <span>💬 {comments}</span>
        </div>
      </div>
    </div>
  )
}
const Articles = () => {
  const cardsData = [
    {
      image: asset77,
      title: "How Our Software Solutions Drive Insights.",
      author: "Alex",
      date: "11/12/2024",
      comments: 24,
    },
    {
      image: asset79,
      title: "Exploring Emerging Trends in Software Development.",
      author: "Alex",
      date: "11/12/2024",
      comments: 24,
    },
    {
      image: asset80,
      title: "How Software Integration Can Improve Workflow.",
      author: "Alex",
      date: "11/12/2024",
      comments: 24,
    },
  ]
  return (
    <div className="articles">
      <div className="articles-heading">
        <h2>Our Articles</h2>
        <p>
          Latest <span>Articles</span>
        </p>
      </div>
      <div className="card-container">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  )
}

export default Articles
