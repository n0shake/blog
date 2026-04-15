import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

const RoundedDiv = styled.div`
 background-color: var(--color-surface);
 border: none;
 color: var(--color-heading-black);
 padding: 10px;
 margin-right: 10px;
 text-align: center;
 text-decoration: none;
 display: inline-block;
 font-size: 16px;
 border-radius: 8px;
 transition: 0.2s;
 &:hover {
 	background-color: var(--color-hover);
 }
`
const NavigationBarDiv = styled.div`
 background-color: var(--color-background);
`

const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
`;

const ClockerNavBar = () => {
  const sidebarButtons = {"privacy": "/privacy-policy-for-clocker"}
  return (
    <NavigationBarDiv>
    { Object.entries(sidebarButtons).map(([key, value]) => {
       return <StyledLink key={key} to={value}><RoundedDiv key={key}><b>{key}</b></RoundedDiv></StyledLink>
    })}
    </NavigationBarDiv>
  )
}

export default ClockerNavBar