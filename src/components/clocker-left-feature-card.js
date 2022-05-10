import React from "react"
import styled from 'styled-components'
import Img from "gatsby-image"

const ParentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
`

const StyledTitle = styled.h3`
  font-size: 30px;
  text-align: left;
`

const StyledSubtitle = styled.p`
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: left;
  font-size: 13px;
`

const ImageDiv = styled.div`
  width: 200%;
  vertical-align: middle;
  margin-left: 25px;
`

const ClockerLeftFeatureCard = ({ title, subtitle, image}) => {
  return (
    <ParentDiv>
    <div>
      <StyledTitle>{title}</StyledTitle>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
    </div>
    <ImageDiv>
      {image && (
        <Img
        fluid={image}
        alt={`Clocker Feature`}
      />)}
    </ImageDiv>
    <br/><br/><br/>
    </ParentDiv>

  )
}

export default ClockerLeftFeatureCard