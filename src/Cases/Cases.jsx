import React from "react"
import "./Cases.css"
import asset26 from "../assets/asset 26.svg"
import asset34 from "../assets/asset 34.svg"
import asset33 from "../assets/asset 33.webp"
import asset35 from "../assets/asset 35.webp"
import asset37 from "../assets/asset 37.webp"
import asset36 from "../assets/asset 36.png"
import asset38 from "../assets/asset 38.png"
import asset39 from "../assets/asset 39.svg"
import asset41 from "../assets/asset 41.svg"
import asset32 from "../assets/asset 42.svg"
const Cases = () => {
  return (
    <div className="cases">
      <div className="cases-heading">
        <h2>
          Our latest <span>Case</span> Studies
        </h2>
      </div>
      <div className="cases-studies">
        <div className="cases-studies-left">
          <p className="category">DATA SOLUTIONS</p>
          <h3 className="case-title">1. AI Email Verifier</h3>
          <p className="case-description">
            Developing an AI Email Verifier for Tejarat Marketing required a
            precise approach to meet their specific challenges. The process
            started with careful analysis and planning to identify the issues
            with inactive and invalid email addresses in their database. The
            primary goal was to improve email deliverability and restore client
            trust in the company’s services.
          </p>
          <div className="industry-country">
            <p className="industry">
              <strong className="industry-label">Industry:</strong>
              <span className="industry-value"> Data Solutions</span>
            </p>
            <p className="country">
              <strong className="country-label">Country:</strong>
              <span className="country-value"> India</span>
            </p>
          </div>

          <div className="core-technologies">
            <p className="technologies-label">
              <strong>Core Technologies:</strong>
            </p>
            <div className="core-technologies-icons">
              <div className="tech-item">
                <img src={asset26} alt="User" />
              </div>
              <div className="tech-item">
                <img src={asset34} alt="User" />
              </div>
            </div>
          </div>

          <button className="read-case">
            Read Case <span className="arrow-icon">↗</span>
          </button>
        </div>

        <div className="cases-studies-right">
          <img src={asset33} className="case-study-image" alt="User" />
        </div>
      </div>

      <div className="cases-studies">
        <div className="cases-studies-left">
          <p className="category">TECHNOLOGY</p>
          <h3 className="case-title">2. Grammar Tool</h3>
          <p className="case-description">
            Addressing the communication challenges for the tech startup
            required a structured approach to meet their specific needs. It
            began with identifying the key issues, including inconsistent
            messaging and grammatical errors, which impacted their professional
            image. The main objective was to implement a grammar tool that
            seamlessly integrated with their existing platforms to enhance
            clarity and reduce misunderstandings.
          </p>
          <div className="industry-country">
            <p className="industry">
              <strong className="industry-label">Industry:</strong>
              <span className="industry-value"> Technology</span>
            </p>
            <p className="country">
              <strong className="country-label">Country:</strong>
              <span className="country-value"> India</span>
            </p>
          </div>

          <div className="core-technologies">
            <p className="technologies-label">
              <strong>Core Technologies:</strong>
            </p>
            <div className="core-technologies-icons">
              <div className="tech-item">
                <img src={asset36} alt="User" />
              </div>
              <div className="tech-item">
                <img src={asset26} alt="User" />
              </div>
            </div>
          </div>

          <button className="read-case">
            Read Case <span className="arrow-icon">↗</span>
          </button>
        </div>

        <div className="cases-studies-right">
          <img src={asset35} className="case-study-image" alt="User" />
        </div>
      </div>
      <div className="cases-studies">
        <div className="cases-studies-left">
          <p className="category">Media (Spiritual Television Network)</p>
          <h3 className="case-title">3. OTT Platform</h3>
          <p className="case-description">
            Building an OTT platform for Sadhna TV required a tailored approach
            to meet their specific needs. It started with addressing the
            challenges of managing a vast content library, ensuring multi-device
            compatibility, and handling high traffic during peak times. The
            primary focus was on creating a scalable platform that incorporated
            effective monetization strategies and robust security measures.
          </p>
          <div className="industry-country">
            <p className="industry">
              <strong className="industry-label">Industry:</strong>
              <span className="industry-value">
                {" "}
                Media (Spiritual Television Network){" "}
              </span>
            </p>
            <p className="country">
              <strong className="country-label">Country:</strong>
              <span className="country-value"> India</span>
            </p>
          </div>

          <div className="core-technologies">
            <p className="technologies-label">
              <strong>Core Technologies:</strong>
            </p>
            <div className="core-technologies-icons">
              <div className="tech-item">
                <img src={asset38} alt="User" />
              </div>
              <div className="tech-item">
                <img src={asset39} alt="User" />
              </div>
            </div>
          </div>

          <button className="read-case">
            Read Case <span className="arrow-icon">↗</span>
          </button>
        </div>

        <div className="cases-studies-right">
          <img src={asset37} className="case-study-image" alt="User" />
        </div>
      </div>
      <div className="cases-studies">
        <div className="cases-studies-left">
          <p className="category">Pharmaceutical </p>
          <h3 className="case-title">4. B2B Platform </h3>
          <p className="case-description">
            Creating a B2B platform for Medarpha involved a strategic approach
            to meet their specific needs. It began with addressing the
            challenges of automating order management, tracking inventory, and
            managing complex pricing structures. The main objective was to
            develop a centralized platform that reduced delays, minimized
            errors, and provided real-time visibility for improved financial
            accuracy.
          </p>
          <div className="industry-country">
            <p className="industry">
              <strong className="industry-label">Industry:</strong>
              <span className="industry-value"> Pharmaceutical </span>
            </p>
            <p className="country">
              <strong className="country-label">Country:</strong>
              <span className="country-value"> India</span>
            </p>
          </div>

          <div className="core-technologies">
            <p className="technologies-label">
              <strong>Core Technologies:</strong>
            </p>
            <div className="core-technologies-icons">
              <div className="tech-item">
                <img src={asset41} alt="User" />
              </div>
              <div className="tech-item">
                <img src={asset32} alt="User" />
              </div>
            </div>
          </div>

          <button className="read-case">
            Read Case <span className="arrow-icon">↗</span>
          </button>
        </div>

        <div className="cases-studies-right">
          <img src={asset33} className="case-study-image" alt="User" />
        </div>
      </div>
      <button className="case-study-button1">
        VIEW MORE CASES STUDY <span className="arrow-icon">↗</span>
      </button>
    </div>
  )
}

export default Cases
