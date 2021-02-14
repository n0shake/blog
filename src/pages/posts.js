import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"
import styled from 'styled-components'

const BottomSpacingHeader = styled.h2` 
 padding-bottom: 20px;
`

const Posts = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata?.title || `Title`
	const posts = data.allMarkdownRemark.nodes

	return (
		<Layout location={location} title={siteTitle}>
		<SEO title="Posts" />
			<div>
				<BottomSpacingHeader> posts </BottomSpacingHeader>
				<ol style={{ listStyle: `none` }}>
        			{posts.map(post => {
          		  const title = post.frontmatter.title || post.fields.slug
          		  const showTag = post.frontmatter.category === "book-review" 
                          ? <span role="img" aria-label="book" className="post-list-category">📚 review</span>
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
                 			<span className="post-list-date"> {post.frontmatter.date} </span>
                 			<span className="post-list-headline">{title} {showTag}</span> 
                		</div>
		               </Link>
		             </article>
		            </li>
		          )
		        })}
		      </ol>
		      <Footer />
			</div>
		</Layout>
	)

}

export default Posts

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMM-DD-YY")
          title
          description
          category
        }
      }
    }
  }
`