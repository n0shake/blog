import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ObfuscatedEmail from "../../components/obfuscated-email"
import styled from 'styled-components'

import addGIF from '../../../content/assets/add.gif'
import favGIF from '../../../content/assets/fav.gif'
import customizeLabel1 from '../../../content/assets/customize-label.gif'
import customizeLabel2 from '../../../content/assets/customize-label-1.png'
import startup1 from '../../../content/assets/startup1.png'
import startup2 from '../../../content/assets/startup2.png'
import customizeFormat1 from '../../../content/assets/customize1.png'
import customizeFormat2 from '../../../content/assets/customize2.png'

const RoundedDiv = styled.div`
 background-color: var(--color-surface);
 border: none;
 color: var(--color-heading-black);
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
 	background-color: var(--color-hover);
 }
`

const QuestionList = styled.ul`
 list-style: none;
 padding: 0;
 margin: 0 0 24px 0;
 display: flex;
 flex-direction: column;
 gap: 8px;
`

const QuestionLink = styled.a`
 background-color: var(--color-surface);
 color: var(--color-heading-black);
 padding: 14px 18px;
 border-radius: 10px;
 font-weight: 600;
 font-size: 15px;
 text-decoration: none;
 display: block;
 transition: 0.2s;
 &:hover {
 	background-color: var(--color-hover);
 }
`

const AnswerSection = styled.section`
 margin-top: 32px;
`

const BackToTop = styled.a`
 display: inline-block;
 margin-top: 12px;
 color: var(--color-heading-black);
 text-decoration: none;
 font-size: 14px;
 opacity: 0.7;
 &:hover {
 	opacity: 1;
 }
`

