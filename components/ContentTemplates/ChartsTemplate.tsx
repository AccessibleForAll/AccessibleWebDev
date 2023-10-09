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
			<TemplateSection
				sectionName="howToAdd"
				title="How to How To Add Charts to Your Audio?">
				<p>{/* add paragraph on how to add charts to a website */}</p>
			</TemplateSection>
			<TemplateSection
				sectionName="accessibilityTips"
				title="Tips to make your charts accessible">
				<p>{/* add paragraph on how to make your charts accessible */}</p>
			</TemplateSection>
		</>
	)
}
