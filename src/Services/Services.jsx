import React from "react"
import "./Services.css"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
import img5 from "../assets/img5.png"
import img6 from "../assets/img6.png"
import img7 from "../assets/img7.png"
import img8 from "../assets/img8.png"

const services = [
  {
    img: img3,
    title: "Software Development",
    points: [
      "Software architecture design",
      "System integration services",
      "Data migration services",
      "Legacy app modernization",
    ],
  },
  {
    img: img4,
    title: "OTT Development",
    points: [
      "Platform Strategy & Consultation",
      "Content Management & Delivery",
      "Monetization Models",
      "Multi-Platform Support",
    ],
  },
  {
    img: img5,
    title: "Web Application Design",
    points: [
      "Web app development services",
      "Web portal development services",
      "Website development services",
      "Offshore web development",
    ],
  },
  {
    img: img6,
    title: "Mobile App Solutions",
    points: [
      "Android development services",
      "iOS app development services",
      "Mobile application design services",
      "Enterprise mobile app development",
    ],
  },
  {
    img: img7,
    title: "CRM Development",
    points: [
      "Automation & Workflow Optimization",
      "Security & Compliance",
      "Integration Capabilities",
      "Testing & Quality Assurance",
    ],
  },
  {
    img: img8,
    title: "AI Development",
    points: [
      "Cutting-Edge AI Solutions",
      "Tailored AI Models",
      "Automation and Efficiency",
      "Continuous Innovation and Support",
    ],
  },
]

const Services = () => {
  return (
    <div className="services">
      <div className="services-text">
        <h4>OUR SERVICES</h4>
        <p>
          How We Can <span>Help</span> You
        </p>
      </div>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="services-box" key={index}>
            <div className="image-wrapper">
              <img src={service.img} alt="Service" className="service-img" />
            </div>
            <div className="service-content">
              <h1 className="service-title">{service.title}</h1>
              {service.points.map((point, idx) => (
                <div className="service-point" key={idx}>
                  <div className="service-point-box">
                    <div className="circle2">
                      <span className="dot2"></span>
                    </div>
                    <p>{point}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
