import { breadcrumbsPageNavigation } from "../../data/pageNavigationLists"
import { CodeBlock } from "../CodeBlock/CodeBlock"
import { NavPage } from "../NavPage/NavPage"
import { PageUpdated } from "../PageUpdated/PageUpdated"
import { TemplateSection } from "../TemplateSection/TemplateSection"
import styles from "./BreadcrumbsTemplate.module.css"

export const BreadcrumbsTemplate = () => {
	return (
		<>
			<NavPage pageNavigation={breadcrumbsPageNavigation} />
			<TemplateSection sectionName="introduction" title="Introduction">
				<p>
					Breadcrumbs are a type of navigation, designed to make it easy to see
					where you are within the structure of a website and easily navigate to
					different areas. The name refers to the story of Hansel and Gretel who
					left a trail of breadcrumbs in the hope to find their way back out of
					the forest. They are most useful when content is nested several layers
					deep.
				</p>
				<p>
					Breadcrumbs are most often found at the top of a page and should be
					placed just before the main content. There is no semantic HTML element
					for breadcrumbs but it can be made from a combination of semantic HTML
					elements plus a small amount of ARIA.
				</p>

				<nav
					aria-label="Breadcrumbs (example only)"
					className={styles.breadcrumbsExample}>
					<ol>
						<li>
							<a href="#">Website root</a>
							<p aria-hidden="true">{">"}</p>
						</li>
						<li>
							<a href="#">Website level 1</a>
							<p aria-hidden="true">{">"}</p>
						</li>
						<li>
							<a href="#" aria-current="page">
								Website level 2
							</a>
						</li>
					</ol>
				</nav>
			</TemplateSection>
			<TemplateSection sectionName="htmlStructure" title="HTML Structure">
				<p>
					Although there is not one HTML element that can be used to make
					breadcrumbs, there are a few elements available that, when used
					together, offer the semantics needed to make accessible breadcrumbs.
				</p>
				<p>What is needed:</p>
				<ul className="list">
					<li>
						A nav element will let users know that this is a navigation
						landmark. Landmarks make things easier to find, especially for
						screen reader users.
					</li>
					<li>
						An ordered list will let users know that the order of the items is
						important.
					</li>
					<li>
						Links within the list will let users know that they can click to
						navigate to that area of the website.
					</li>
					<li>
						Since the last element in a breadcrumb trail should represent the
						current page, making it a link is optional.
					</li>
				</ul>
			</TemplateSection>
			<TemplateSection
				sectionName="aria"
				title="Add Extra Information with ARIA">
				<p>
					ARIA is used to add extra semantic information where HTML is not
					enough. In this case, there is probably another navigation present on
					the page. Therefore we will need to distinguish the breadcrumb
					navigation from any other navigation with an aria-label.
				</p>

				<p>
					If the last link in the breadcrumb trail is the current page, we can
					also use aria-current on that link to specify that it is the currently
					active page. If the last element is not a link then aria-current is
					optional.
				</p>

				<p>Aria-hidden can be used to hide any dividers between links.</p>
			</TemplateSection>

			<TemplateSection
				sectionName="breadcrumbsExample"
				title="Breadcrumbs Example">
				<CodeBlock
					languageType="html"
					codeSnippet={`<nav aria-label="Breadcrumbs" class="breadcrumbs">
	<ol>
		<li>
			<a href="#">Website root</a>
			<p aria-hidden="true">></p>
		</li>
		<li>
			<a href="#">Website level 1</a>
			<p aria-hidden="true">></p>
		</li>
		<li>
			<a href="#" aria-current="page">Website level 2</a>
		</li>
	</ol>
</nav>`}
				/>
			</TemplateSection>

			<TemplateSection
				sectionName="breadcrumbStyling"
				title="Styling Breadcrumbs">
				<p>
					Using an ordered list element within breadcrumbs causes each list item
					to be numbered. This styling can be removed with CSS and flexbox can
					be used to make list items sit side by side. CSS can also be used to
					create dividers between each link, or the divider can be added within
					the HTML and hidden with aria-hidden (as in the previous example).
				</p>
				<CodeBlock
					codeSnippet={`.breadcrumbs ol {
	list-style: none;
	margin: 0;
	padding: 1rem;
	display: flex;
	gap: 0.5rem;
}`}
					languageType="css"
				/>
				<p>
					Be aware that removing list styles from lists can cause the screen
					reader VoiceOver on Mac to stop announcing items as a list. If this
					happens, add role="list" to the ol element.
				</p>
			</TemplateSection>
			<TemplateSection sectionName="WCAGCriteria" title="WCAG Criteria">
				<ul className="list">
					<li>
						<a
							href="https://www.w3.org/TR/WCAG21/#info-and-relationships"
							className="blockLink">
							1.3.1 Info and Relationships
						</a>
					</li>
					<li>
						<a
							href="https://www.w3.org/TR/WCAG21/#identify-purpose"
							className="blockLink">
							1.3.6 Identify Purpose
						</a>
					</li>
					<li>
						<a
							href="https://www.w3.org/TR/WCAG21/#keyboard"
							className="blockLink">
							2.1.1 Keyboard
						</a>
					</li>
					<li>
						<a
							href="https://www.w3.org/TR/WCAG21/#focus-order"
							className="blockLink">
							2.4.3 Focus Order
						</a>
					</li>
					<li>
						<a
							href="https://www.w3.org/TR/WCAG21/#link-purpose-in-context"
							className="blockLink">
							2.4.4 Link Purpose
						</a>
					</li>
					<li>
						<a
							href="https://www.w3.org/TR/WCAG21/#multiple-ways"
							className="blockLink">
							2.4.5 Multiple Ways
						</a>
					</li>
					<li>
						<a
							href="https://www.w3.org/TR/WCAG21/#focus-visible"
							className="blockLink">
							2.4.7 Focus Visible
						</a>
					</li>
					<li>
						<a
							href="https://www.w3.org/TR/WCAG21/#location"
							className="blockLink">
							2.4.8 Location
						</a>
					</li>
					<li>
						<a
							href="https://www.w3.org/TR/WCAG21/#target-size"
							className="blockLink">
							2.5.5 Target Size
						</a>
					</li>
					<li>
						<a
							href="https://www.w3.org/TR/WCAG21/#on-focus"
							className="blockLink">
							3.2.1 On Focus
						</a>
					</li>
					<li>
						<a
							href="https://www.w3.org/TR/WCAG21/#consistent-navigation"
							className="blockLink">
							3.2.3 Consistent Navigation
						</a>
					</li>
				</ul>
			</TemplateSection>
			<TemplateSection sectionName="otherResources" title="Other Resources">
				<ul className="list">
					<li>
						<a
							href="https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/examples/breadcrumb/"
							className="blockLink">
							ARIA Authoring Practices Guide Breadcrumb Example
						</a>
					</li>
					<li>
						<a
							href="https://design-system.service.gov.uk/components/breadcrumbs/"
							className="blockLink">
							Gov.uk Design System - Breadcrumbs
						</a>
					</li>
				</ul>
			</TemplateSection>
			<PageUpdated date="10th April 2023" />
		</>
	)
}
