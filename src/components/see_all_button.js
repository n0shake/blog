import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

const RoundedDiv = styled.div` 
 background-color: white;
 border: none;
 color: black;
 padding: 10px;
 text-align: center;
 text-decoration: none;
 display: inline-block;
 font-size: 16px;
 margin: 0px 0px;
 border-radius: 8px;
`

const SeeAllButton = () => {
  // Set these values by editing "siteMetadata" in gatsby-config.js
  const buttonTitle = "See More Posts"

  return (
    <div className="see_all">
    <Link to="/posts">
    <RoundedDiv><b>{buttonTitle}</b></RoundedDiv>
      </Link>
    </div>
  )
}

export default SeeAllButton
