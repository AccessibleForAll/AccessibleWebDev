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
					They serve the purpose of connecting different pages within a website
					or linking to external resources or documents from one webpage to
					another.
				</p>

				<p>
					In HTML, links are created using the anchor element{" "}
					<strong>{`${"<a>"}`}</strong>. This element allows you to make text or
					images clickable, enabling users to navigate by clicking, redirecting
					through URLs, accessing through the tab key, or selecting with the
					Enter key.
				</p>

				<CodeBlock
					codeSnippet={`<a href="https://accessibleweb.dev">Visit Accessible Web</a>`}
					languageType={"html"}
				/>

				<p>
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
				</p>
			</TemplateSection>
			<TemplateSection sectionName="linkText" title="Descriptive Link Text">
				<p>
					Link text is the text that describes a hyperlink on a webpage. It's
					important to have descriptive link text to provide clear context for
					screen readers and all users.
				</p>
				<CodeBlock
					codeSnippet={`<a href="https://accessibleweb.dev">Visit Accessible Web</a>`}
					languageType={"html"}
				/>
				<p>
					Descriptive link text helps users understand the purpose of the link.
					Avoid using vague phrases like "Click Here" or "Read More."
				</p>
				<p>
					If you must use <strong>non-descriptive text</strong>, you can make it
					more accessible with ARIA attributes for screen readers.
				</p>
				<CodeBlock
					codeSnippet={`<a href="https://accessibleweb.dev" aria-label="Read more about Accessible Web">Read more</a>`}
					languageType={"html"}
				/>

				<p>
					<a
						href="https://accessibleweb.dev"
						aria-label="Read more about FreecodeCamp">
						Read more
					</a>
				</p>

				<p>
					However, ARIA labels may not provide perfect accessibility. A better
					solution is to use a <strong>{`${"<span>"}`}</strong> element within
					the <strong>{`${"<a>"}`}</strong> element to provide descriptive text
					that's accessible to screen readers but not visible to sighted users{" "}
				</p>

				<CodeBlock
					codeSnippet={`<a href="https://www.freecodecamp.org">Read more
	<span class="sr-only">Read more about FreeCodeCamp</span>
</a>`}
					languageType={"html"}
				/>
				<p>
					Here, the <strong>{`${"<span>"}`}</strong> element has a class of
					"sr-only" (meaning for screen readers only) and a descriptive text.
				</p>

				<p>
					To ensure the <strong>{`${"<span>"}`}</strong> element remains
					accessible but hidden from sighted users, apply the following CSS
					style:
				</p>
				<CodeBlock
					codeSnippet={`.sr-only {
    border: 0;
    clip: rect(0,0,0,0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}`}
					languageType={"css"}
				/>
				<p>
					<a href="https://www.freecodecamp.org">
						Read more
						<span className={styles.srOnly}>Read more about FreeCodeCamp</span>
					</a>
				</p>
			</TemplateSection>

			<TemplateSection sectionName="linkStates" title="Link State">
				<p>
					To improve the accessibility of your website, it's crucial to make
					links more noticeable and user-friendly, especially for people using
					screen readers or those with low visibility or color blindness.
				</p>

				<p>Here's how to achieve this:</p>

				<ul>
					<li>
						<strong>Underline Links by Default: </strong>
						Links should be underlined by default. This provides a clear visual
						indicator that a piece of text or an element is clickable. It's a
						universal convention that helps all users understand what's
						clickable.
						<CodeBlock
							codeSnippet={`a {
    text-decoration: underline;
}`}
							languageType={"css"}
						/>
					</li>
					<li>
						<strong>Ensure Sufficient Color Contrast: </strong>
						Make sure the color of your links contrasts well with the background
						color. This ensures that people with visual impairments can easily
						distinguish the links from the surrounding text.
					</li>
					<li>
						<strong>Add Link State on Click or Visit: </strong>
						To aid users in identifying which links they've already visited or
						clicked, consider adding a visual change, such as making the link
						text bold or giving it a bright outline color.
						<CodeBlock
							codeSnippet={`a:visited {
    font-weight: bold;
    outline: 2px solid #00f; /* Use a bright color for the outline */
}`}
							languageType={"css"}
						/>
					</li>
				</ul>
			</TemplateSection>
			<TemplateSection sectionName="linkImage" title="Link Image">
				<p>
					You can turn an image into a clickable link that takes you to another
					webpage. To ensure that this image link is accessible to screen
					readers and everyone else, you should follow these guidelines:
				</p>
				<ul>
					<li>
						<strong>Use Anchor Element: </strong>
						Wrap the image element within an anchor element{" "}
						<strong>{`${"<a>"}`}</strong> to create a clickable link. This makes
						it clear that the image is interactive and leads to another page.
						<CodeBlock
							codeSnippet={`<a href="#">
    <img alt="Old brown paper texture" src="/images/imagesTemplate/oldPaperTexture.jpg" width="300" height="200"/>
</a>`}
							languageType={"html"}
						/>
						<p>
							<a href="#">
								<Image
									src="/images/imagesTemplate/oldPaperTexture.jpg"
									alt="Old brown paper texture"
									width={300}
									height={200}
									layout="intrinsic"
								/>
							</a>
						</p>
					</li>
					<li>
						<strong>Provide Descriptive Alt Text: </strong>
						Use the alt attribute within the image tag to describe the content
						or purpose of the image. This text should be meaningful and convey
						the image's function, especially to those who can't see it.
						<CodeBlock
							codeSnippet={`<a href="#">
    <img alt="Old brown paper texture" src="/images/imagesTemplate/oldPaperTexture.jpg" width="300" height="200"/>
</a>`}
							languageType={"html"}
						/>
					</li>
					<li>
						<strong>Use Descriptive Text (if alt is empty): </strong>
						If the image itself doesn't contain meaningful content, you can use
						a descriptive text within a <strong>{`${"<span>"}`}</strong> element
						alongside an empty alt attribute. This ensures there's still textual
						information for screen reader users.
						<CodeBlock
							codeSnippet={`<a href="#">
    <img alt="" src="http://ia.media-imdb.com/images/M/MV5BMTIxMjc4NTA2Nl5BMl5BanBnXkFtZTYwNTU2MzU5._V1._SX86_CR0,0,86,86_.jpg" width="300" height="200"/>
    <span>The Sopranos</span>
</a>`}
							languageType={"html"}
						/>
					</li>
				</ul>
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
