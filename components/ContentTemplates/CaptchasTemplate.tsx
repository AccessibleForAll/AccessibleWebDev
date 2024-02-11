import { captchasPageNavigation } from "../../data/pageNavigationLists"
import { NavPage } from "../NavPage/NavPage"
import { TemplateSection } from "../TemplateSection/TemplateSection"

export const CaptchasTemplate = () => {
	return (
		<>
			<NavPage pageNavigation={captchasPageNavigation} />
			<TemplateSection sectionName="introduction" title="Introduction">
				<p>
					CAPTCHA stands for Completely Automated Public Turing test to tell
					Computers and Humans Apart. CAPTCHAs are tests to prove you are human
					and not a bot, such as picking out objects from a set of images,
					listening to a garbled audio or trying to pick out letters and numbers
					from distorted text.
				</p>
				<p>
					CAPTCHAs are inherently not accessible by design. They rely on human
					senses and cognition which means that people with certain disabilities
					are unable to complete them.
				</p>
			</TemplateSection>
			<TemplateSection
				sectionName={"captchaIssues"}
				title={"What's the issue with CAPTCHAs?"}>
				<p>
					The easiest way to explain the issues with CAPTCHAs is with examples.
				</p>
				<h3>Visual</h3>
				<p>
					Any CAPTCHA relying on sight, such as picking all the traffic light
					images, or writing the letters in a distorted text, are not accessible
					to people who are blind, are deaf-blind,have low vision or have a
					reading disability such as dyslexia.
				</p>
				<h3>Audio</h3>
				<p>
					Any CAPTCHA relying on audio, such as picking out a word in the middle
					of a distorted soundtrack, are not accessible to people who are deaf,
					hard of hearing or those who have audio processing disorders.
				</p>
				<h3>Maths challenge</h3>
				<p>
					Any CAPTCHA that relies on doing calculations, even those considered
					simple such as 1 + 2, are not accessible to some people with cognitive
					disabilities, learning disabilities or those who have anxiety.
				</p>
				<h3>Alignment challenges</h3>
				<p>
					Any CAPTCHA relying on aligning two images are not accessible to
					people with vision disabilities or motor disabilities.
				</p>
				<h3>Click to prove you're not a robot</h3>
				<p>
					Even having a checkbox CAPTCHA can be difficult for some people
					because if they can't click it, sometimes another more complicated
					CAPTCHA is triggered instead.
				</p>
			</TemplateSection>
			<TemplateSection
				sectionName={"accessibleCAPTCHA"}
				title={"Accessible CAPTCHA"}>
				<p>
					The most accessible way to make CAPTCHA accessible is to remove it.
					Unless you have a large problem with spam then CAPTCHA is probably not
					needed. You can try using things like honeypots for form submission.
					These are hidden form fields that only bots can find. Or consider two
					factor authentication for creating accounts and logging into services.
				</p>
				<p>
					If you must use CAPTCHA then you must provide multiple ways for people
					to attempt the CAPTCHA. This means that if people can't fill in a
					visual CAPTCHA due to a disability, they can attempt an audio CAPTCHA
					instead.
				</p>
				<p>
					Even having two types of CAPTCHA does not make your site accessible
					for everyone. If using CAPTCHA is the only way to get to a certain
					part of a website or perform a specific action, then you also need to
					provide a way for people who can't get past the CAPTCHAs to get help.
				</p>
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
			<TemplateSection sectionName={"otherResources"} title={"Other Resources"}>
				<ul>
					<li>
						<a href="https://www.w3.org/TR/turingtest/" className="blockLink">
							The inaccessibility of CAPTCHAS
						</a>
					</li>
				</ul>
			</TemplateSection>
		</>
	)
}
