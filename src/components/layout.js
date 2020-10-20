import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Layout = ({ location, title, children }) => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      avatar: file(absolutePath: { regex: "/linkedin.png/" }) {
        childImageSharp {
          fixed(width: 60, height: 60, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      instagramAvatar: file(absolutePath: { regex: "/ig.png/" }) {
        childImageSharp {
          fixed(width: 60, height: 60, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)


  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const avatar = data?.avatar?.childImageSharp?.fixed
  const igImage = data?.instagramAvatar?.childImageSharp?.fixed

  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        <h3>Elsewhere on the www,</h3>
        <a href="https://www.linkedin.com/in/abhishekbanthia/">
        {avatar && (
        <Img
          fixed={avatar}
          alt={`Abhishek`}
          className="bio-avatar"
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
        )}
        </a>
        <a href="https://www.instagram.com/n0shake/">
        {igImage && (
        <Img
          fixed={igImage}
          alt={`Abhishek`}
          className="bio-avatar"
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
        )}
        </a>
      </footer>
    </div>
  )
}

export default Layout
