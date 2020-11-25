/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      {author?.name && (
        <p>
          I am an iOS engineer working out of the Bay Area.
          If you would like to talk, please feel free to <a href={`mail:me@abhishekbanthia.com`}>email me</a>.
          {` `}
          You can follow me on <Link to={`https://twitter.com/${social?.twitter || ``}`}>
            Twitter</Link> or read my code on <Link to={`https://github.com/n0shake`}>Github</Link>.
        </p>
      )}
    </div>
  )
}

export default Bio
