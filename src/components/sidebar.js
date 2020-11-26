import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

const RoundedDiv = styled.div` 
 background-color: white;
 border: none;
 color: black;
 padding: 10px;
 margin-right: 10px;
 text-align: center;
 text-decoration: none;
 display: inline-block;
 font-size: 16px;
 border-radius: 8px;
`

const SidebarDiv = styled.div`
 padding-top: 30px;
`

const Sidebar = () => {
  const sidebarButtons = {"Clocker": "/clocker", "Projects": "/projects", "Reading": "/reading"}
  return (
    <SidebarDiv>
    { Object.entries(sidebarButtons).map(([key, value]) => {
       return <Link to={value}><RoundedDiv key={key}><b>{key}</b></RoundedDiv></Link>
    })}
    </SidebarDiv>
  )
}

export default Sidebar