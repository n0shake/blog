import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NavBar from "../components/navbar"


const BlogIndex = ({ data, location }) => {
  const newSiteTitle = "👋"

  return (
    <Layout location={location} title={newSiteTitle}>
      <SEO title="Abhishek" />
      <Bio />
      <div className="grid-child-navbar">
        <NavBar />
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
