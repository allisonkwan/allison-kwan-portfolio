import React from "react"
import data from "../yourdata"

const Organizations = () => {

  return (
    <div className="section" id="experience">
      <div className="container">
        <div className="experience-container">
          <h1>Campus Involvement</h1>
          <div className="experience-grid">
            {data.organizations.map(organizations => (
              <div className="experience" key={organizations.id}>
                <img src={organizations.img} alt="css"></img>
                <h3>{organizations.title}</h3>
                <h4>{organizations.subtitle}</h4>
                {organizations.para}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Organizations
