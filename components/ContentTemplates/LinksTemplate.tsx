import { TemplateSection } from "../TemplateSection/TemplateSection"
import { CodeBlock } from "../CodeBlock/CodeBlock"
import { NavPage } from "../NavPage/NavPage"
import { linkPageNavigation } from "../../data/pageNavigationLists"
import { ImNewTab } from "react-icons/im"
import { PageUpdated } from "../PageUpdated/PageUpdated"
import styles from "./LinksTemplate.module.css"
import Image from "next/image"

export const LinksTemplate = () => {
	return (
		<>
			<NavPage pageNavigation={linkPageNavigation} />
			<TemplateSection sectionName="introduction" title="Introduction">
				<p>
					Links, also known as hyperlinks, are a fundamental element in HTML.
					They connect different pages, or parts of pages, to one another.
				</p>

				<p>
					In HTML, links are created using the anchor element
					<strong>{`${"<a>"}`}</strong>. This element allows you to make text or
					images clickable, and has inbuilt interactivity allowing users to
					activate the link with a mouse click, a touch device or by pressing
					Enter on a keyboard. It is also automatically reachable with the tab
					key.
				</p>
				<p>
					An important attribute for accessibility is the href attribute. This
					specifies the destination of the link. If the href is not present then
					the link is not accessible.
				</p>
			</TemplateSection>

			<TemplateSection
				sectionName="accessibleLinkNames"
				title="Accessible Link Names">
				<div>
					<h3>Descriptive Link Text</h3>
					<p>
						Link text is the text between the opening and closing anchor tag
						that describes a hyperlink on a webpage. It's important to have
						descriptive link text to provide clear context about where the link
						leads and helps users understand the purpose of the link. This is
						helpful for people with cognitive disabilities, screen reader users
						and voice input users.
					</p>

					<CodeBlock
						codeSnippet={`<a href="https://accessibleweb.dev">Visit Accessible Web Dev</a> 
<!--The descriptive name in this case is "Visit Accessible Web Dev" -->`}
						languageType={"html"}
					/>
				</div>
				<div>
					<h3>Non-descriptive Link Text</h3>
					<p>
						If possible, avoid using vague, non-descriptive phrases as link text
						like "Click Here" or "Read More". These phrases are difficult to
						understand without surrounding context and can pose problems for
						screen reader users and voice input users. It is also common to see
						these phrases repeated multiple times on a page, for example on an
						e-commerce site listing several product cards, making it more
						difficult to differentiate between the different link destinations.
					</p>
					<p>
						If you must use non-descriptive text, you can make it more
						accessible by using methods to overwrite the visible text.
					</p>
					<h4>Aria-label</h4>
					<p>
						The first method is to use an aria-label. This will overwrite the
						visible text and be read out to screen reader users instead. It's
						important to keep in mind that the aria-label should start with the
						same text as shown in the visible text so that the link still works
						for voice input users.
					</p>
					<p>
						An aria-label can also be used to give an image or icon link an
						accessible name when there is no visible link text.
					</p>
					<CodeBlock
						codeSnippet={`<a href="https://accessibleweb.dev" aria-label="Read more about Accessible Web">Read more</a>`}
						languageType={"html"}
					/>
					<p>
						Some downsides to aria-label are that it doesn't always get
						translated by in-browser translate tools. It also completely
						overwrites the visible text which can be problematic if the two do
						not match.
					</p>
					<h4>Hiding elements with CSS</h4>
					<p>
						Another solution is to use CSS to hide some extra text. By adding a
						visibly hidden <strong>{`${"<span>"}`}</strong> element within the{" "}
						<strong>{`${"<a>"}`}</strong> element to provide descriptive text
						that's read out to screen readers but not visible to sighted users.
					</p>

					<CodeBlock
						codeSnippet={`<a href="https://accessibleweb.dev">Read more
	<span class="visibly-hidden">Read more about Accessible Web Dev</span>
</a>`}
						languageType={"html"}
					/>

					<CodeBlock
						codeSnippet={`.visibly-hidden {
    border: 0;
    clip: rect(0,0,0,0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}
/* You may also see this class called screen-reader-only or sr-only in
other places on the web */`}
						languageType={"css"}
					/>
				</div>
			</TemplateSection>

			<TemplateSection sectionName="linkStates" title="Link State and Style">
				<p>
					To improve the accessibility of your website, it's crucial to make
					links easy to distinguish from non-interactive elements on a page.
				</p>

				<p>Here's how to achieve this:</p>

				<ul className="list">
					<li>
						<strong>Underline Links by Default: </strong>
						Links should be underlined by default. This provides a clear visual
						indicator that a piece of text or an element is clickable. It's a
						universal convention that helps all users understand what's
						clickable.
					</li>
					<li>
						<strong>Ensure Sufficient Color Contrast: </strong>
						Make sure the color of your links contrasts well with the background
						color. This ensures that people with visual impairments can easily
						distinguish the links from the surrounding text. The contrast ratio
						should be at least 4.5:1 for WCAG level AA compliance. Color should
						not be the only way to distinguish links from surrounding text.
					</li>
					<li>
						<strong>Add Link State on Click or Visit: </strong>
						To aid users in identifying which links they've already visited or
						clicked, consider adding a visual change, such as making the link
						text bold or giving it a bright outline color.
					</li>
					<li>
						<strong>Don't rely on hover state to convey links: </strong>
						Hover is not available on touch devices or for people navigating the
						web with keyboard, screen readers or other input devices. Therefore
						hover states only, such as underline or color change on hover,
						should not be relied upon to convey that something is a link.
					</li>
				</ul>
			</TemplateSection>
			<TemplateSection sectionName="linkImage" title="Image and Icon Links">
				<p>
					You can turn an image or icon into a clickable link that takes you to
					another webpage. Since image and icon links don't have a visible link
					text, you need to use a different method to give the link an
					accessible name. These methods can include adding an aria-label, using
					a visibly-hidden class or adding an alt attribute to the image text
					wrapped inside the link.
				</p>
				<p>
					The important thing to remember when using images and icons as links
					is to describe the link destination and not the content of the image.
				</p>
			</TemplateSection>
			<TemplateSection sectionName="WCAGCriteria" title="WCAG Criteria">
				<ul className="list">
					<li>
						<a
							href="https://www.w3.org/TR/WCAG21/#non-text-content"
							className="blockLink">
							1.1.1 Non-text content
						</a>
					</li>
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
							href="https://www.w3.org/TR/WCAG21/#contrast-minimum"
							className="blockLink">
							1.4.3 Contrast (minimum)
						</a>
					</li>
					<li>
						<a
							href="https://www.w3.org/TR/WCAG21/#non-text-contrast"
							className="blockLink">
							1.4.11 Non-text Contrast
						</a>
					</li>
					<li>
						<a
							href="https://www.w3.org/TR/WCAG21/#content-on-hover-or-focus"
							className="blockLink">
							1.4.13 Content on Hover or Focus
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
							href="https://www.w3.org/TR/WCAG21/#focus-visible"
							className="blockLink">
							2.4.7 Focus Visible
						</a>
					</li>
					<li>
						<a
							href="https://www.w3.org/TR/WCAG21/#label-in-name"
							className="blockLink">
							2.5.3 Label in Name
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
				</ul>
			</TemplateSection>
			<TemplateSection sectionName="otherResources" title="Other Resources">
				<ul className="list">
					<li>
						<a
							href="https://www.sitepoint.com/15-rules-making-accessible-links/"
							className="blockLink">
							Making Accessible Links: 15 Golden Rules for Developers
						</a>
					</li>
					<li>
						<a
							href="https://medium.com/@svinkle/why-let-someone-know-when-a-link-opens-a-new-window-8699d20ed3b1"
							className="blockLink">
							Why let someone know when a link opens a new tab?
						</a>
					</li>
					<li>
						<a
							href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/noopener"
							className="blockLink">
							HTML Attribute rel="noopener"
						</a>
					</li>
					<li>
						<a
							href="https://webaim.org/blog/wcag-2-0-and-link-colors/"
							className="blockLink">
							WCAG 2.0 and link colors
						</a>
					</li>
				</ul>
			</TemplateSection>
			<PageUpdated date="18th September 2023" />
		</>
	)
}
{
	/* <p>
					There are two main types of links: internal links and external links.
				</p>
				<ul>
					<li>
						<strong>Internal links: </strong>
						Internal links connect webpages within your own website. They help
						users navigate between different pages of your site easily.
						<CodeBlock
							codeSnippet={`<a href="buttons.html">Learn more about accessible buttons</a>`}
							languageType={"html"}
						/>
						<p>
							<a href="buttons">Learn more about accessible buttons</a>
						</p>
					</li>

					<li>
						<strong>External links: </strong>
						External links, on the other hand, connect your webpage to another
						webpage on an external website. An example of this is when you link
						your website to the W3C website for additional information or
						resources.
						<CodeBlock
							codeSnippet={`<a href="https://www.w3schools.com/">Visit W3Schools</a>`}
							languageType={"html"}
						/>
						<h3>Open External links in a New Tab</h3>
						<p>
							External links should be clearly marked as such, especially when
							they open in a new browser tab, either with a new window icon{" "}
							<span>
								<ImNewTab size="1rem" aria-hidden="true" />
							</span>{" "}
							or a descriptive text e.g “(opens in a new tab)” and also include
							a target attribute of “_blank” and rel=”noopener” to prevent
							potential security risks.
						</p>
						<CodeBlock
							codeSnippet={`<a href="https://www.accessibleweb.com" rel="noopener" target="_blank">
    Visit Accessible Web
    <span hidden id="new_tab">(opens in a new tab)</span>
    <svg aria-hidden="true" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" mirror-in-rtl="true" fill="#000000">
    </svg>
</a>`}
							languageType={"html"}
						/>
						<p>
							In this example, we use a <strong>{`${"<span>"}`}</strong> element
							with the 'hidden' attribute and id="new_tab" with the text "(opens
							in a new tab)", which won't be visible by default. The
							aria-hidden="true" attribute in the SVG element ensures that the
							SVG icon is not visible to screen readers. When screen readers
							visit the link, they'll read it as{" "}
							<strong>Visit Accessible Web. Opens in a new tab.</strong>
						</p>
					</li>
				</ul>
				<p>
					Notice the difference between the hrefs. The href for internal link is
					pointing to a page within this website - Buttons and the href for
					external link is pointing to a file outside this website.
				</p> */
}
