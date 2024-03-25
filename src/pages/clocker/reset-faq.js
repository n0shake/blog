import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const ResetFAQ = ({ data, location }) => {
	const siteTitle = 'faq'
	return (
		<Layout location={location} title={siteTitle} navigation="/clocker/faq">
		<SEO title="Clocker FAQ" />
			<div>
				<h1> Reset Clocker? </h1>
				<p> 
				Occasionally, Clocker may enter a glitchy state. In such instances, your best course of action would be to reset it. 
				Resetting entails re-adding your timezones and adjusting toggle settings according to your preferences.
				Here how you can reset Clocker:
				</p>
				<p>
				<ul>
				 <li> Make sure Clocker is closed (force quit through Activity Monitor if necessary) </li>
				 <li> Open up the Terminal app and type in the command: <b>defaults delete com.abhishek.Clocker<b> </li>
				 <li> Hit the return key </li>
				 <li> Restart Clocker </li>
				</ul>
				</p>
			</div>
		</Layout>
	)
}

export default ResetFAQ