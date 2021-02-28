import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Faq = ({ data, location }) => {
	const siteTitle = 'clocker'
	return (
		<Layout location={location} title={siteTitle} navigation="/clocker">
		</Layout>
	)
}

export default Faq