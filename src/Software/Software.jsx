import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./Software.css"
import asset18 from "../assets/asset 18.jpeg"
import asset17 from "../assets/asset 17.webp"
import asset19 from "../assets/asset 19.png"
import asset20 from "../assets/asset 20.png"

const Software = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
  }
  const slidesData = [
    {
      id: 1,
      imgSrc: asset18,
      title: `"Amazing software services"`,
      description: `"Lead Panther completed our website promptly, but they also did a fabulous job in improving its performance and stability. We are impressed with their proactive approach and seamless execution. As a result, we have now engaged them in several ongoing projects, confident in their ability to deliver excellent results."`,
    },
    {
      id: 2,
      imgSrc: asset17,
      title: `"Amazing software services"`,
      description: `"We had a fantastic experience with Lead Panther for our website development. Their team delivered exceptional results, with a seamless design, efficient functionality, and excellent user experience. Their professionalism and attention to detail were evident in every aspect of their work."`,
    },
    {
      id: 3,
      imgSrc: asset19,
      title: `"Amazing software services"`,
      description: `"We are extremely pleased with the exceptional work Lead Panther did on our website development. Their expertise and dedication have transformed our business expectations. They provided a seamless experience from start to finish, delivering a website that not only looks fantastic but also performs flawlessly. We highly recommend Lead Panther for anyone seeking top-notch website solutions!"`,
    },
    {
      id: 4,
      imgSrc: asset20,
      title: `"Amazing software services"`,
      description: `"Lead Panther did an outstanding job with our website development. From a comprehensive SEO strategy to flawless technical execution, they exceeded our expectations. We highly recommend Lead Panther for anyone seeking top-notch website solutions."`,
    },
  ]

  return (
    <div className="software">
      <div className="software-left">
        <h1>6,500+</h1>
        <p>Customers win deals with Lead Panther</p>
      </div>
      <div className="software-right">
        <Slider {...settings}>
          {slidesData.map((slide) => (
            <div key={slide.id} className="slide-content">
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
              <img src={slide.imgSrc} alt={slide.title} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Software
