import { CodeBlock } from "../CodeBlock/CodeBlock"
import { NavPage } from "../NavPage/NavPage"
import { PageUpdated } from "../PageUpdated/PageUpdated"
import { TemplateSection } from "../TemplateSection/TemplateSection"
import { IPageNavigationItem } from "../../data/pageNavigationLists"

export const selectPageNavigation: IPageNavigationItem[] = [
	{ linkName: "Introduction", href: "#introduction" },
	{ linkName: "", href: "#" },

	{ linkName: "WCAG Criteria", href: "#WCAGCriteria" },
	{ linkName: "Other Resources", href: "#otherResources" },
]

export const IconsTemplate = () => {
	return (
		<>
			<NavPage pageNavigation={selectPageNavigation} />
			<article>
				<TemplateSection sectionName="introduction" title="Introduction">
					<p>Select</p>
				</TemplateSection>
				<TemplateSection sectionName="" title="">
					<p>blah</p>
				</TemplateSection>
				<TemplateSection sectionName="" title="">
					<p>blah</p>
				</TemplateSection>
				<TemplateSection sectionName="" title="">
					<p>blah</p>
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
					</ul>
				</TemplateSection>
				<TemplateSection sectionName="otherResources" title="Other Resources">
					<ul className="list">
						<li>
							<a
								href="https://www.24a11y.com/2019/select-your-poison/"
								className="blockLink">
								Select Your Poison by Sarah Higley
							</a>
						</li>
						<li>
							<a
								href="https://www.24a11y.com/2019/select-your-poison-part-2/"
								className="blockLink">
								Select Your Poison part 2: test all the things by Sarah Higley
							</a>
						</li>
						<li>
							<a
								href="https://adrianroselli.com/2021/03/under-engineered-select-menus.html"
								className="blockLink">
								Under-engineered Select Menus by Adrian Roselli
							</a>
						</li>
						<li>
							<a
								href="https://www.filamentgroup.com/lab/select-css.html"
								className="blockLink">
								Styling a Select Like it's 2019 by Scott Jehl
							</a>
						</li>
					</ul>
				</TemplateSection>
			</article>
			<PageUpdated date="29th July 2024" />
		</>
	)
}
