import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ClockerSupport = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata?.title || `Title`
	return (
		<Layout location={location} title={siteTitle}>
        	<SEO title="Clocker Support" />
        	<h1> Clocker Support </h1>
		</Layout>
	)
}

export default ClockerSupport

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`