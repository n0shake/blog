import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import customize1 from '../../../content/assets/customize-label.gif'
import customize2 from '../../../content/assets/customize-label-1.png'

const CustomizeFormatFaq = ({ data, location }) => {
	const siteTitle = 'faq'
	return (
		<Layout location={location} title={siteTitle} navigation="/clocker/faq">
		<SEO title="Clocker - How to customzie label FAQ" />
			<div>
				<h1> Customizing Labels </h1>
				<p> Clocker allows you to edit the names of the timezones or locations you've added. This allow you to map a colleague, friend or a partner to a location reducing the need to mentally calculate who's actually in London. </p>
				<br/>
				<p> You can utilize the contextual menu present on left of each row to edit the label:</p>
				<img className="educational" src={customize1} alt="Clocker - Customize Label Demo" />
 				<blockquote> Tip: Use emojis as a label to enhance glanceability.</blockquote> 				
 				<img className="educational" src={customize2} alt="Clocker - Customize Label with Emojis" />
			</div>
		</Layout>
	)
}

export default CustomizeFormatFaq