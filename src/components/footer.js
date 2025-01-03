import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Footer = () => {
  const data = useStaticQuery(graphql`
   query FooterQuery {
	  twitterAvatar: file(absolutePath: { regex: "/twitter.png/" }) {
	    childImageSharp {
	      fixed(width: 32, height: 32, quality: 95) {
	        ...GatsbyImageSharpFixed
	      }
	    }
	  }
	  linkedInAvatar: file(absolutePath: { regex: "/linkedin.png/" }) {
	    childImageSharp {
	      fixed(width: 32, height: 32, quality: 95) {
	        ...GatsbyImageSharpFixed
	      }
	    }
	  }
    githubAvatar: file(absolutePath: { regex: "/github.png/" }) {
      childImageSharp {
        fixed(width: 32, height: 32, quality: 95) {
          ...GatsbyImageSharpFixed
        }
      }
    }
	}
  `)

  const linkedInAvatar = data?.linkedInAvatar?.childImageSharp?.fixed
  const twitterAvatar = data?.twitterAvatar?.childImageSharp?.fixed
  const githubAvatar = data?.githubAvatar?.childImageSharp?.fixed

  return (
     <footer>
     <a href="https://www.linkedin.com/in/abhishekbanthia/">
     {linkedInAvatar && (
      <Img
       fixed={linkedInAvatar}
       alt={`Linkedin`}
     />
     )}
     </a>
     &nbsp;&nbsp;
     <a href="https://www.github.com/n0shake/">
     {githubAvatar && (
      <Img
       fixed={githubAvatar}
       alt={`Github`}
     />
     )}
     </a>
     &nbsp;&nbsp;
     <a href="https://www.twitter.com/n0shake/">
     {twitterAvatar && (
     <Img
       fixed={twitterAvatar}
       alt={`Twitter`}
     />
     )}
     </a>
   </footer>
  )
}

export default Footer

