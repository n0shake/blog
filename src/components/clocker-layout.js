import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'
import ClockerNavBar from "../components/clocker-navbar"

const VerticalCenteredParentDiv = styled.div`
  display: flex;
  align-items:center;
`

const ParentDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

const RightAlignedDiv = styled.div`
  justify-content: flex-end;
`

const ClockerLayout = ({ splashImage, children, navigation }) => {
  const header = (
      <Link className="header-link-home" to={navigation}>
      <ParentDiv>
      <VerticalCenteredParentDiv>
        {splashImage && (
          <Img
            fixed={splashImage}
            alt={`Clocker`}
        />)} 
      <div>&nbsp;clocker</div>
      </VerticalCenteredParentDiv>
      <ClockerNavBar/>
      </ParentDiv>
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
