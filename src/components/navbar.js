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

const SidebarDiv = styled.div`
 padding-top: 20px;
 padding-bottom: 20px;
`

const NavBar = () => {
  const sidebarButtons = {"clocker": "/clocker", "projects": "/projects", "writing": "/writing"}
  return (
    <SidebarDiv>
    { Object.entries(sidebarButtons).map(([key, value]) => {
       return <Link key={key} to={value}><RoundedDiv key={key}><b>{key}</b></RoundedDiv></Link>
    })}
    </SidebarDiv>
  )
}

export default NavBar