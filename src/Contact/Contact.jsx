import React from "react"
import {
  Phone,
  Mail,
  MapPin,
  Building,
  User,
  MessageSquare,
} from "lucide-react"

import "./Contact.css"

const Contact = () => {
  return (
    <div className="container">
      <div className="card2">
        <h1>YOU ARE HERE</h1>
        <h2>Let's Start</h2>
        <p>
          Initiating Your Journey to Success and <br /> Growth.
        </p>
        <div className="info">
          <p>
            <span className="icon-circle">
              <Phone size={16} color="white" />
            </span>
            +91 6393324073
          </p>
          <p>
            <span className="icon-circle">
              <Mail size={16} color="white" />
            </span>
            Support@leadpanther.com
          </p>
          <p>
            <span className="icon-circle">
              <MapPin size={16} color="white" />
            </span>
            203, Tower C, iThum sector 62 Noida 201301.
          </p>
          <p className="subtext">
            <span className="icon-circle">
              <Building size={16} color="white" />
            </span>
            Lead Panther (A Unit of Geevosys Infosystems Private Limited)
          </p>
        </div>

        <ul className="steps">
          <li>
            <span className="circle">01</span> Share your requirements
          </li>
          <li>
            <span className="circle">02</span> Discuss them with our experts
          </li>
          <li>
            <span className="circle">03</span> Get a free quote
          </li>
          <li>
            <span className="circle">04</span> Start the project
          </li>
        </ul>
      </div>

      <div className="card3">
        <h3>✉️ Let's Connect!</h3>
        <p>
          Send us a message, and we'll promptly discuss your project <br /> with
          you.
        </p>

        <div className="form">
          <div className="form-row">
            <div className="input-container">
              <User size={20} className="icon" />
              <input type="text" placeholder="Your Name" />
            </div>

            <div className="input-container">
              <Mail size={20} className="icon" />
              <input type="email" placeholder="Your Email" />
            </div>
          </div>

          <div className="input-container">
            <Phone size={20} className="icon" />
            <input type="tel" placeholder="Your Phone No." />
          </div>
          <div className="input-container textarea">
            <MessageSquare size={20} className="icon" />
            <textarea placeholder="How can we help you?"></textarea>
          </div>

          <button>
            Send Request <span className="arrow-icon">↗</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
