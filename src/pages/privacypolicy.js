import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"

const PrivacyPolicy = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata?.title || `Title`
	return (
		<Layout location={location} title={siteTitle}>
        	<SEO title="Clocker-Privacy-Policy" />
			<div>
				<h1> Privacy Policy </h1>
				<p>This policy applies to all information collected or submitted on Clocker’s app for macOS and any other devices and platforms.</p>
				<h2>Information we collect</h2>
				<p>You may optionally add an email address during the Clocker onboarding process.
				Email addresses are only used for help with important updates, help with translating the app to different languages,
				responding to emails that you initiate, and sending notifications that you request.
				You can email at abhishekbanthia @ me dot com to erase the email from our databases.</p>
				<p> We collect anonymous statistics about the following to help inform our future features and improve the app:
				</p>
				<ul>
					<li> Clocker’s menubar mode </li>
					<li> Upcoming Event View’s Presence in the Panel </li>
					<li> Number of locations displayed in the Panel </li>
					<li> Future Time Slider’s Presence in the Panel </li>
					<li> Seconds Preference </li>
					<li> Time Format Preference </li>
					<li> Calendar Access Status </li>
					<li> Reminders Access Status </li>
					<li> Sunrise/Sunset Preference </li>
					<li> Theme Preference </li>
					<li> Country </li>
					<li> When system timezone changes </li>
					<li> Apple Script Execution Errors while interacting with the Reminders app </li>
					<li> Button click events for sharing app, opening GitHub link, reporting an issue, opening App Store for review and opening Twitter </li>
				</ul>
				<h2>Information usage</h2>
				<p> We use the information we collect to operate and improve our app, website, and customer support. </p>
				<p> We do not share personal information with outside parties except to the extent necessary to accomplish Clocker’s functionality. We may share anonymous, aggregate statistics with outside parties, such as while adding a timezone. </p>
				<p> We may disclose your information in response to subpoenas, court orders, or other legal requirements; to exercise our legal rights or defend against legal claims; to investigate, prevent, or take action regarding illegal activities, suspected fraud or abuse, violations of our policies; or to protect our rights and property. </p>
				<h2> CalOPPA Compliance </h2>
				<p>  We comply with the California Online Privacy Protection Act. We therefore will not distribute your personal information to outside parties without your consent. </p>
				<h2> Information for European Union Users </h2>
				<p> By using Clocker and providing your information, you authorize us to collect, use, and store your information outside of the European Union. </p>
				<h2> International Transfers of Information </h2>
				<p> Information may be processed, stored, and used outside of the country in which you are located. Data privacy laws vary across jurisdictions, and different laws may be applicable to your data depending on where it is processed, stored, or used </p>
				<h2> Your Consent </h2>
 				<p> By using our app, you consent to our privacy policy. </p>
 				<h2> Contacting Us </h2>
 				<p> If you have questions regarding this privacy policy, you may email at me@abhishekbanthia.com. </p>
 				<h2> Changes to this policy </h2>
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