import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import favGIF from '../../../content/assets/fav.gif'

const FavouriteFaq = ({ data, location }) => {
	const siteTitle = 'faq'
	return (
		<Layout location={location} title={siteTitle} navigation="/clocker/faq">
		<SEO title="Clocker FAQ" />
			<div>
				<h1> Favourites </h1>
				<p>In order to put time zones in your top menubar, you need to favourite them. Here's how you do that:
				<ol> 
					<li>Tap on the Clocker icon on the top of your screen</li>
					<li>Click on the gear icon (or use the Command + , keyboard shortcut)</li>
					<li>Click the <b>Favourite</b> checkbox alongside the cities you want to see in the top menu bar </li>
				</ol>
				</p>
				<br/>
				<img className="educational" src={favGIF} alt="Clocker - Favouriting a timezone" />
			</div>
		</Layout>
	)
}

export default FavouriteFaq