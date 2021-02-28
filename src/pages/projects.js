import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata?.title || `Title`
	return (
		<Layout location={location} title={siteTitle} navigation="/">
        	<SEO title="Projects" />
            <div className="subpage">
            	<h1> projects </h1>
            	<h2> Open Source </h2>
            	<hr/><br/>
                <ul>
            	<li> 
            		<a href="https://github.com/n0shake/Clocker">Clocker</a> is a menu bar utility to keep track of your friends in different time zones. 150K+ downloads. 
            	</li>
            	<li> 
            		<a href="https://github.com/n0shake/Public-APIs">Public-Api(s)</a> is a curated list of common and obscure APIs from around the web. 
            	</li>
            	<li> 
            		<a href="https://github.com/n0shake/dash">Dash</a> allows you to browse restaurants from your macOS terminal. Fun little project where I learnt about <a href="https://en.wikipedia.org/wiki/Man-in-the-middle_attack">MITM attacks</a>.
            	</li>
            	<li> 
            		Python bot which tweets all the post titles and URLs from the <a href="https://www.reddit.com/r/chelseafc/">r/chelsea</a> subreddit to a twitter account <a href="https://twitter.com/chelseareddit">(@chelseareddit)</a>.
            	</li>
                </ul>
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