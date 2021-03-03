import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const MenubarFaq = ({ data, location }) => {
	const siteTitle = 'faq'
	return (
		<Layout location={location} title={siteTitle} navigation="/clocker/faq">
		<SEO title="Clocker FAQ" />
			<div>
				<h1> Can't see Clocker at all? </h1>
				<p> 
				If you're unable to see Clocker in your menubar, the most likely reason is because there's little space on the menu bar for Clocker to show along with Chrome 
				or other third-party app menus items (File, Edit, View etc) and your other menubar items (Bluetooth, Wi-Fi, Spotlight etc). 
				</p>
				<p>
				Third' party app menus take precedence over menu bar items (like Clocker) causing macOS to hide Clocker that would otherwise occupy that space. 
				To get rid of the blank issue, here’s what we suggest:
				<ul>
				 <li> Limit the number of Clocker menubar time zones to 2 to 3. Only select the timezones you really want. Use the Clocker panel for the rest of the time zones. </li>
				 <li> Remove unused menubar apps from your menubar to make space for Clocker </li>
				 <li> Increase your screen resolution </li>
				</ul>
				</p>
			</div>
		</Layout>
	)
}

export default MenubarFaq