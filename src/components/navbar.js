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

const SidebarDiv = styled.div`
 padding-top: 20px;
 padding-bottom: 20px;
`

const NavBar = () => {
  const sidebarButtons = {"clocker": "/clocker", "projects": "/projects", "reading": "/reading"}
  return (
    <SidebarDiv>
    { Object.entries(sidebarButtons).map(([key, value]) => {
       return <Link to={value}><RoundedDiv key={key}><b>{key}</b></RoundedDiv></Link>
    })}
    </SidebarDiv>
  )
}

export default NavBar