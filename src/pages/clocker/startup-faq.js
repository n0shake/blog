import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import startup1 from '../../../content/assets/startup1.png'
import startup2 from '../../../content/assets/startup2.png'

const StartupFaq = ({ data, location }) => {
	const siteTitle = 'faq'
	return (
		<Layout location={location} title={siteTitle} navigation="/clocker/faq">
		<SEO title="Clocker FAQ" />
			<div>
				<h1> Starting Clocker at Login </h1>
				<p> If you'd like Clocker to start every-time you boot your Mac, you need to make sure the app is correctly placed inside the <b>/Applications</b> folder. </p>
				<p> After which, you should navigate to Clocker Preferences by clicking the menubar icon and tapping on the gear button in the lower-left corner of the Clocker Window. Preferences can also be accessed using the keyboard shortcut: <b>Command + ,</b> </p>
				<p> Inside Preferences, make sure the <b>Start Clocker At Login</b> option is checked. </p>
				<br/>
 				<img className="educational" src={startup1} alt="Clocker - How to start app at login?" />
 				<p> Alternatively, you can add <b>Clocker</b> to the Login Items inside System Preferences. Here's how you do that:</p>
 				<p> Open <b>System Preferences</b> —> <b>Users and Groups</b> —> <b>Current User</b>. Click on Login Items tab and add Clocker by clicking on + icon.</p>
 				<img className="educational" src={startup2} alt="Clocker - How to start app at login?" />
			</div>
		</Layout>
	)
}

export default StartupFaq