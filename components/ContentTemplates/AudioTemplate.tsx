import { audioPageNavigation } from "../../data/pageNavigationLists"
import { CodeBlock } from "../CodeBlock/CodeBlock"
import { NavPage } from "../NavPage/NavPage"
import { PageUpdated } from "../PageUpdated/PageUpdated"
import { TemplateSection } from "../TemplateSection/TemplateSection"
export const AudioTemplate = () => {
	return (
		<> <NavPage pageNavigation={audioPageNavigation}
		<TemplateSection sectionName="introduction"
		title="Introduction">
			</TemplateSection/>
		<TemplateSection sectionName="howToAdd"
		title="How To Add Closed Captions To Your Audio?"
		<p> Whether you are adding an introductory video about yourself on websites or embedded an audio clip of your favorite song to a game you're building, it's important to add closed captions to them. This will ensure that users who are deaf and or have TBIs (Traumatic Brain Injuries) can have an easier viewing experience.
		 </p>
		 <p> Example</p>
		 <CodeBlock
		 languageType="html"
		 codeSnippet= {`<video controls width="200">
  <source src="https://www.youtube.com/watch?v=0QHaxrUkSE" type="video/mp4" />
  <track
    default
    kind="captions"
    src="https://youtube.com/captions.vtt"
    srclang="en"
  />
</video>`}
		 />
		</TemplateSection>
	)
}
