import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Clocker = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata?.title || `Title`
	return (
		<Layout location={location} title={siteTitle}>
        	<SEO title="Clocker" />
        	<h1> Clocker </h1>
		</Layout>
	)
}

export default Clocker

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`