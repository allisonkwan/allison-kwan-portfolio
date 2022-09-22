import React from "react"
import Card from "./atoms/Card"
import Fade from "react-reveal/Fade"
import useWindowDimensions from "./functions/window"
import data from "../yourdata"

const Work = () => {

  let { height, width } = useWindowDimensions();

  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <Fade bottom>
            <h1>Projects</h1>
          </Fade>

          <div className="grid">
            <Fade bottom cascade>
              {data.projects.map(project => (
                <Card
                  key={project.id}
                  heading={project.title}
                  subheading={project.subtitle}
                  paragraph={project.para}
                  imgUrl={project.imageSrc}
                  projectLink={project.url}
                ></Card>
              ))}
            </Fade>
          </div>
          <div className="container">
            <div className="experience-container">
              <h1>Organizational Involvement</h1>
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
        {/* <div className="extra-container">
          <GitHubCalendar
            username="allisonkwan"
            blockSize={width / 75}
            fontSize={width / 200 + 5}>
            <ReactTooltip html />
          </GitHubCalendar>
        </div> */}
      </div>
    </div>
  )
}

export default Work
