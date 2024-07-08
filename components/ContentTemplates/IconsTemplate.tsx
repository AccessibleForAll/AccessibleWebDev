import Link from "next/link"

import { CodeBlock } from "../CodeBlock/CodeBlock"
import { NavPage } from "../NavPage/NavPage"
import { PageUpdated } from "../PageUpdated/PageUpdated"
import { TemplateSection } from "../TemplateSection/TemplateSection"
import { IPageNavigationItem } from "../../data/pageNavigationLists"

export const iconsPageNavigation: IPageNavigationItem[] = [
	{ linkName: "Introduction", href: "#introduction" },
	{ linkName: "Decorative Icons", href: "#decorativeIcons" },
	{ linkName: "Informative Icons", href: "#informativeIcons" },
	{ linkName: "Text Alternatives", href: "#textAlternatives" },
	{ linkName: "Icon Links", href: "#iconLinks" },
	{ linkName: "Icon Buttons", href: "#iconButtons" },
	{ linkName: "Use of Colour", href: "#useOfColour" },
	{ linkName: "Target Size", href: "#targetSize" },
	{ linkName: "WCAG Criteria", href: "#WCAGCriteria" },
	// { linkName: "Other Resources", href: "#otherResources" },
]

export const IconsTemplate = () => {
	return (
		<>
			<NavPage pageNavigation={iconsPageNavigation} />
			<article>
				<TemplateSection sectionName="introduction" title="Introduction">
					<p>
						Icons are small stylized graphical images that are often used on
						webpages to complement text. They are also often used alone instead
						of text in order to save space. They are commonly included in
						buttons and links.
					</p>
					<p>
						Icons should be added to a page using the inbuilt HTML img element
						or as an svg. This way, alternative text can be added to the icon if
						needed.
					</p>
				</TemplateSection>
				<TemplateSection sectionName="decorativeIcons" title="Decorative Icons">
					<p>
						An icon is decorative if it doesn't add any information to a page.
						This is often the case when icons are used to complement text,
						especially as part of links and buttons. If a SAVE button included
						both the text "Save" and an icon of a floppy disk the icon is
						decorative. It should have an empty alternative text to avoid the
						word "Save" being announced twice by screen readers.
					</p>
				</TemplateSection>
				<TemplateSection
					sectionName="informativeIcons"
					title="Informative and Functional Icons">
					<p>
						If an icon is informative or functional it needs to have alternative
						text. Examples could include an envelope icon next to an email
						address, a magnifying glass used as a search button or a cog to
						stand for settings. In each case, the alternative text should
						describe the function, for example "search" rather than "magnifying
						glass".
					</p>
				</TemplateSection>
				<TemplateSection
					sectionName="textAlternatives"
					title="Text Alternatives">
					<p>
						The text alternative for an icon depends upon its purpose. Is the
						icon purely decorative? Or does it serve a functional role like an
						icon pointing to the homepage?
					</p>
					<p>
						In HTML the text alternative is added to the img element which takes
						an alt attribute. The alt attribute should be present on every img
						element even if the icon is decorative. If the icon is an svg it
						must be given the role of img and a title to make it accessible.
					</p>
					<p>
						The alternative text can be read out by screen readers or converted
						into braille for refreshable braille displays. Without it, screen
						reader users may hear the whole image url instead, which can often
						be a string of incomprehensible letters and numbers.
					</p>
					<p>
						An icon may need different alternative text depending on where it is
						placed on a webpage. For example, an icon button of a magnifying
						glass may serve as a search button in one place and as a zoom button
						in another.
					</p>
					<CodeBlock
						codeSnippet={`<img src="url" alt="The text alternative goes here" />`}
						languageType="html"
					/>

					<CodeBlock
						codeSnippet={`<svg role="img" height="210" width="400">
	<title>The text alternative goes here</title>
	<path d="M120 10 L55 200 L265 180 Z" />
</svg>`}
						languageType="html"
					/>
				</TemplateSection>
				<TemplateSection sectionName="iconLinks" title="Icon Links">
					<p>
						You can turn an icon into a clickable link that takes you to another
						webpage. Since icon links don't have a visible link text, you need
						to use a different method to give the link an accessible name. These
						methods can include adding an aria-label, using a visibly-hidden
						class or adding an alt attribute to the image wrapped inside the
						link. See the <Link href={"/links"}>Links Page</Link> for detail of
						how to use these techniques.
					</p>
					<p>
						The important thing to remember when using icons as links is to
						describe the link destination rather than the content of the image.
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
				<TemplateSection sectionName="iconButtons" title="Icon Buttons">
					<p>
						Some buttons use only an icon to convey their function. In this case
						it's important to choose icons that are widely recognised and
						understood, otherwise it can be difficult to know their function.
						The icons should also have a suitable label. This can be done with
						the alt attribute or the aria-label attribute on the button.
					</p>

					<CodeBlock
						codeSnippet={`<button type="button" onclick="handleClick()">
	<img src="icon-url.png" alt="Save" />
</button>`}
						languageType={"html"}
					/>
					<CodeBlock
						codeSnippet={`<button type="button" onclick="handleClick()">
	<i class="fa-solid fa-floppy-disk" aria-label="Save"></i>
</button>`}
						languageType={"html"}
					/>
				</TemplateSection>
				<TemplateSection sectionName={"useOfColour"} title={"Use of Colour"}>
					<p>
						Icons are often used to communicate status. The colour of the icon
						should not be the only way to do this. Instead, use different icons
						or complement the icon with text. For example, if you have an icon
						to indicate online status, avoid green for online and red for
						offline as people with red-green colour vision deficiencies will
						have difficulty telling the two colours apart.
					</p>
				</TemplateSection>
				<TemplateSection sectionName={"targetSize"} title={"Target Size"}>
					<p>
						Icons are often quite small and if used as icon buttons they can be
						difficult to press. Therefore, they should have a minimum target
						size to make sure they can be activated even for users with
						dexterity limitations.
					</p>
					<p>
						The minimum target size should be at least 24 x 24 CSS pixels unless
						the interactive element has enough space so that it does not
						intersect another element, it has an equivalent larger control
						elsewhere on the same page, it is inline, or the presentation is
						considered essential.
					</p>
					<p>
						Ideally, the target size is even larger than 24 CSS pixels, making
						it easier to press. On mobile devices, 44 x 44 CSS pixels is the
						recommended size. This allows for the reduced accuracy of touch.
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
								href="https://www.w3.org/TR/WCAG21/#use-of-color"
								className="blockLink">
								1.4.1 Use of Color
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
								href="https://www.w3.org/TR/WCAG22/#link-purpose-in-context"
								className="blockLink">
								2.4.4 Link Purpose (in Context)
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
					</ul>
				</TemplateSection>
				{/* <TemplateSection sectionName="otherResources" title="Other Resources">
					<ul className="list">
						<li>
							<a
								href="https://www.w3.org/WAI/tutorials/images/"
								className="blockLink">
								W3C Images Tutorial
							</a>
						</li>
					</ul>
				</TemplateSection> */}
			</article>
			<PageUpdated date="8th July 2024" />
		</>
	)
}
