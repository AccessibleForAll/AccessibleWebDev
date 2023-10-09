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
					{/* TODO: Write introduction */ }
				</p>
				</TemplateSection>
		</>
	)
}
