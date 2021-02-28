import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

const RoundedDiv = styled.div` 
 background-color: #f5f7f9;
 border: none;
 color: black;
 padding: 10px;
 margin-right: 10px;
 text-align: center;
 text-decoration: none;
 display: inline-block;
 font-size: 16px;
 border-radius: 8px;
 transition: 0.2s;
 &:hover {
 	background-color: #ede4e0;
 }
`
const NavigationBarDiv = styled.div`
 padding-bottom: 20px;
 background-color: #ffffff;
`

const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
`;

const ClockerNavBar = () => {
  const sidebarButtons = {"faq": "/faq", "privacy": "/privacy-policy-for-clocker", "feedback": "/clockersupport"}
  return (
    <NavigationBarDiv>
    { Object.entries(sidebarButtons).map(([key, value]) => {
       return <StyledLink key={key} to={value}><RoundedDiv key={key}><b>{key}</b></RoundedDiv></StyledLink>
    })}
    </NavigationBarDiv>
  )
}

export default ClockerNavBar