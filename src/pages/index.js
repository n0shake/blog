import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SeeAllButton from "../components/see_all_button"
import Footer from "../components/footer"
import NavBar from "../components/navbar"
import styled from 'styled-components'


const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const newSiteTitle = "hi there! 👋"
  const posts = data.allMarkdownRemark.nodes
  const reducedPosts = posts.slice(0, 3);

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="Abhishek" />
        <Bio />
        <p>
          No blog posts found.
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={newSiteTitle}>
      <SEO title="Abhishek" />
      <Bio />
      <div class="grid-child-sidebar">
        <NavBar />
      </div>
      <div class="grid-child-main">
      <ol style={{ listStyle: `none` }}>
        {reducedPosts.map(post => {
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
      <SeeAllButton />
      <Footer />
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt(truncate: false)
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true, difference: "hours")
          title
          description
        }
      }
    }
    twitterAvatar: file(absolutePath: { regex: "/twitter.png/" }) {
      childImageSharp {
        fixed(width: 32, height: 32, quality: 95) {
           ...GatsbyImageSharpFixed
        }
      }
    }
    linkedInAvatar: file(absolutePath: { regex: "/linkedin.png/" }) {
      childImageSharp {
          fixed(width: 32, height: 32, quality: 95) {
            ...GatsbyImageSharpFixed
        }
      }
    }
    instagramAvatar: file(absolutePath: { regex: "/ig.png/" }) {
      childImageSharp {
          fixed(width: 32, height: 32, quality: 95) {
            ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
