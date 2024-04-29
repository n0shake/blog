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
          hey! i'm an engineer working out of <a href={`https://en.wikipedia.org/wiki/Richmond,_Virginia`}>Richmond, VA</a>.
          i'm available to chat via <a href={`mailto:abhishekbanthia@me.com`}>email</a> or <a href={`https://twitter.com/${social?.twitter || ``}`}>x / twitter</a> 
           or check out my projects <a href={`https://github.com/n0shake`}>here</a>.
        </p>
      )}
    </div>
  )
}

export default Bio
