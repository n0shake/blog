import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import styled from 'styled-components'

const GridContainer = styled.div` 
 display: grid;
 grid-template-columns: auto auto auto auto;
`
const GridItem = styled.div`
 padding: 15px;
 padding-left: 0px;
`

const Reading = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata?.title || `Title`
  const allBooks = data.allGoodreadsShelf?.nodes.reduce((element1, element2) => {
    return element1.reviews.concat(element2.reviews)
  })

  const sortedAllBooks = allBooks.sort((one, two) => (one.readAt < two.readAt ? -1 : 1));
  console.log(sortedAllBooks)

	return (
		<Layout location={location} title={siteTitle}>
        	<SEO title="Reading" />
        	<h1> reading </h1>
          <p> Keeping a track of books that I've read: </p>
            <GridContainer>
            {allBooks && allBooks.map(review => {
              return (
               <GridItem>
               {review.book.localFile?.childImageSharp?.fluid && (
                  <Img
                  fluid={review.book.localFile?.childImageSharp?.fluid}
                  alt={review.book.title}
                  />
              )}
              <div className="read-book">
                <a href={review.link}>
                 {review.book.title}
                </a>
              </div>
              </GridItem>
            )})}
            </GridContainer>
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
    allGoodreadsShelf(
      filter: {name: { in: ["currently-reading", "read"] } }
      sort: { order: DESC, fields: reviews___read_at }
      ) {
      nodes {
        reviews {
          id
          link
          book {
            title
            localFile {
              childImageSharp {
                fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}
`