import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Reading = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata?.title || `Title`
	return (
		<Layout location={location} title={siteTitle}>
        	<SEO title="Reading" />
        	<h1> Reading </h1>
		</Layout>
	)
}

export default Reading

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`