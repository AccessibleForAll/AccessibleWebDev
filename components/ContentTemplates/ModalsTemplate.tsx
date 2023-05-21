import { TemplateSection } from "../TemplateSection/TemplateSection"
import { CodeBlock } from "../CodeBlock/CodeBlock"
import { NavPage } from "../NavPage/NavPage"
import { modalPageNavigation } from "../../data/pageNavigationLists"
import { PageUpdated } from "../PageUpdated/PageUpdated"

export const ModalsTemplate = () => {
	return (
		<>
			<NavPage pageNavigation={modalPageNavigation} />
			<TemplateSection sectionName="introduction" title="Introduction">
				<p>
					Modals are elements of a website or application that are appear on top
					of the main window. They are usually activated by the click of a
					button or some event. The main window is still visible although you
					should not be able to interact with it when the modal is open. Modals
					go by many names, including modal window, dialog, popup and even
					lightbox. On this page we will use the term modal throughout to
					describe this pattern.
				</p>
				<p>
					Before 2023, there was no semantic HTML element that could be used to
					create a modal. That means developers combined HTML elements to create
					their own modals. Many different patterns for modals exist out in the
					wild but unfortunately many are not accessible.
				</p>
				<p>
					In 2023, the dialog element was added to the HTML specification in an
					attempt to minimise the need for developers to build their own modals.
					On this page you will find examples of two accessible modals, one with
					the dialog element and one without.
				</p>
			</TemplateSection>
			<TemplateSection
				sectionName="howAModalShouldWork"
				title="How a modal should work">
				<ul>
					<li>
						Things behind the modal should become inactive when the modal is
						open.
					</li>
					<li>
						The focus should move to an element within the modal when it opens.
					</li>
					<li>
						The focus should move back to the original activating element when
						the modal closes.
					</li>
					<li>
						The focus should be trapped within the modal when open - it should
						not be possible to tab to something outside of the modal when it is
						open.
					</li>
					<li>
						It should be possible to close the modal by pressing the Escape key.
					</li>
					<li>
						The modal should not be part of the tab order when it is closed.
					</li>
				</ul>
			</TemplateSection>
		</>
	)
}
