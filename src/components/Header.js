import React from "react"
import Fade from "react-reveal/Fade"
import Connect from "./atoms/Connect"
import data from "../yourdata"

const Header = () => {
	return (
		<div className="section" id="home">
			<div className="container">
				<div className="header-wrapper">
					<Fade bottom>
						<h1>
							Hi, I'm {data.name}!{" "}
							<span role="img" aria-label="Emoji">
								👋
              </span>
						</h1>
					</Fade>
					<Fade bottom cascade>
						<div className="heading-wrapper">
							<h2>{data.headerTagline[0]}</h2>
							<h2>{data.headerTagline[1]}</h2>
							<h2>{data.headerTagline[2]}</h2>
						</div>
					</Fade>
					<Fade bottom>
						<p>{data.headerParagraph}</p>
					</Fade>
					<Connect />
				</div>
			</div>
		</div>
	)
}

export default Header
