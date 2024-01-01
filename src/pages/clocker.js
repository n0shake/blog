import React from "react"
import { graphql } from "gatsby"

import ClockerLayout from "../components/clocker-layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import ClockerStyledHeader from "../components/clocker-styled-header"
import ClockerCards from "../components/clocker-cards"
import ClockerLeftFeatureCard from "../components/clocker-left-feature-card"
import ClockerRightFeatureCard from "../components/clocker-right-feature-card"

import styled from 'styled-components'

const CenteredRoundedDiv = styled.div` 
 background-color: #f5f7f9;
 border: none;
 color: black;
 padding: 10px;
 margin: auto;
 text-align: center;
 text-decoration: none;
 font-size: 16px;
 font-weight: bold;
 border-radius: 8px;
 transition: 0.2s;
 &:hover {
  background-color: #ede4e0;
 }
 width: 150px;
`

const NoUnderlineAnchor = styled.a`
  text-decoration: none;
`

const Clocker = ({ data, location }) => {
  const clockerSplashImage = data?.clockerSplashImage?.childImageSharp?.fluid
  const clockerIcon = data.clockerIconImage?.childImageSharp?.fixed
  const clockerFeature1 = data.clockerFeature1?.childImageSharp?.fluid
  const clockerFeature2 = data.clockerFeature2?.childImageSharp?.fluid
  const clockerFeature3 = data.clockerFeature3?.childImageSharp?.fluid
  const clockerAwardImage = data.clockerAwardImage?.childImageSharp?.fluid
  const clockerFeature1Subtitle = `Clocker is perfect for showing just the UTC timezone in your menubar or tracking your team of 10 spread across the world.
                                   Advanced customization options allows you to customize the time-format, personalize the label, add a note and much more.`
  const clockerFeature2Subtitle = `Integrated with Apple's calendar, Clocker can quickly show your upcoming meeting details. See your schedule for today and tomorrow through the panel.
                                   Events with Zoom™️ invites automatically show a button in the panel so you can quickly join your next 1-1 without opening a bunch of apps.`
  const clockerFeature3Subtitle = `With the Time Scroller, you can now easily answer questions like "What time will it be in London when it's 7 PM locally?". Plan your meetings with colleagues or family around the world without doing any mental math.`

	return (
		<ClockerLayout navigation="/clocker" splashImage={clockerIcon}>
      <SEO title="Clocker" />
        <div className="subpage">
          <br/>
          <ClockerStyledHeader title="Time zones made simpler!" subtitle="Distraction free way to check-up on world times and your upcoming meetings." />
          {clockerAwardImage && (
            <Img
            fluid={clockerAwardImage}
            alt={`Editor's Choice Award from Mac App Store`}
          />)}
          <NoUnderlineAnchor href='https://apps.apple.com/us/app/clocker/id1056643111?mt=12'><CenteredRoundedDiv> Download > </CenteredRoundedDiv></NoUnderlineAnchor>
          <br/><br/>
		      {clockerSplashImage && (
            <Img
            fluid={clockerSplashImage}
            alt={`Clocker`}
          />)}
          <br/><br/><br/>
          <ClockerStyledHeader title="Works flawlessly out-of-the box" subtitle="Plus tons of customization options." />
          <br/>
          <ClockerCards />
          <br/><br/><br/>
          <ClockerLeftFeatureCard title="Timezones. Your way." subtitle={clockerFeature1Subtitle} image={clockerFeature1} /> <br/><br/><br/><br/>
          <ClockerRightFeatureCard title="Keep up with meetings." subtitle={clockerFeature2Subtitle} image={clockerFeature2} /> <br/><br/><br/><br/>
          <ClockerLeftFeatureCard title="Slide in to the future." subtitle={clockerFeature3Subtitle} image={clockerFeature3} /> <br/><br/><br/><br/>
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
    clockerAwardImage: file(absolutePath: { regex: "/macapp_award.png/" }) {
      childImageSharp {
        fixed(width: 40, height: 40, quality: 95) {
         ...GatsbyImageSharpFixed
        }
      }
    }
    clockerFeature1: file(absolutePath: { regex: "/clocker-feature-1.png/" }) {
      childImageSharp {
        fluid(quality: 95) {
         ...GatsbyImageSharpFluid
        }
      }
    }
    clockerFeature2: file(absolutePath: { regex: "/clocker-feature-2.png/" }) {
      childImageSharp {
        fluid(quality: 95) {
         ...GatsbyImageSharpFluid
        }
      }
    }
    clockerFeature3: file(absolutePath: { regex: "/clocker-feature-3.png/" }) {
      childImageSharp {
        fluid(quality: 95) {
         ...GatsbyImageSharpFluid
        }
      }
    }
  }
`