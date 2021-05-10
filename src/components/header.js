import React from "react"
import {StaticQuery, graphql} from "gatsby"

export default () => {
  return (
    <StaticQuery
      query = {graphql `
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render = {data => (
        <h1>{data.site.siteMetadata.title}</h1>
      )
      }
    />
  )
}
