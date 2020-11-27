import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Reading = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata?.title || `Title`
  const readBooks = data.goodreadsShelf.reviews

	return (
		<Layout location={location} title={siteTitle}>
        	<SEO title="Reading" />
        	<h1> reading </h1>
          <p> Keeping a track of books that I've read: </p>
          <ol style={{ listStyle: `none` }}>
            {readBooks.map(book => {
              return (
               <div className="read-book">
               <a href={book.link}>
              <li key={book.book.id}> 
               {book.book.title}
              </li>
              </a>
              </div>
            )})}
          </ol>
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
    goodreadsShelf {
      reviews {
        id
        link
        book {
          title
          image_url
        }
      }
    }
  }
`