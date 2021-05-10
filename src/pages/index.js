import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import {graphql, Link} from "gatsby"

const Index = () => {
  return (
    <Layout>
      <div>
        <h2>This is the index page</h2>
        <p>This is an index page</p>
        <p>Go to <Link to="/about">About</Link> page</p>
      </div>
    </Layout>
  )
}

export default Index
