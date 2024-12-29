import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      bioPic: file(absolutePath: { regex: "/linkedIn.png/" }) {
        childImageSharp {
          fixed(width: 60, height: 60, quality: 95) {
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

  const author = data.site.siteMetadata?.author
  const bioPic = data.bioPic?.childImageSharp?.fixed

  return (
    <div>
      <div className="bio-parent">
        <div className="bio-pic">
          {bioPic && (
            <a href={`https://linkedin.com/in/abhishekbanthia`}>
            <Img
              fixed={bioPic}
              alt={`Link to the LinkedIn profile of the author`}
          /></a>)}
        </div>
        <div className="bio">
          {author?.name && (
            <p>
              <b>Abhishek Banthia</b> <br/>
              <span className="bio-subtitle">Software Engineer</span>
            </p>
          )}
        </div>
      </div>
      <div className="actual-bio">
       <br/>
        <p>
          I'm presently working as an engineer at <a href={`https://www.meta.com`}>Meta</a>. 
          I also focus on improving <a href={`https://apps.apple.com/us/app/clocker/id1056643111?mt=12/`}>cross-timezone collaboration</a>. 
          I grew up in Mumbai and previously studied at UF.
          My email is <a href={`mailto:abhishekbanthia@me.com`}>abhishekbanthia@me.com</a>.
        </p>
      </div>
    </div>
  )
}

export default Bio
