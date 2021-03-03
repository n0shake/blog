import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import addGIF from '../../../content/assets/add.gif'

const AddFaq = ({ data, location }) => {
	const siteTitle = 'faq'
	return (
		<Layout location={location} title={siteTitle} navigation="/clocker/faq">
		<SEO title="Clocker FAQ" />
			<div>
				<h1> Adding New Timezones </h1>
				<p> For adding new time zones or cities, you should navigate to Preferences by opening the Clocker window and clicking on the gear icon (or through the Command + , keyboard shortcut). 
				This is where you can add, delete and edit your time zones. </p>
				<br/>
 				<img className="educational" src={addGIF} alt="Clocker - How to add a timezone?" />
			</div>
		</Layout>
	)
}

export default AddFaq