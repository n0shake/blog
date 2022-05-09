import React from "react"
import styled from 'styled-components'

const StyledTitle = styled.h3`
  font-size: 42px;
  text-align: center;
`

const StyledSubtitle = styled.p`
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`

const ClockerStyledHeader = ({ title, subtitle}) => {
  return (
    <div>
	<StyledTitle> {title} </StyledTitle>
     <StyledSubtitle> {subtitle} </StyledSubtitle>
    </div>
  )
}

export default ClockerStyledHeader