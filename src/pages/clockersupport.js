import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'

const TextContainer = styled.textarea`
 @media screen and (max-width: 400px) {
    width: 250px;
 }
 width: 400px;
 height: 75px; 
 max-height: 150px;
 max-width: 400px;
`
const RoundedDiv = styled.div` 
 background-color: white;
 border: none;
 color: black;
 text-align: left;
 text-decoration: none;
 display: inline-block;
 border-radius: 8px;
 @media screen and (max-width: 700px) {
    padding: 5px;
 }
 padding-right: 40px;
 padding-bottom: 20px;
 padding-left: 15px;
`
const FieldName = styled.p` 
  margin-bottom: 1px;
  margin-top: 15px;
`

const ClockerSupport = ({ data, location }) => {
	const siteTitle = 'clocker'
	return (
		<Layout location={location} title={siteTitle} navigation="/clocker">
        	<SEO title="Clocker Support" />
        	<h1> clocker support </h1>
          <hr/>
          <p> Clocker is developed and maintained with <span role="img" aria-label="love">❤️</span> by a single dev. 
            There is no big company or VC backed investors here.
            For faster responses, please use the in-app feedback window 
            by navigating to <b>Preferences</b> -> <b>About</b> tab and clicking on the <b>Report Issue</b> button.
          </p>
          <RoundedDiv>
          <form name="clocker-feedback" method="post" data-netlifly="true" action="/clockerformsubmission">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="clocker-feedback" />
            <h3> your feedback </h3>
            <FieldName><b>Name*</b></FieldName>
            <input name="name" type="text" />
            <FieldName><b>Email*</b></FieldName>
            <input name="email" type="email" />
            <FieldName><b>Type</b></FieldName>
            <select name="type">
              <option value="Suggestion">Suggestion</option>
              <option value="Bug">Bug</option>
            </select>
            <FieldName><b>Comment*</b></FieldName>
            <TextContainer name="feedback" /><br/><br/>
            <input type="Submit"></input>
          </form>
          </RoundedDiv>
		</Layout>
	)
}

export default ClockerSupport

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`