import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import customize1 from '../../../content/assets/customize1.png'
import customize2 from '../../../content/assets/customize2.png'

const CustomizeFormatFaq = ({ data, location }) => {
	const siteTitle = 'faq'
	return (
		<Layout location={location} title={siteTitle} navigation="/clocker/faq">
		<SEO title="Clocker FAQ" />
			<div>
				<h1> Customizing Time Format </h1>
				<p> You can set the time-format for your locations through Clocker Preferences. You should navigate to Clocker Preferences by clicking the menubar icon and tapping on the gear button 
				in the lower-left corner of the Clocker Window. Preferences can also be accessed using the keyboard shortcut: <b>Command + ,</b> </p>
				<p> Here, you need to go to the <b>Appearance</b> tab where you can select the time format of your choice.</p>
				<br/>
 				<img className="educational" src={customize1} alt="Clocker - Customize Time Format" />
 				<blockquote> Do remember that the time format selected in the Appearance tab is applied to all locations and timezones.</blockquote>
 				<p> Clocker also allows you to override the timezone format at the individual location level. </p>
 				<p> To do so, you need to open the Clocker window and tap the three dots button which appears on the left side of each timezone. This is where you can customize and choose a different timezone format.</p>
 				<img className="educational" src={customize2} alt="Clocker - Customize Time Format" />
			</div>
		</Layout>
	)
}

export default CustomizeFormatFaq