import { CodeBlock } from "../CodeBlock/CodeBlock"
import { NavPage } from "../NavPage/NavPage"
import { PageUpdated } from "../PageUpdated/PageUpdated"
import { TemplateSection } from "../TemplateSection/TemplateSection"
import { chartPageNavigation } from "../../data/pageNavigationLists"

export const ChartsTemplate = () => {
	return (
		<>
			<NavPage pageNavigation={chartPageNavigation} />
			<TemplateSection sectionName="introduction" title="Introduction">
				<p>
					The chart is a visual representation of data that uses symbols, lines,
					or bars to convey information. Whether it's comparing features of two
					mobile devices on a website, results of a survey on a social media
					post, or a person's monthly progress in their goal, charts should be
					conveyed in a way that is easy to for all users to read and
					understand.
				</p>
			</TemplateSection>
			<TemplateSection sectionName="typesOfCharts" title="Types of Charts">
				<p>
					Common types of that are used on the web include:
					<ol>
						<li>Comparison Charts: Often used to compare two products</li>
						<li>Bar Charts:Often used to used to compare sale results</li>
						<li>Line Charts: Often used to convey a company's history</li>
					</ol>
				</p>
			</TemplateSection>
			<TemplateSection
				sectionName="howToAdd"
				title="How to Add Charts to your websites">
				<p>
					There are many methods to add a chart to your website, but here's a
					simple way to this:
					{/* add code block and steps here */}
				</p>
			</TemplateSection>
			<TemplateSection
				sectionName="accessibilityTips"
				title="Tips to make your charts accessible">
				<p>{/* add paragraph on how to make your charts accessible */}</p>
			</TemplateSection>
		</>
	)
}
