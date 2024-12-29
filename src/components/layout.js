import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Layout = ({ location, title, clockerIcon, children, navigation}) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  console.log("--- Navigation is", navigation)

  if (isRootPath) {
  } else if (location.pathname === '/clocker/' || location.pathname === "/clocker") {
    header = (
      <Link className="header-link-home" to={navigation}>
        {clockerIcon && (
          <Img
            fixed={clockerIcon}
            alt={`Clocker`}
        />)}
      </Link>
    )
  } else {
    header = (
      <Link className="header-link-home" to={navigation}>
        {title.toLowerCase()}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
