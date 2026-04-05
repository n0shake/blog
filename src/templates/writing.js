import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'

const PaginationNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`

const Writing = ({ data, location, pageContext }) => {
	const siteTitle = `👋`
  const posts = data.allMarkdownRemark.nodes
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1
    ? '/writing'
    : `/writing/${currentPage - 1}`
  const nextPage = `/writing/${currentPage + 1}`

	return (
		<Layout location={location} title={siteTitle} navigation="/">
        	<SEO title="Writing" />
          <h1> writing </h1>
          <hr/><br/>
          <div className="grid-child-main">
            <ol style={{ listStyle: `none` }}>
              {posts.map(post => {
                const title = post.frontmatter.title || post.fields.slug
                const showTag = post.frontmatter.category === "book-review"
                                ? <span role="img" aria-label="book" className="post-list-category">📚review</span>
                                : ""
                return (
                  <li key={post.fields.slug}>
                    <article
                      className="post-list-item"
                      itemScope
                      itemType="http://schema.org/Article"
                    >
                     <Link className="card-class" to={post.fields.slug} itemProp="url">
                      <div className="post-list-div">
                       <span className="post-list-date">{post.frontmatter.date} </span>
                       <span className="post-list-headline">{title} {showTag} </span>
                      </div>
                     </Link>
                    </article>
                  </li>
                )
              })}
            </ol>
            <PaginationNav>
              {!isFirst ? (
                <Link to={prevPage} rel="prev">
                  &larr; newer
                </Link>
              ) : <span />}
              {!isLast ? (
                <Link to={nextPage} rel="next">
                  older &rarr;
                </Link>
              ) : <span />}
            </PaginationNav>
        </div>
		</Layout>
	)
}

export default Writing

export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { show: { eq: 1 } } }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        excerpt(truncate: false)
        fields {
          slug
        }
        frontmatter {
          date(formatString:"YYYY")
          title
          description
          category
          show
        }
      }
    }
  }
`
