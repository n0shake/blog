import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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

  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      {author?.name && (
        <p>
          Hey! I'm an engineer working out of the Bay Area.
          If you would like to talk, please feel free to <a href={`mailto:abhishekbanthia@me.com`}>email me</a>.
          {` `}
          You can follow me on <a href={`https://twitter.com/${social?.twitter || ``}`}>
            X / Twitter</a> or read my code on <a href={`https://github.com/n0shake`}>Github</a>.
        </p>
      )}
    </div>
  )
}

export default Bio
