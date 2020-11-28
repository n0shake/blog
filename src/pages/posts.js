import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"

const Posts = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata?.title || `Title`
	const posts = data.allMarkdownRemark.nodes

	return (
		<Layout location={location} title={siteTitle}>
		<SEO title="Posts" />
			<div>
				<h2> posts </h2>
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
		                <Link className="card-class" to={post.fields.slug} itemProp="url">
		                <header>
		                  <h2>
		                    <span itemProp="headline">{title}</span>
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
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`