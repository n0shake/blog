import React from "react"
import { graphql } from "gatsby"

import ClockerLayout from "../components/clocker-layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

import styled from 'styled-components'

const StyledHeader5 = styled.h5`
  margin-top: 2rem;
  margin-bottom: 2rem;
`
const StyledParagraph = styled.p`
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`

const StyledHeader3 = styled.h3`
  font-size: 42px;
  text-align: center;
`

const CenteredRoundedDiv = styled.div` 
 background-color: #f5f7f9;
 border: none;
 color: black;
 padding: 10px;
 margin: auto;
 text-align: center;
 text-decoration: none;
 width: 25%;
 font-size: 16px;
 font-weight: bold;
 border-radius: 8px;
 transition: 0.2s;
 &:hover {
  background-color: #ede4e0;
 }
`

const NoUnderlineAnchor = styled.a`
  text-decoration: none;
`

const Clocker = ({ data, location }) => {
  const clockerSplashImage = data?.clockerSplashImage?.childImageSharp?.fluid
  const clockerIcon = data.clockerIconImage?.childImageSharp?.fixed

  console.log(clockerIcon)

	return (
		<ClockerLayout navigation="/clocker" splashImage={clockerIcon}>
      <SEO title="Clocker" />
        <div className="subpage">
          <br/>
          <StyledHeader3> Keep track of your friends & colleagues 
          from your menubar
          </StyledHeader3>
          <StyledParagraph>
          Distraction free way to check-up on time and your upcoming meetings.
          </StyledParagraph>
          <NoUnderlineAnchor href='https://apps.apple.com/us/app/clocker/id1056643111?mt=12'><CenteredRoundedDiv> Download > </CenteredRoundedDiv></NoUnderlineAnchor>
          <br/><br/>
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
          <StyledHeader5>Few Links</StyledHeader5>
          <li> Clocker is available as a Home Brew cask. See our <a className="styled-link" href="https://github.com/n0shake/Clocker">repo</a> for more details.</li>
          <li> You can find a detailed review <a className="styled-link" href="https://www.podfeet.com/blog/2020/07/clocker/">here</a> and a slightly older review <a className="styled-link" href="https://lifehacker.com/clocker-crams-a-world-clock-into-your-menu-bar-1794709422">here</a>. </li>
        <br/>
      </div>   
    </ClockerLayout>
	)
}

export default Clocker

export const pageQuery = graphql`
  query {
    clockerSplashImage: file(absolutePath: { regex: "/clocker.png/" }) {
      childImageSharp {
        fluid(quality: 95) {
         ...GatsbyImageSharpFluid
        }
      }
    }
    clockerIconImage: file(absolutePath: { regex: "/icon.png/" }) {
      childImageSharp {
        fixed(width: 40, height: 40, quality: 95) {
         ...GatsbyImageSharpFixed
        }
      }
    }
  }
`