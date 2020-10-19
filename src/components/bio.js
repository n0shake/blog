/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
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
          I am currently looking for full-time oppportunities. 
          If you would like to talk, please feel free to <a href={`mail:me@abhishekbanthia.com`}>email me</a>.
          {` `}
          You can follow me on <a href={`https://twitter.com/${social?.twitter || ``}`}>
            Twitter</a>. or read my code on <a href={`https://github.com/n0shake`}>Github</a>.
        </p>
      )}
    </div>
  )
}

export default Bio
