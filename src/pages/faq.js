import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Faq = ({ data, location }) => {
	const siteTitle = 'clocker'
	return (
		<Layout location={location} title={siteTitle} navigation="/clocker">
		<SEO title="Clocker Privacy Policy" />
			<div>
				<h1> faq </h1>
			</div>
		</Layout>
	)
}

export default Faq