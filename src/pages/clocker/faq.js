import React from "react"

import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
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
 font-weight: bold;
 border-radius: 8px;
 transition: 0.2s;
 &:hover {
 	background-color: #ede4e0;
 }
`

const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
`;


const Faq = ({ data, location }) => {
	const siteTitle = 'clocker'
	return (
		<Layout location={location} title={siteTitle} navigation="/clocker">
		<SEO title="Clocker Privacy Policy" />
			<div>
				<h1> faq </h1>
					<section className="faq">
					<ul>
		  				<li><StyledLink to="/clocker/add-faq"> How can I add new timezones or locations? </StyledLink></li>
		  				<li><StyledLink to="/clocker/favourite-faq"> How do I enable timezones to appear in my menubar?</StyledLink> </li>
		  				<li><StyledLink to="/clocker/menubar-faq"> Why does Clocker not show up in my menubar while certain apps are in the foreground?</StyledLink> </li>
		  				<li><StyledLink to="/clocker/startup-faq"> How do I start Clocker whenever my Mac boots or is restarted? </StyledLink> </li>
		  				<li><StyledLink to="/clocker/customize-format-faq"> How do I customize the time format for my selected locations? </StyledLink> </li>
					</ul>
					</section>
					<hr />
					<section className="contact">
						<h3> Still looking for help? </h3>
						<a href="mailto:abhishekbanthia@me.com"><RoundedDiv> Contact Us </RoundedDiv></a>
					</section>
			</div>
		</Layout>
	)
}

export default Faq