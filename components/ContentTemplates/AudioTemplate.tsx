import { audioPageNavigation } from "../../data/pageNavigationLists"
import { CodeBlock } from "../CodeBlock/CodeBlock"
import { NavPage } from "../NavPage/NavPage"
import { PageUpdated } from "../PageUpdated/PageUpdated"
import { TemplateSection } from "../TemplateSection/TemplateSection"
export const AudioTemplate = () => {
	return (
		<> <NavPage pageNavigation={audioPageNavigation}
		<TemplateSection sectionName="introduction"
		title="Introduction"></TemplateSection>	/>
	)
}
