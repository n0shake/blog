import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'

const TextContainer = styled.textarea`
 width: 400px;
 height: 75px; 
 max-height: 150px;
 max-width: 400px;
`
const RoundedDiv = styled.div` 
 background-color: white;
 border: none;
 color: black;
 padding-right: 40px;
 padding-bottom: 20px;
 padding-left: 15px;
 text-align: left;
 text-decoration: none;
 display: inline-block;
 border-radius: 8px;
`
const FieldName = styled.p` 
  margin-bottom: 1px;
  margin-top: 15px;
`

const ClockerSupport = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata?.title || `Title`
	return (
		<Layout location={location} title={siteTitle}>
        	<SEO title="Clocker Support" />
        	<h1> clocker support </h1>
          <hr/>
          <p> Clocker is developed and maintained with <span role="img" aria-label="love">❤️</span> by a single dev. 
            There is no big company or VC backed investors here.
            For faster responses, please use the in-app feedback window 
            by navigating to <b>Preferences</b> -> <b>About</b> tab and clicking on the <b>Report Issue</b> button.
          </p>
          <RoundedDiv>
          <form 
            name="clocker-feedback" 
            action="clockerformsubmission">
            <h3> your feedback/suggestion </h3>
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
            <button><b>Submit</b></button>
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