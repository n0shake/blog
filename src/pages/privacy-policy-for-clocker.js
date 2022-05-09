import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'

const HighlightBlockQuote = styled.blockquote`
  background: var(--color-blockquote);
  padding: 8px 16px 8px;
  margin-left: 0px;
  border-radius: 8px;
  font-size: var(--fontSize-1);
`

const PrivacyPolicy = ({ data, location }) => {
	const siteTitle = 'clocker'
	return (
		<Layout location={location} title={siteTitle} navigation="/clocker">
        	<SEO title="Clocker Privacy Policy" />
			<div>
				<h1> privacy </h1>
				<p><b><i> Last Update: May 2022. </i></b></p>
				<HighlightBlockQuote> Clocker only captures diagnostics (stack-traces for crashes & related meta-data) and your preferences when you submit in-app feedback. </HighlightBlockQuote>
				<p>This policy applies to all information collected or submitted on Clocker’s app for macOS and any other devices and platforms.</p>
				<h3>Information we collect</h3>
				<p> If you encounter a crash while using Clocker, the stack-trace, device-state information, unique device identifiers can be collected by <a href='https://firebase.google.com/products/crashlytics'>Crashlytics</a>. See their privacy policy <a href="https://firebase.google.com/support/privacy">here</a>.</p>
				<p>You may optionally send feedback including your email address through the in-app support window.
				Email addresses are only used to reply to your feedback and nothing else. 
				Your preferences (selected timezones, theme, display preferences etc.) are also sent along with your feedback for better issue reproducibility. 
				Email ids, associated feedback & preferences may be deleted periodically or after the feedback is addressed.
				If you've sent feedback previously, you can email us <a href="mailto:abhishekbanthia@me.com">here</a> to erase the email / preferences from our databases. </p>
				<h3>Information usage</h3>
				<p> We use the information we collect to operate and improve our app, website, and customer support. </p>
				<p> We do not share personal information with outside parties except to the extent necessary to accomplish Clocker’s functionality. </p>
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
 				<p> If you have questions regarding this privacy policy, you may email us <a href="mailto:abhishekbanthia@me.com">here</a>. </p>
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