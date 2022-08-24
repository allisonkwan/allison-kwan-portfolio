import React from "react"

// Experience Icons
import gtIcon from "./images/georgiatech.png"
import amexIcon from "./images/amex.png"
import adiIcon from "./images/analogdevices.png"

// Organizations Icons
import bdbiIcon from "./images/bdbi.png"
import dcIcon from "./images/dc.png"
import bogIcon from "./images/bog.png"
import gtsfIcon from "./images/gtsf.jpg"
import coffeeIcon from "./images/coffeechat.jpg"
import treeIcon from "./images/treeplenish.png"
import asuResearchIcon from "./images/asu.png"

// Skills Icons
import pythonIcon from "./images/python.png"
import javascriptIcon from "./images/javascript.png"
import javaIcon from "./images/java.png"
import htmlIcon from "./images/html.png"
import cssIcon from "./images/css.png"
import cIcon from "./images/c.png"
import reactIcon from "./images/react.png"
import flaskIcon from "./images/flask.png"
import gitIcon from "./images/git.png"
import elbIcon from "./images/awsbeanstalk.png"
import codePipelineIcon from "./images/codepipeline.png"
import gaIcon from "./images/ga.png"
import seleniumIcon from "./images/selenium.png"
import qlikviewIcon from "./images/qlikview.jpg"
import confluenceIcon from "./images/confluence.png"
import apexIcon from "./images/apexIcon.png"
import sqlIcon from "./images/sqlIcon.png"
import oracleRestIcon from "./images/oracleRestIcon.png"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Allison",
  headerTagline: [
    //Line 1 For Header
    "Developer",
    //Line 2 For Header
    "Visionary",
    //Line 3 For Header
    "Student",
  ],
  //   Header Paragraph
  headerParagraph:
    "Welcome to my personal page! Feel free to look around — if anything intrigues you, don't hesitate to reach out!",

  //Contact Email
  contactEmail: "akwan6@gatech.edu",

  //Social
  socialMedia: {
    linkedin: 'https://www.linkedin.com/in/allisonkwan23/',
    instagram: 'https://www.instagram.com/akwanphoto/',
    github: 'https://github.com/allisonkwan',
    twitter: 'https://www.twitter.com/akwan2020',
    youtube: 'https://www.youtube.com/channel/UCmZ_mSJE2V-lD-eehD8-EYA',
    email: 'akwan6@gatech.edu'
  },

  // End Header Details -----------------------

  // About Section --------------
  aboutParaOne:
    "I’m a junior Computer Science major at Georgia Tech. I enjoy building full stack applications and creating data visualizations that meet specific business needs, and I am passionate about using my knowledge to actively contribute to meaningful projects in a variety of industries.",
  aboutParaTwo:
    "Currently, I'm involved in several innovative projects ranging from software development for a national nonprofit to directing all project work for a campus consulting organization. I've previously worked at American Express as a Software Engineering Intern and Analog Devices as a Data Visualization Intern.",
  aboutParaThree:
    "When I'm not coding or expanding my professional breadth, you can typically find me experimenting with a new recipe, immersed in a good book, or traveling to a new city. Thanks for checking out my page!",
  aboutImage:
    require("./images/profile.png"),

  //   End About Section ---------------------

  // Work Section ------------------------
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "Tree-Plenish User Access Portal", //Project Title - Add Your Project Title Here
      subtitle: "Currently being used by 2,000+ student leaders across 38 states.",
      para:
        "A custom built web access portal enabling student leaders to view data essential for organizing tree-planting events. Includes login functionality and data automatically pulled from a remote server.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: require("./images/treeportal.png"),
      //Project URL - Add Your Project Url Here
      url: "http://treeplenishportal.com",
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "Voices of the Vaccine", //Project Title - Add Your Project Title Here
      subtitle: "Best Overall - Hacklytics Hackathon",
      para:
        "A recurrent neural network employing natural language processing techniques to classify and display the sentiment of COVID-19 related tweets. Upwards of 90% classification accuracy.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: require("./images/vaccine.png"),
      //Project URL - Add Your Project Url Here
      url: "https://github.com/allisonkwan/voices-of-the-vaccine",
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "Clikr",
      subtitle: "1st Place, Anthem Challenge - HackGT8 Hackathon",
      para:
        "A Google Chrome extension that acts as an accessible web navigation tool.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: require("./images/clikr.jpg"),
      //Project URL - Add Your Project Url Here
      url: "https://github.com/allisonkwan/clikr",
    },
    {
      id: 4, //DO NOT CHANGE THIS (Please)😅
      title: "Draw Your Way", //Project Title - Add Your Project Title Here
      subtitle: "Best Overall - HackGT7 Hackathon",
      para:
        "A mobile and web guiding app allowing users to envision visual representations of complex directions.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: require("./images/drawyourway.png"),
      //Project URL - Add Your Project Url Here
      url: "https://github.com/allisonkwan/draw-your-way",
    },
    {
      id: 5, //DO NOT CHANGE THIS (Please)😅
      title: "Coffee Chat", //Project Title - Add Your Project Title Here
      para:
        "A local startup service aimed at connecting college students through 1:1 video calls, providing introductions using a customized matching algorithm.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: require("./images/coffeechat.jpg"),
      //Project URL - Add Your Project Url Here
      url: "http://coffechat.io/",
    },
  ],

  // End Work Section -----------------------

  //   YouTube Section --------------------------

  youtubeHeading: "YouTube",
  // End YouTube Section -----------------

  // Experience Section ---------------

  //   Import Icons from the top and link it here

  experience: [
    {
      id: 1,
      img: gtIcon,
      title: "Georgia Institute of Technology",
      subtitle: "B.S., Computer Science | 2020 - 2023",
      para: <p>Concentration in Information Internetworks and Front-End Development{"\n"}</p>,
    },
    {
      id: 2,
      img: amexIcon,
      title: "American Express",
      subtitle: "Software Engineering Intern | May - August 2022",
      para: <p>Developed a web dashboard to automatically consolidate service status and system data across several large-scale finance platforms, saving 90 hrs/week of manual reactive health checks and reducing support team inquiry volume by 20%.</p>,
    },
    {
      id: 3,
      img: treeIcon,
      title: "Tree-Plenish",
      subtitle: "Software Development Lead | Jan 2021 - Present",
      para: <p>Developed a full stack user portal connected to a PostgreSQL database. Developed a stand-alone graphical user interface executable for employees to view database tables.</p>,
    },
    {
      id: 4,
      img: adiIcon,
      title: "Analog Devices",
      subtitle: "Data Visualization Intern | May - Aug 2021",
      para: <p>Developed a collaboration site for the Automotive Customer Quality Engineering group to analyze quality trends and communicate performance metrics.</p>,
    },
  ],

  organizations: [
    {
      id: 1,
      img: dcIcon,
      title: "180 Degrees Consulting Georgia Tech",
      subtitle: "Director of Projects | Jan 2021 - Present",
      para: <p>Managing 5 project managers, supporting them with weekly check-ins, to ensure that projects exceed client expectations. Curating project portfolio to contain mix of strategic, technical, operational, marketing, and healthcare focuses.</p>,
    },
    {
      id: 2,
      img: bogIcon,
      title: "Bits of Good",
      subtitle: "Product Manager | Jan 2022 - Present",
      para: <p>Serving as primary point of contact with nonprofit client to drive product development process from inception to production. Developing product roadmap by converting business requirements to actionable tasks.</p>,
    },
    {
      id: 3,
      img: coffeeIcon,
      title: "Coffee Chat - Local Startup",
      subtitle: "Front-End Developer | Jan - May 2021",
      para: <p>Used React to efficiently implement user-optimized designs and client-side logic.</p>,
    },
    {
      id: 4,
      img: bdbiIcon,
      title: "Big Data Big Impact",
      subtitle: "Data Visualization Developer | Jan - May 2021",
      para: <p>Used React Native to develop a mobile application using deep learning techniques to analyze an uploaded image for crop type and disease present.</p>,
    },
    {
      id: 5,
      img: gtsfIcon,
      title: "Georgia Tech Student Foundation",
      subtitle: "1st Year Leadership Initiative | Aug 2020 - May 2021",
      para: <p>Increased understanding of financial techniques used to grow nation's largest student-managed endowment of $1.7 million. Organized campus-wide marketing campaign.</p>,
    },
    {
      id: 6,
      img: asuResearchIcon,
      title: "Green Research Lab at Arizona State University",
      subtitle: "Chemical Engineering Researcher | May 2019 - Aug 2020",
      para: <p>Co-authored a manuscript that was published in Polymer (Jan 2021). Developed a data acquisition program (LabVIEW). Performed data analysis on extensive tensile test data.</p>,
    },
  ],

  // End Experience Section --------------------------

  // Skills Section ---------------

  skills: {

    languages: [
      {
        id: 1,
        img: javaIcon,
        title: "Java",
      },
      {
        id: 2,
        img: javascriptIcon,
        title: "JavaScript",
      },
      {
        id: 3,
        img: pythonIcon,
        title: "Python",
      },
      {
        id: 4,
        img: htmlIcon,
        title: "HTML",
      },
      {
        id: 5,
        img: cssIcon,
        title: "CSS",
      },
      {
        id: 6,
        img: cIcon,
        title: "C",
      },
    ],

    technologies: [
      {
        id: 1,
        img: reactIcon,
        title: "React",
      },
      {
        id: 2,
        img: flaskIcon,
        title: "Flask",
      },
      {
        id: 3,
        img: elbIcon,
        title: "AWS Elastic Beanstalk",
      },
      {
        id: 4,
        img: codePipelineIcon,
        title: "AWS CodePipeline",
      },
      {
        id: 5,
        img: gitIcon,
        title: "Git",
      },
      {
        id: 6,
        img: seleniumIcon,
        title: "Selenium",
      },
    ],

    software: [
      {
        id: 1,
        img: apexIcon,
        title: "Oracle Application Express (APEX)",
      },
      {
        id: 2,
        img: sqlIcon,
        title: "Oracle SQL Developer",
      },
      {
        id: 3,
        img: oracleRestIcon,
        title: "Oracle Rest API (ORDS)",
      },
      {
        id: 4,
        img: confluenceIcon,
        title: "Atlassian Confluence",
      },
      {
        id: 5,
        img: qlikviewIcon,
        title: "QlikView",
      },
      {
        id: 6,
        img: gaIcon,
        title: "Google Analytics",
      },
    ],
  },

  // End Skills Section --------------------------

  //   Contact Section --------------

  contactSubHeading: "I hope to meet and work with you!",

  // End Contact Section ---------------
}
