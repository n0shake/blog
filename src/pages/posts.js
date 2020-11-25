import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Posts = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata?.title || `Title`
	const posts = data.allMarkdownRemark.nodes

	return (
		<Layout location={location} title={siteTitle}>
		<SEO title="Clocker-Privacy-Policy" />
			<div>
				<h2> Posts </h2>
				<ol style={{ listStyle: `none` }}>
        			{posts.map(post => {
          		  const title = post.frontmatter.title || post.fields.slug
		          return (
		            <li key={post.fields.slug}>
		              <article
		                className="post-list-item"
		                itemScope
		                itemType="http://schema.org/Article"
		              >
		                <header>
		                  <h2>
		                    <Link to={post.fields.slug} itemProp="url">
		                      <span itemProp="headline">{title}</span>
		                    </Link>
		                  </h2>
		                </header>
		                <section>
		                  <p
		                  	className="post-list-excerpt"
		                    dangerouslySetInnerHTML={{
		                      __html: post.excerpt,
		                    }}
		                    itemProp="description"
		                  />
		                </section>
		              </article>
		            </li>
		          )
		        })}
		      </ol>
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
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`