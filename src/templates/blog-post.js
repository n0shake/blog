import React from "react"
import { graphql } from "gatsby"

import Footer from "../components/footer"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'

const DateContainer = styled.p` 
 color: #a7a7a7;
`

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  let totalTimeToRead

  if (post.timeToRead === 1) {
    totalTimeToRead = post.timeToRead + " min"
  } else {
    totalTimeToRead = post.timeToRead + " mins"
  }

  return (
    <Layout location={location} title={siteTitle} navigation="/writing">
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
        </header>
        <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
        </ul>
        <div>
          <DateContainer>{post.frontmatter.date}
          &nbsp;
          <span>&#183;</span>
          &nbsp;
          {totalTimeToRead}
          </DateContainer>
        </div>  
      </nav>
        <section
          className="article-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
      </article>

      <Footer />
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
        description
      }
      timeToRead
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
