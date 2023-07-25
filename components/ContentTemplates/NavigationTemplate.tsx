import { navigationPageNavigation } from "../../data/pageNavigationLists"
import { CodeBlock } from "../CodeBlock/CodeBlock"
import { NavPage } from "../NavPage/NavPage"
import { PageUpdated } from "../PageUpdated/PageUpdated"
import { TemplateSection } from "../TemplateSection/TemplateSection"

// same order
// multiple navs on a page

export const NavigationTemplate = () => {
	return (
		<>
			<NavPage pageNavigation={navigationPageNavigation} />
			<TemplateSection sectionName="introduction" title="Introduction">
				<p>
					A website navigation is a section of the page aimed at helping you
					find the main sections of a website. HTML has a semantic &lt;nav&gt;
					element which should be used around all navigations on the page. This
					element is a landmark element and can be used by screen reader users
					to more easily find their way around the page.
				</p>
			</TemplateSection>
			<TemplateSection sectionName="simpleNav" title="A Simple Navigation">
				<p>
					In its simplest form a navigation is a list of links to other pages
					within a larger website or to other regions of the same page. A nav
					element wraps an unordered list of links in order to communicate how
					long the navigation is.
				</p>

				<CodeBlock
					codeSnippet={`<nav>
	<ul>
		<li>
			<a href"/">Link 1</a>
		</li>
		<li>
			<a href"/">Link 2</a>
		</li>
		<li>
			<a href"/">Link 3</a>
		</li>
	</ul>
</nav>`}
					languageType={"html"}
				/>
			</TemplateSection>
			<TemplateSection sectionName={"hamburgerMenus"} title={"Hamburger Menus"}>
				<p>
					Often on mobile there is not space for a full navigation and a common
					pattern is to use a hamburger menu. This is usually a button with an
					icon that looks like three layers of a hamburger and represents the
					place to find the navigation. Pressing the button opens the navigation
					and often the icon will change to a cross to signify a close button.
				</p>
				<p>
					To make a hamburger menu accessible it must be reachable and operable
					by keyboard only. If a button element is used then this will happen
					automatically. It should have a clear label stating the function of
					the button and it should also announce whether it is opened or closed
					to screen reader users. For this, aria-label and aria-expanded are
					useful and JavaScript will be needed to toggle the navigation open and
					closed.
				</p>
				{
					// TODO: Fix this code block!
				}
				<CodeBlock
					codeSnippet={`<button
onclick={handleNavClick}
aria-label="Navigation menu"
aria-expanded={showNavMobile}>
				
				`}
					languageType={"html"}
				/>
			</TemplateSection>
			<TemplateSection sectionName={"megaMenus"} title={"Mega Menus"}>
				<p>
					Mega menus are more complex navigations with nested links to different
					sections and pages. Examples can often be found on popular clothing
					chain websites.
				</p>
				<p>
					The top level of a mega menu is usually broken up into broad
					categories. These categories can be made with buttons that trigger a
					popup to open when pressed. The list of navigation links is then
					shown.
				</p>
				<CodeBlock codeSnippet={""} languageType={"html"} />
			</TemplateSection>
			<TemplateSection sectionName={"linksOrder"} title={"Order of Links"}>
				<p>
					To help users find their way around easily, it's important that the
					relative order of links remains the same across all pages within a web
					site.
				</p>
			</TemplateSection>
			<TemplateSection
				sectionName={"multipleNavs"}
				title={"Multiple Navigations Per Page"}>
				<p>
					It is common to have more than one navigation per page, for example a
					primary navigation that takes people between different pages of the
					website and a secondary navigation that takes people to different
					sections within a page.
				</p>
				<p>
					When there are multiple navigations using the nav element it is
					important to differentiate them for screen reader users by labelling
					them. Use aria-label or aria-labelledby to let screen reader users
					know the different functions of the navigation elements.
				</p>

				<CodeBlock
					codeSnippet={`<nav aria-label="Site">
				...
				</nav>
				`}
					languageType={"html"}
				/>
				<CodeBlock
					codeSnippet={`<nav aria-label="Within page">
				...
				</nav>
				`}
					languageType={"html"}
				/>
			</TemplateSection>
			<TemplateSection sectionName="WCAGCriteria" title="WCAG Criteria">
				<ul className="list">
					<li>
						<a href="#" className="blockLink">
							###
						</a>
					</li>
				</ul>
			</TemplateSection>
			<TemplateSection sectionName="otherResources" title="Other Resources">
				<ul className="list">
					<li>
						<a href="#" className="blockLink">
							###
						</a>
					</li>
				</ul>
			</TemplateSection>
			<PageUpdated date="26th June 2023" />
		</>
	)
}