const Faq = ({ data, location }) => {
	const siteTitle = 'clocker'
	return (
		<Layout location={location} title={siteTitle} navigation="/clocker">
		<SEO title="Clocker FAQ" />
			<div>
				<h1 id="top"> faq </h1>
				<p> Tap a question to jump to the answer. </p>

				<QuestionList>
					<li><QuestionLink href="#add"> How can I add new timezones or locations? </QuestionLink></li>
					<li><QuestionLink href="#favourite"> How do I enable timezones to appear in my menubar? </QuestionLink></li>
					<li><QuestionLink href="#customize-label"> How do I customize the label for a timezone / location? </QuestionLink></li>
					<li><QuestionLink href="#menubar"> Why does Clocker not show up in my menubar while certain apps are in the foreground? </QuestionLink></li>
					<li><QuestionLink href="#startup"> How do I start Clocker whenever my Mac boots or is restarted? </QuestionLink></li>
					<li><QuestionLink href="#customize-format"> How do I customize the time format for my selected locations? </QuestionLink></li>
					<li><QuestionLink href="#reset"> How do I reset Clocker? </QuestionLink></li>
				</QuestionList>

				<hr />

				<AnswerSection id="add">
					<h2> Adding New Timezones </h2>
					<p> For adding new time zones or cities, you should navigate to Preferences by opening the Clocker window and clicking on the gear icon (or through the Command + , keyboard shortcut).
					This is where you can add, delete and edit your time zones. </p>
					<br/>
					<img className="educational" src={addGIF} alt="Clocker - How to add a timezone?" />
					<p><BackToTop href="#top"> ↑ Back to top </BackToTop></p>
				</AnswerSection>

				<AnswerSection id="favourite">
					<h2> Favourites </h2>
					<p>In order to put time zones in your top menubar, you need to favourite them. Here's how you do that:
					<ol>
						<li>Tap on the Clocker icon on the top of your screen</li>
						<li>Click on the gear icon (or use the Command + , keyboard shortcut)</li>
						<li>Click the <b>Favourite</b> checkbox alongside the cities you want to see in the top menu bar </li>
					</ol>
					</p>
					<br/>
					<img className="educational" src={favGIF} alt="Clocker - Favouriting a timezone" />
					<p><BackToTop href="#top"> ↑ Back to top </BackToTop></p>
				</AnswerSection>

				<AnswerSection id="customize-label">
					<h2> Customizing Labels </h2>
					<p> Clocker allows you to edit the names of the timezones or locations you've added. This allow you to map a colleague, friend or a partner to a location reducing the need to mentally calculate who's actually in London. </p>
					<br/>
					<p> You can utilize the contextual menu present on left of each row to edit the label:</p>
					<img className="educational" src={customizeLabel1} alt="Clocker - Customize Label Demo" />
					<blockquote> Tip: Use emojis as a label to enhance glanceability.</blockquote>
					<img className="educational" src={customizeLabel2} alt="Clocker - Customize Label with Emojis" />
					<p><BackToTop href="#top"> ↑ Back to top </BackToTop></p>
				</AnswerSection>

				<AnswerSection id="menubar">
					<h2> Can't see Clocker at all? </h2>
					<p>
					If you're unable to see Clocker in your menubar, the most likely reason is because there's little space on the menu bar for Clocker to show along with Chrome
					or other third-party app menus items (File, Edit, View etc) and your other menubar items (Bluetooth, Wi-Fi, Spotlight etc).
					</p>
					<p>
					Third' party app menus take precedence over menu bar items (like Clocker) causing macOS to hide Clocker that would otherwise occupy that space.
					To get rid of the blank issue, here's what we suggest:
					<ul>
					 <li> Limit the number of Clocker menubar time zones to 2 to 3. Only select the timezones you really want. Use the Clocker panel for the rest of the time zones. </li>
					 <li> Remove unused menubar apps from your menubar to make space for Clocker </li>
					 <li> Increase your screen resolution </li>
					</ul>
					</p>
					<p><BackToTop href="#top"> ↑ Back to top </BackToTop></p>
				</AnswerSection>

				<AnswerSection id="startup">
					<h2> Starting Clocker at Login </h2>
					<p> If you'd like Clocker to start every-time you boot your Mac, you need to make sure the app is correctly placed inside the <b>/Applications</b> folder. </p>
					<p> After which, you should navigate to Clocker Preferences by clicking the menubar icon and tapping on the gear button in the lower-left corner of the Clocker Window. Preferences can also be accessed using the keyboard shortcut: <b>Command + ,</b> </p>
					<p> Inside Preferences, make sure the <b>Start Clocker At Login</b> option is checked. </p>
					<br/>
					<img className="educational" src={startup1} alt="Clocker - How to start app at login?" />
					<p> Alternatively, you can add <b>Clocker</b> to the Login Items inside System Preferences. Here's how you do that:</p>
					<p> Open <b>System Preferences</b> —> <b>Users and Groups</b> —> <b>Current User</b>. Click on Login Items tab and add Clocker by clicking on + icon.</p>
					<img className="educational" src={startup2} alt="Clocker - How to start app at login?" />
					<p><BackToTop href="#top"> ↑ Back to top </BackToTop></p>
				</AnswerSection>

				<AnswerSection id="customize-format">
					<h2> Customizing Time Format </h2>
					<p> You can set the time-format for your locations through Clocker Preferences. You should navigate to Clocker Preferences by clicking the menubar icon and tapping on the gear button
					in the lower-left corner of the Clocker Window. Preferences can also be accessed using the keyboard shortcut: <b>Command + ,</b> </p>
					<p> Here, you need to go to the <b>Appearance</b> tab where you can select the time format of your choice.</p>
					<br/>
					<img className="educational" src={customizeFormat1} alt="Clocker - Customize Time Format" />
					<blockquote> Do remember that the time format selected in the Appearance tab is applied to all locations and timezones.</blockquote>
					<p> Clocker also allows you to override the timezone format at the individual location level. </p>
					<p> To do so, you need to open the Clocker window and tap the three dots button which appears on the left side of each timezone. This is where you can customize and choose a different timezone format.</p>
					<img className="educational" src={customizeFormat2} alt="Clocker - Customize Time Format" />
					<p><BackToTop href="#top"> ↑ Back to top </BackToTop></p>
				</AnswerSection>

				<AnswerSection id="reset">
					<h2> Reset Clocker? </h2>
					<p>
					Occasionally, Clocker may enter a glitchy state. In such instances, your best course of action would be to reset it.
					Resetting entails re-adding your timezones and adjusting toggle settings according to your preferences.
					Here how you can reset Clocker:
					</p>
					<p>
					<ul>
					 <li> Make sure Clocker is closed (force quit through Activity Monitor if necessary) </li>
					 <li> Open up the Terminal app and type in the command: <i>defaults delete com.abhishek.Clocker</i> </li>
					 <li> Hit the return key </li>
					 <li> Restart Clocker </li>
					</ul>
					</p>
					<p><BackToTop href="#top"> ↑ Back to top </BackToTop></p>
				</AnswerSection>

				<hr />

				<section className="contact">
					<h3> Still looking for help? </h3>
					<ObfuscatedEmail subject="Help Request via Clocker FAQ"><RoundedDiv> Contact Us </RoundedDiv></ObfuscatedEmail>
				</section>
			</div>
		</Layout>
	)
}

export default Faq
