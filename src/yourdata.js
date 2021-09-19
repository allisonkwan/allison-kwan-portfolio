import React from "react"

// Experience Icons
import gtIcon from "./images/georgiatech.png"
import adiIcon from "./images/analogdevices.png"

// Organizations Icons
import bdbiIcon from "./images/bdbi.png"
import dcIcon from "./images/dc.png"
import gtsfIcon from "./images/gtsf.jpg"
import coffeeIcon from "./images/coffeechat.jpg"
import treeIcon from "./images/treeplenish.png"

// Skills Icons
import pythonIcon from "./images/python.png"
import javascriptIcon from "./images/javascript.png"
import javaIcon from "./images/java.png"
import cssIcon from "./images/css.png"
import reactIcon from "./images/react.png"
import elbIcon from "./images/awsbeanstalk.png"
import codePipelineIcon from "./images/codepipeline.png"
import seleniumIcon from "./images/selenium.png"
import qlikviewIcon from "./images/qlikview.jpg"
import confluenceIcon from "./images/confluence.png"
import excelIcon from "./images/excel.png"
import matlabIcon from "./images/matlab.jpeg"

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
    "Currently, I'm involved in several innovative projects ranging from software development for a national nonprofit to targeted user growth for a technology startup. I've previously worked at Analog Devices as a Data Visualization Intern and also as a mobile developer for a machine learning club.",
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
      subtitle: "Currently being used by 2,000 student leaders across 20 states.",
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
      id: 4, //DO NOT CHANGE THIS (Please)😅
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
      subtitle: "B.S., Computer Science | 2020-2023",
      para: <p>Concentration in Information Internetworks and Front-End Development{"\n"}</p>,
    },
    {
      id: 2,
      img: adiIcon,
      title: "Analog Devices",
      subtitle: "Data Visualization Intern | Summer 2021",
      para: <p>Developed a collaboration site for the Automotive Customer Quality Engineering group to analyze quality trends and communicate performance metrics.</p>,
    },
    {
      id: 3,
      img: treeIcon,
      title: "Tree-Plenish - National Nonprofit",
      subtitle: "Software Development Lead | Jan 2021 - Present",
      para: <p>Developing a full stack user portal connected to a PostgreSQL database. Overseeing continuous deployment for all web development projects.</p>,
    },
  ],

  organizations: [
    {
      id: 1,
      img: bdbiIcon,
      title: "Big Data Big Impact",
      subtitle: "Data Visualization Developer",
      para: <p>Used React Native to develop a mobile application using deep learning techniques to analyze an uploaded image for crop type and disease present.</p>,
    },
    {
      id: 2,
      img: coffeeIcon,
      title: "Coffee Chat - Local Startup",
      subtitle: "Front-End Developer",
      para: <p>Used React to efficiently implement user-optimized designs and client-side logic.</p>,
    },
    {
      id: 3,
      img: dcIcon,
      title: "180 Degrees Consulting Georgia Tech",
      subtitle: "Senior Consultant",
      para: <p>Redesigned the Junior League of Atlanta's existing online member dashboard to increase logical organization of data and improve users' understanding of organization's functions.</p>,
    },
    {
      id: 4,
      img: gtsfIcon,
      title: "Georgia Tech Student Foundation",
      subtitle: "1st Year Leadership Initiative, Investments Committee",
      para: <p>Increased understanding of financial techniques used to grow nation's largest student-managed endowment of $1.7 million. Organized campus-wide marketing campaign.</p>,
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
        title: "Javascript",
      },
      {
        id: 3,
        img: pythonIcon,
        title: "Python",
      },
      {
        id: 4,
        img: cssIcon,
        title: "HTML / CSS",
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
        img: elbIcon,
        title: "AWS Elastic Beanstalk",
      },
      {
        id: 3,
        img: codePipelineIcon,
        title: "AWS CodePipeline",
      },
      {
        id: 4,
        img: seleniumIcon,
        title: "Selenium",
      },
    ],

    software: [
      {
        id: 1,
        img: qlikviewIcon,
        title: "QlikView",
      },
      {
        id: 2,
        img: confluenceIcon,
        title: "Confluence",
      },
      {
        id: 3,
        img: matlabIcon,
        title: "MATLAB",
      },
      {
        id: 4,
        img: excelIcon,
        title: "Microsoft Excel",
      },
    ],
  },

  // End Skills Section --------------------------

  //   Contact Section --------------

  contactSubHeading: "I hope to meet and work with you!",

  // End Contact Section ---------------
}
