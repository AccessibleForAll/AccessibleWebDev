import { iconsPageNavigation } from "../../data/pageNavigationLists"
import { CodeBlock } from "../CodeBlock/CodeBlock"
import { NavPage } from "../NavPage/NavPage"
import { PageUpdated } from "../PageUpdated/PageUpdated"
import { TemplateSection } from "../TemplateSection/TemplateSection"

// { linkName: "Introduction", href: "#introduction" },
// 	{ linkName: "Decorative Icons", href: "#decorativeIcons" },
// 	{ linkName: "Informative Icons", href: "#informativeIcons" },
// 	{ linkName: "Text Alternatives", href: "#textAlternatives" },
// 	{ linkName: "Icon Links and Buttons", href: "#iconLinksAndButtons" },
// 	{ linkName: "WCAG Criteria", href: "#WCAGCriteria" },
// 	{ linkName: "Other Resources", href: "#otherResources" },

export const IconsTemplate = () => {
	return (
		<>
			<NavPage pageNavigation={iconsPageNavigation} />
			<article>
				<TemplateSection sectionName="introduction" title="Introduction">
					Intro
				</TemplateSection>
				<TemplateSection sectionName="decorativeIcons" title="Decorative Icons">
					Decorative icons
				</TemplateSection>
				<TemplateSection
					sectionName="informativeIcons"
					title="Informative Icons">
					Informative icons
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
						In HTML the text alternative is added to the image element which
						takes an alt attribute. The alt attribute should be present on every
						img element. If the image is an svg it must be given the role of
						image and a title to make it accessible.
					</p>
					<p>
						The alternative text can be read out by screen readers or converted
						into braille for refreshable braille displays. Without it, screen
						reader users may hear the whole image url instead, which can often
						be a string of incomprehensible letters and numbers.
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
				<TemplateSection
					sectionName="iconLinksAndButtons"
					title="Icon Links and Buttons">
					Icon links and buttons
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
								href="https://www.w3.org/TR/WCAG21/#use-of-color"
								className="blockLink">
								1.4.1 Use of Color
							</a>
						</li>
					</ul>
				</TemplateSection>
				<TemplateSection sectionName="otherResources" title="Other Resources">
					<ul className="list">
						<li>
							<a
								href="https://www.w3.org/WAI/tutorials/images/"
								className="blockLink">
								W3C Images Tutorial
							</a>
						</li>
					</ul>
				</TemplateSection>
			</article>
			<PageUpdated date="29th June 2024" />
		</>
	)
}
