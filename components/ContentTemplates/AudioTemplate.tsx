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
					audio as is. Nothing is paraphrased or summarised. They should include
					information about who is speaking and time stamps can also be useful,
					although not required, especially if the transcript is for a video.
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
					time by professional real-time captioners. Most online video services
					offer the ability to upload caption files alongside the video. It is
					important to choose a video upload service with these capabilities.
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
					support may differ between different media players. The closed
					captions should be easy to access. Ideally, the button to turn them on
					and off is at the same level as the play/pause button in the media
					player.
				</p>
				<h3>Auto-generated captions</h3>
				<p>
					When using captions within video-conferencing tools or for live events
					then auto-generated captions can provide some help. They are generally
					said to be around 80% accurate. However, this still means that 20% of
					information is lost. Auto-generated captions also become less accurate
					for people with accents and often are only available for English.
				</p>
				<p>
					Auto-generated captions are better than nothing but they are not
					sufficient to be WCAG compliant. If you have the possibility to
					provide real time captioning, or even sign language, for live events
					then that should be the preference. Auto-generated captions should
					also be edited if a recording of the live event is being uploaded to a
					video-sharing platform afterwards.
				</p>
			</TemplateSection>
			<TemplateSection
				sectionName="howToAdd"
				title="How To Add Closed Captions To Your Audio?">
				<p>
					Whether you are adding an introductory video about yourself on
					websites or embedding an audio clip of your favorite song to a game
					you're building, it's important to add closed captions to them. This
					will ensure that users who need captions have an easier viewing
					experience.
				</p>
				<p>
					If using the video element within HTML you can specify a captions
					track by linking to a vtt file and specifying that the kind is
					captions. Multiple caption tracks in different languages can be added
					if necessary.
				</p>
				<CodeBlock
					languageType="html"
					codeSnippet={`<video controls width="200">
  <source src="video.mp4" type="video/mp4" />
  <track
    default
    kind="captions"
    src="https://youtube.com/captions.vtt"
    srclang="en"
  />
</video>
`}
				/>
				<p>
					Video upload services such as YouTube and Vimeo allow you to upload
					captions in various file formats including VTT, WebVTT and SRT.
				</p>
			</TemplateSection>
			<TemplateSection sectionName={"signLanguage"} title={"Sign Language"}>
				<p>
					There are over 300 different sign languages used around the world. For
					many deaf and hard of hearing people it is their primary method of
					communication and may be easier to understand or be less cognitively
					demanding than reading captions or transcripts.
				</p>
				<p>
					Sign language is more often used for live events as information can be
					conveyed more quickly than using live captions. Important information
					on a website could also be conveyed by embedding videos of the
					information being signed.
				</p>
			</TemplateSection>
			<TemplateSection
				sectionName={"accessibleMediaPlayers"}
				title={"Accessible Media Players"}>
				<p>
					The audio and video media players included in the HTML specification
					are very basic and will require some work to make them accessible.
					Many video upload/sharing services exist where work is well underway
					to provide an accessible experience for users so it is often
					beneficial to use such a service instead and embed the media player
					into your site. However, it's always important to check any third
					party tool you choose to use to make sure it is accessible.
				</p>
				<p>
					The key things to check when looking for a media player are that it is
					keyboard accessible and doesn't trap keyboard focus. It should also
					have the ability to add captions and the captions should be easy to
					find and operate with assistive technology.
				</p>
			</TemplateSection>
			<TemplateSection sectionName={"WCAGCriteria"} title={"WCAG Criteria"}>
				<ul className="list">
					<li>
						<a
							href="https://www.w3.org/TR/WCAG22/#audio-only-and-video-only-prerecorded"
							className="blockLink">
							1.2.1 Audio-only and Video-only (prerecorded)
						</a>
					</li>
					<li>
						<a
							href="https://www.w3.org/TR/WCAG22/#captions-prerecorded"
							className="blockLink">
							1.2.2 Captions (prerecorded)
						</a>
					</li>
					<li>
						<a
							href="https://www.w3.org/TR/WCAG22/#audio-description-or-media-alternative-prerecorded"
							className="blockLink">
							1.2.3 Audio Description or Media Alternative (prerecorded)
						</a>
					</li>
					<li>
						<a
							href="https://www.w3.org/TR/WCAG22/#captions-live"
							className="blockLink">
							1.2.4 Captions (live)
						</a>
					</li>
					<li>
						<a
							href="https://www.w3.org/TR/WCAG22/#audio-description-prerecorded"
							className="blockLink">
							1.2.5 Audio Description (prerecorded)
						</a>
					</li>
					<li>
						<a
							href="https://www.w3.org/TR/WCAG22/#sign-language-prerecorded"
							className="blockLink">
							1.2.6 Sign Language (prerecorded)
						</a>
					</li>
					<li>
						<a
							href="https://www.w3.org/TR/WCAG22/#media-alternative-prerecorded"
							className="blockLink">
							1.2.8 Media Alternative (prerecorded)
						</a>
					</li>
					<li>
						<a
							href="https://www.w3.org/TR/WCAG22/#audio-only-live"
							className="blockLink">
							1.2.9 Audio-only (live)
						</a>
					</li>
					<li>
						<a
							href="https://www.w3.org/TR/WCAG22/#sensory-characteristics"
							className="blockLink">
							1.3.3 Sensory characteristics
						</a>
					</li>
					<li>
						<a
							href="https://www.w3.org/TR/WCAG22/#audio-control"
							className="blockLink">
							1.4.2 Audio Control
						</a>
					</li>
					<li>
						<a
							href="https://www.w3.org/TR/WCAG22/#low-or-no-background-audio"
							className="blockLink">
							1.4.7 Low or No Background Audio
						</a>
					</li>
				</ul>
			</TemplateSection>
			<TemplateSection sectionName={"resources"} title={"Resources"}>
				<ul className="list">
					<li>
						<a href="https://www.w3.org/WAI/media/av/" className="blockLink">
							WAI Making Audio and Video Media Accessible
						</a>
					</li>
				</ul>
			</TemplateSection>
			<PageUpdated date="7th October 2023" />
		</>
	)
}
