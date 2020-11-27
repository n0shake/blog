import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const Clocker = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata?.title || `Title`
  const clockerSplashImage = data?.clockerSplashImage?.childImageSharp?.fixed

	return (
		<Layout location={location} title={siteTitle}>
      <SEO title="Clocker" />
        <div className="subpage">
        	<h1> clocker for macOS </h1>
          <hr/>
          <p> 
            Picture the cleanest, distraction free world clock integrated right in your status bar allowing you to quickly check up on your colleagues/friends/family in different time zones. That’s what you get with Clocker. 
          </p>
		      {clockerSplashImage && (
            <Img
            fixed={clockerSplashImage}
            alt={`Clocker`}
          />)}
          <h5>Few Links: </h5>
          <li> Get Clocker <a href="https://itunes.apple.com/us/app/clocker-menubar-world-clock/id1056643111?ls=1&mt=12">here.</a> </li>
          <li> You can find a detailed review <a href="https://www.podfeet.com/blog/2020/07/clocker/">here</a> and a slightly older review <a href="https://lifehacker.com/clocker-crams-a-world-clock-into-your-menu-bar-1794709422">here</a>. </li>
          <li> If you have feedback or suggestions, please leave them <Link to="/clockersupport">here</Link>.</li>
          <li> Read our Privacy Policy <Link to="/privacy">here.</Link></li>
        <br/>
      </div>   
    </Layout>
	)
}

export default Clocker

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    clockerSplashImage: file(absolutePath: { regex: "/clocker.png/" }) {
      childImageSharp {
        fixed(width: 600, height: 375, quality: 95) {
         ...GatsbyImageSharpFixed
        }
      }
    }
  }
`