import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
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
	  instagramAvatar: file(absolutePath: { regex: "/ig.png/" }) {
	    childImageSharp {
	      fixed(width: 32, height: 32, quality: 95) {
	        ...GatsbyImageSharpFixed
	      }
	    }
	  }
	}
  `)

  const linkedInAvatar = data?.linkedInAvatar?.childImageSharp?.fixed
  const igImage = data?.instagramAvatar?.childImageSharp?.fixed
  const twitterAvatar = data?.twitterAvatar?.childImageSharp?.fixed

  return (
     <footer>
     <h5>Elsewhere on the www,</h5>
     <Link to="https://www.linkedin.com/in/abhishekbanthia/">
     {linkedInAvatar && (
      <Img
       fixed={linkedInAvatar}
       alt={`Linkedin`}
     />
     )}
     </Link>
     &nbsp;&nbsp;
     <Link to="https://www.twitter.com/n0shake/">
     {twitterAvatar && (
     <Img
       fixed={twitterAvatar}
       alt={`Twitter`}
     />
     )}
     </Link>
     &nbsp;&nbsp;
     <Link to="https://www.instagram.com/n0shake/">
     {igImage && (
     <Img
       fixed={igImage}
       alt={`Instagram`}
     />
     )}
     </Link>
   </footer>
  )
}

export default Footer

