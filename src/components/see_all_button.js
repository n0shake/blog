import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

const RoundedDiv = styled.div` 
 background-color: #f5f7f9;
 border: none;
 color: black;
 padding: 10px;
 text-align: center;
 text-decoration: none;
 display: inline-block;
 font-size: 16px;
 margin: 0px 0px;
 border-radius: 8px;
 transition: 0.2s;
 &:hover {
 	background-color: #ede4e0;
 }
`

const SeeAllButton = () => {
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
