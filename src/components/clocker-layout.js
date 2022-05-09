import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'
import ClockerNavBar from "../components/clocker-navbar"

const VerticalCenteredParentDiv = styled.div`
  display: flex;
  align-items:center;
`

const ClockerLayout = ({ splashImage, children, navigation }) => {
  const header = (
      <Link className="header-link-home" to={navigation}>
      <VerticalCenteredParentDiv>
        {splashImage && (
          <Img
            fixed={splashImage}
            alt={`Clocker`}
        />)} 
      <span>&nbsp;clocker for macOS</span>
      <hr/>
      <ClockerNavBar/>
      </VerticalCenteredParentDiv>
      </Link>
    )

  return (
    <div className="clocker-wrapper">
      <header className="global-header">{header}</header>
      <main>{children}</main>
    </div>
  )
}

export default ClockerLayout
