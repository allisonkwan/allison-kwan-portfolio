import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import About from "../components/about"
import Experience from "../components/experience"
import Work from "../components/Work"
import Skills from "../components/skills"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Allison Kwan" />
    <Header></Header>
    <About></About>
    <Experience></Experience>
    <Work></Work>
    <Skills></Skills>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
