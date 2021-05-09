import React from "react"
import Layout from "../components/layout"
import {Link} from "gatsby"

const About  = () => {
  return (
    <Layout>
      This is the about page!
      <p>Go to <Link to="/">Home</Link> page</p>
    </Layout>
  )
}

export default About