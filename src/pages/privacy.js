import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'

const BulletPoint = styled.li` 
 padding: 5px 0px;
`

const OuterBulletPoint = styled.ul`
 line-height: 2px;
`

const PrivacyPolicy = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata?.title || `Title`
	return (
		<Layout location={location} title={siteTitle}>
        	<SEO title="Clocker Privacy Policy" />
			<div>
				<h1> privacy </h1>
				<p>This policy applies to all information collected or submitted on Clocker’s app for macOS and any other devices and platforms.</p>
				<h3>Information we collect</h3>
				<p>You may optionally add an email address during the Clocker onboarding process.
				Email addresses are only used for help with important updates, help with translating the app to different languages,
				responding to emails that you initiate, and sending notifications that you request.
				You can email at abhishekbanthia @ me dot com to erase the email from our databases.</p>
				<p> We collect anonymous statistics about the following to help inform our future features and improve the app:
				</p>
				<OuterBulletPoint>
					<BulletPoint> Clocker’s menubar mode </BulletPoint>
					<BulletPoint> Upcoming Event View’s Presence in the Panel </BulletPoint>
					<BulletPoint> Number of locations displayed in the Panel </BulletPoint>
					<BulletPoint> Future Time Slider’s Presence in the Panel </BulletPoint>
					<BulletPoint> Seconds Preference </BulletPoint>
					<BulletPoint> Time Format Preference </BulletPoint>
					<BulletPoint> Calendar Access Status </BulletPoint>
					<BulletPoint> Reminders Access Status </BulletPoint>
					<BulletPoint> Sunrise/Sunset Preference </BulletPoint>
					<BulletPoint> Theme Preference </BulletPoint>
					<BulletPoint> Country </BulletPoint>
					<BulletPoint> When system timezone changes </BulletPoint>
					<BulletPoint> Apple Script Execution Errors while interacting with the Reminders app </BulletPoint>
					<BulletPoint> Button Click Events</BulletPoint>
				</OuterBulletPoint>
				<h3>Information usage</h3>
				<p> We use the information we collect to operate and improve our app, website, and customer support. </p>
				<p> We do not share personal information with outside parties except to the extent necessary to accomplish Clocker’s functionality. We may share anonymous, aggregate statistics with outside parties, such as while adding a timezone. </p>
				<p> We may disclose your information in response to subpoenas, court orders, or other legal requirements; to exercise our legal rights or defend against legal claims; to investigate, prevent, or take action regarding illegal activities, suspected fraud or abuse, violations of our policies; or to protect our rights and property. </p>
				<h3> CalOPPA Compliance </h3>
				<p>  We comply with the California Online Privacy Protection Act. We therefore will not distribute your personal information to outside parties without your consent. </p>
				<h3> Information for European Union Users </h3>
				<p> By using Clocker and providing your information, you authorize us to collect, use, and store your information outside of the European Union. </p>
				<h3> International Transfers of Information </h3>
				<p> Information may be processed, stored, and used outside of the country in which you are located. Data privacy laws vary across jurisdictions, and different laws may be applicable to your data depending on where it is processed, stored, or used </p>
				<h3> Your Consent </h3>
 				<p> By using our app, you consent to our privacy policy. </p>
 				<h3> Contacting Us </h3>
 				<p> If you have questions regarding this privacy policy, you may email at me@abhishekbanthia.com. </p>
 				<h3> Changes to this policy </h3>
 				<p> If we decide to change our privacy policy, we will post those changes on this page.</p>
			</div>
		</Layout>
	)
}

export default PrivacyPolicy

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`