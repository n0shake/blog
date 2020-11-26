import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata?.title || `Title`
	const projects = {"Clocker": "/clocker", "Projects": "/projects", "Reading": "/reading"}

	return (
		<Layout location={location} title={siteTitle}>
        	<SEO title="Projects" />
            <div className="subpage">
        	<h1> Projects </h1>
        	<h2> Open Source </h2>
        	<hr/><br/>
        	<p> 
        		<a href="https://github.com/n0shake/Clocker">Clocker</a> is a menu bar utility to keep track of your friends in different time zones. 150K+ downloads. 
        	</p>
        	<p> 
        		<a href="https://github.com/n0shake/Public-APIs">Public-apis</a> is a curated list of common and obscure APIs from round the web. 
        	</p>
        	<p> 
        		<a href="https://github.com/n0shake/dash">Dash</a> allows you to browse restaurants from your macOS terminal. Fun little project where I learnt the valuable life skill of conducting a man in the middle attack. 
        	</p>
        	<p> 
        		Python bot which tweets all the post titles and URLs from the <a href="https://www.reddit.com/r/chelseafc/">r/chelsea subreddit</a> to a twitter account <a href="https://twitter.com/chelseareddit">(@chelseareddit)</a>. [Defunct] 
        	</p>
        	<br/>
            </div>
		</Layout>
	)
}

export default Projects

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`