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
				<p>
					An added benefit of transcripts is that they can be more easily
					translated into other languages. This makes the audio content
					available to a wider range of people.
				</p>
			</TemplateSection>
			<TemplateSection sectionName={"captions"} title={"Captions"}>
				<p>
					Captions are a text version of audio displayed alongside video inside
					the media player. They should include all forms of audio such as
					dialogue, background music, sound effects and anything else relevant
					to the person watching. If the video is prerecorded the captions
					should be synced with the audio. If the video is live there can
					sometimes be a short delay as the captions are being added in real
					time by professional real-time captioners.
				</p>
				<p>
					There are two types of captions: Open Captions and Closed Captions.
				</p>
				<h3>Open Captions</h3>
				<p>
					Open captions are captions that are burned into the video track. They
					are always visible when the video is playing and there is no way to
					adjust the font size or style of the captions. They do however provide
					a consistent experience for everyone.
				</p>
				<h3>Closed Captions</h3>
				<p>
					Closed captions are provided on a separate audio track which means
					they can be switched on and off by the user. Often the user will also
					have some control over the size and style of the captions so they can
					be adjusted to suit their personal needs. However, closed caption
					support may differ between different media players.
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
