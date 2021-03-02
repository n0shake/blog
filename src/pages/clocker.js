import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import ClockerNavBar from "../components/clocker-navbar"
import styled from 'styled-components'

const StyledHeader6 = styled.h5`
  margin-top: 2rem;
  margin-bottom: 2rem;
`

const Clocker = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata?.title || `Title`
  const clockerSplashImage = data?.clockerSplashImage?.childImageSharp?.fluid

	return (
		<Layout location={location} title={siteTitle} navigation="/">
      <SEO title="Clocker" />
        <div className="subpage">
        	<h1> clocker for macOS </h1>
          <ClockerNavBar />
		      {clockerSplashImage && (
            <Img
            fluid={clockerSplashImage}
            alt={`Clocker`}
          />)}
          <br/>
          <br/>
          <p> 
            Picture the cleanest, distraction free world clock integrated right in your status bar allowing you to quickly check up on your colleagues/friends/family in different time zones. That’s what you get with Clocker. 
          </p>
          <StyledHeader6>Few Links</StyledHeader6>
          <li> Get Clocker <a className="styled-link" href="https://itunes.apple.com/us/app/clocker-menubar-world-clock/id1056643111?ls=1&mt=12">here.</a> </li>
          <li> You can find a detailed review <a className="styled-link" href="https://www.podfeet.com/blog/2020/07/clocker/">here</a> and a slightly older review <a className="styled-link" href="https://lifehacker.com/clocker-crams-a-world-clock-into-your-menu-bar-1794709422">here</a>. </li>
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
        fluid(quality: 95) {
         ...GatsbyImageSharpFluid
        }
      }
    }
  }
`