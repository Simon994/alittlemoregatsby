import React from "react"
import {Link} from "gatsby"

const Index = () => {
  return (
    <div>
      <p>This is an index page</p>
      <p>Go to <Link to="/about">About</Link> page</p>
    </div>
  )
}

export default Index
