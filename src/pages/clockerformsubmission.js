import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ClockerFormSubmission = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata?.title || `Title`
	return (
		<Layout location={location} title={siteTitle} navigation="/clocker">
        	<SEO title="Form Submission" />
        	<h1> Message Sent! </h1>
          <Link to="/"><p>Head home? </p></Link>
		</Layout>
	)
}

export default ClockerFormSubmission

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`