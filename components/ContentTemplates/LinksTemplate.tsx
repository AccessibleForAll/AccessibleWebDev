import { TemplateSection } from "../TemplateSection/TemplateSection"
import { CodeBlock } from "../CodeBlock/CodeBlock"
import { NavPage } from "../NavPage/NavPage"
import { linkPageNavigation } from "../../data/pageNavigationLists"
import { PageUpdated } from "../PageUpdated/PageUpdated"

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
					<strong>{`${" <a>"}`}</strong>. This element allows you to make text
					or images clickable, and has inbuilt interactivity allowing users to
					activate the link with a mouse click, a touch device or by pressing
					Enter on a keyboard. It is also automatically reachable with the tab
					key.
				</p>
				<p>
					The accessible name for links created using the anchor element comes
					from the content between the opening and closing tag. If the content
					between the opening and closing tags is not text, or the text is very
					generic the accessible name should be added in another way, for
					example with ARIA.
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
						such as "Click Here" or "Read More". These phrases are difficult to
						understand without surrounding context and can pose problems for
						screen reader users and voice input users. It is also common to see
						these phrases repeated multiple times on a page, for example on an
						e-commerce site listing several product cards, making it more
						difficult to differentiate between the different link destinations.
					</p>
					<p>
						If you must use non-descriptive text, you can make it more
						accessible by using methods to overwrite the visible text. Two such
						methods are using aria-label or hiding additional text with CSS.
					</p>
					<h4>Aria-label</h4>
					<p>
						The first method is to use an aria-label. This will overwrite the
						visible text and be read out to screen reader users instead. It's
						important to keep in mind that the aria-label should start with the
						same text as shown in the visible text so that the link still works
						for voice input users. If the visible link says "Read more" the
						aria-label might be "Read more about accessible buttons"
					</p>
					<p>
						An aria-label can also be used to give an image or icon link an
						accessible name when there is no visible link text.
					</p>
					<CodeBlock
						codeSnippet={`<a href="https://accessibleweb.dev/buttons" aria-label="Read more about accessible buttons">Read more</a>`}
						languageType={"html"}
					/>
					<p>
						Some downsides to aria-label are that it doesn't always get
						translated by in-browser translation tools. It also completely
						overwrites the visible text which can be problematic if the two do
						not match.
					</p>
					<h4>Hiding elements with CSS</h4>
					<p>
						Another solution is to use CSS to hide some extra text. This can be
						done by adding a visibly hidden <strong>{`${"<span>"}`}</strong>{" "}
						element within the <strong>{`${"<a>"}`}</strong> element to provide
						descriptive text that gets read out to screen readers but is not
						visible to sighted users.
					</p>

					<CodeBlock
						codeSnippet={`<a href="https://accessibleweb.dev/buttons">Read more
	<span class="visibly-hidden">about accessible buttons</span>
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
						<strong>Underline links by default: </strong>
						Links should be underlined by default. This provides a clear visual
						indicator that a piece of text or an element is clickable. It's a
						universal convention that helps all users understand what's
						clickable.
					</li>
					<li>
						<strong>Focus state: </strong>A focused link should have a focus
						indicator which makes it easy to see where focus is on the screen.
						This is often a thicker border or outline around the link and should
						have a contrast ratio of at least 3:1 with the background.
					</li>
					<li>
						<strong>Ensure sufficient color contrast: </strong>
						Make sure the color of your links contrasts well with the background
						color or surrounding text color. This ensures that people with
						visual impairments or color vision deficiencies can easily
						distinguish the links from the surrounding text. The contrast ratio
						should be at least 4.5:1 for WCAG level AA compliance. Color should
						not be the only way to distinguish links from surrounding text.
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
					is to describe the link destination rather than the content of the
					image.
				</p>
				<CodeBlock
					codeSnippet={`<a href="https://google.com" aria-label="Google">
	<FaGoogle />
</a>

<a href="https://google.com">
	<FaGoogle />
	<span class="visibly-hidden">Google</span>
</a>

<a href="https://google.com">
	<img src="url" alt="Google" />
</a>`}
					languageType={"html"}
				/>
			</TemplateSection>
			<TemplateSection
				sectionName="touchTargetMinimum"
				title="Touch Target Minimum">
				<p>
					When it comes to creating accessible links, it's important that they
					are easy to activate. To do this, WCAG recommends that links that are
					not within text have a target size of at least 24 x 24 CSS pixels.
					Doing this makes it easier for users who have motor dexterity issues
					to click them.
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
							href="https://www.w3.org/TR/WCAG22/#link-purpose-in-context"
							className="blockLink">
							2.4.4 Link Purpose (in Context)
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
							href="https://www.w3.org/TR/WCAG22/#link-purpose-link-only"
							className="blockLink">
							2.4.9 Link Purpose (Link Only)
						</a>
					</li>
					<li>
						<a
							href="https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum"
							className="blockLink">
							2.4.11 Focus Not Obscured (Minimum)
						</a>
					</li>
					<li>
						<a
							href="https://www.w3.org/TR/WCAG22/#focus-not-obscured-enhanced"
							className="blockLink">
							2.4.12 Focus Not Obscured (Enhanced)
						</a>
					</li>
					<li>
						<a
							href="https://www.w3.org/TR/WCAG22/#focus-appearance"
							className="blockLink">
							2.4.13 Focus Appearance
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
							href="https://www.w3.org/TR/WCAG22/#target-size-enhanced"
							className="blockLink">
							2.5.5 Target Size (Enhanced)
						</a>
					</li>
					<li>
						<a
							href="https://www.w3.org/TR/WCAG22/#target-size-minimum"
							className="blockLink">
							2.5.8 Target Size (Minimum)
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
							href="https://www.tpgi.com/well-color-us-surprised-this-sc-can-be-a-tricky-customer/"
							className="blockLink">
							Well Color Us Surprised - This SC Can Be a Tricky Customer
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

			<PageUpdated date="5th January 2024" />
		</>
	)
}
