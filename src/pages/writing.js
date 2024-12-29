import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Writing = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const vettedPosts = posts.filter(post => post.frontmatter.show === 1);
  const reducedPosts = vettedPosts

	return (
		<Layout location={location} title={siteTitle} navigation="/">
        	<SEO title="Writing" />
          <h1> writing </h1>
          <hr/><br/>
          <div className="grid-child-main">
            <ol style={{ listStyle: `none` }}>
              {reducedPosts.map(post => {
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
        </div>
		</Layout>
	)
}

export default Writing

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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