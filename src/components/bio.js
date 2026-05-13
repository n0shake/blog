import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ObfuscatedEmail from "./obfuscated-email"
import nameAudio from "../../content/assets/abhishek.m4a"

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

  const audioRef = React.useRef(null)
  const playName = () => {
    const el = audioRef.current
    if (!el) return
    el.currentTime = 0
    el.play()
  }

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
          Hi! I'm Abhishek
          <button
            type="button"
            className="name-pronounce"
            onClick={playName}
            aria-label="Hear how to pronounce Abhishek"
          >
            <svg width="22" height="14" viewBox="0 0 36 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <line x1="2"  y1="10" x2="2"  y2="14"/>
              <line x1="6"  y1="7"  x2="6"  y2="17"/>
              <line x1="10" y1="4"  x2="10" y2="20"/>
              <line x1="14" y1="9"  x2="14" y2="15"/>
              <line x1="18" y1="2"  x2="18" y2="22"/>
              <line x1="22" y1="5"  x2="22" y2="19"/>
              <line x1="26" y1="3"  x2="26" y2="21"/>
              <line x1="30" y1="8"  x2="30" y2="16"/>
              <line x1="34" y1="10" x2="34" y2="14"/>
            </svg>
          </button>
          , a mobile engineer based in Virginia.
          I also focus on improving <a href={`https://apps.apple.com/us/app/clocker/id1056643111?mt=12/`}>cross-timezone collaboration</a>.
          I grew up in Mumbai and previously studied at UF.
          Drop me an email <ObfuscatedEmail subject="Hello from abhishekbanthia.com">here</ObfuscatedEmail>.
          <audio ref={audioRef} src={nameAudio} preload="none" />
        </p>
      </div>
    </div>
  )
}

export default Bio
