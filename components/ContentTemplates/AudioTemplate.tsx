import { CodeBlock } from "../CodeBlock/CodeBlock"
import { NavPage } from "../NavPage/NavPage"
import { PageUpdated } from "../PageUpdated/PageUpdated"
import { TemplateSection } from "../TemplateSection/TemplateSection"
import { audioPageNavigation } from "../../data/pageNavigationLists"

export const AudioTemplate = () => {
	return (
		<>
			<NavPage pageNavigation={audioPageNavigation} />
			<TemplateSection sectionName="introduction" title="Introduction">
				<p>
					Any form of audio on a website, whether prerecorded or live, audio
					only or as part of a video or animation, should be provided in an
					alternative form so that it can be perceived by people that can't
					access the audio. Such alternatives include transcripts, captions and
					sign language.
				</p>
			</TemplateSection>
			<TemplateSection sectionName={"transcripts"} title={"Transcripts"}>
				<p>
					An audio transcript is a text version of the audio in a prerecorded
					audio or video file. It should be located close to the audio or video
					file so that it is easy to find for anyone that wishes to read it. As
					a transcript can be long, it is adequate to provide a link to the
					transcript in close proximity to the audio or video file.
				</p>
				<p>
					Transcripts should identify who is speaking and include any relevant
					background sounds. Full verbatim transcripts include every sound, even
					ums and ahs, that occured in the original audio. Clean verbatim
					transcripts remove these extra sounds whilst leaving the rest of the
					audio as is. Nothing is paraphrased or summarised.
				</p>
			</TemplateSection>
			<TemplateSection sectionName={"captions"} title={"Captions"}>
				<p>
					Captions section - open and closed. Explain difference. Option to
					change font size, color etc of closed captions.
				</p>
			</TemplateSection>
			<TemplateSection
				sectionName="howToAdd"
				title="How To Add Closed Captions To Your Audio?">
				<p>
					Whether you are adding an introductory video about yourself on
					websites or embedded an audio clip of your favorite song to a game
					you're building, it's important to add closed captions to them. This
					will Whether you are adding an introductory video about yourself on
					websites or embedded an audio clip of your favorite song to a game
					you're building, it's important to add closed captions to them. This
					will ensure that users who are deaf and or have TBIs (Traumatic Brain
					Injuries) can have an easier viewing experience.
				</p>
				<p> Example</p>
				<CodeBlock
					languageType="html"
					codeSnippet={`<video controls width="200">
  <source src="https://www.youtube.com/watch?v=0QHaxrUkSE" type="video/mp4" />
  <track
    default
    kind="captions"
    src="https://youtube.com/captions.vtt"
    srclang="en"
  />
</video>
`}
				/>
			</TemplateSection>
			<TemplateSection sectionName={"signLanguage"} title={"Sign Language"}>
				<p>Sing language info</p>
			</TemplateSection>
			<TemplateSection
				sectionName={"accessibleMediaPlayers"}
				title={"Accessible Media Players"}>
				<p>
					Media player section - placement of caption button at same heirarchy
					as play/pause etc. Keyboard operable
				</p>
			</TemplateSection>
			<TemplateSection sectionName={"WCAGCriteria"} title={"WCAG Criteria"}>
				<p>WCAG section</p>
			</TemplateSection>
			<TemplateSection sectionName={"resources"} title={"Resources"}>
				<p>Resources section</p>
			</TemplateSection>
			<PageUpdated date={"Update me"} />
		</>
	)
}
