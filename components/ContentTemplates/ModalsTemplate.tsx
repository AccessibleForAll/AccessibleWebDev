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
					button or some event. The main window may still visible underneath
					although you should not be able to interact with it when the modal is
					open. Modals go by many names, including modal window, dialog, popup
					and even lightbox. On this page we will use the term modal throughout
					to describe this pattern.
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
				<ul className="list">
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
			<TemplateSection sectionName="usingDialog" title={"Using <dialog>"}>
				<p>
					The HTML &lt;dialog&gt; element has full support since Chrome 37, Edge
					79, Firefox 98 and Safari 15.4. If you need to support browsers older
					than this then using a different method is suggested.
				</p>
				<h3>HTML</h3>
				<p>
					The &lt;dialog&gt; element will handle focus if using a keyboard to
					navigate without the need for additional JavaScript. On opening the
					modal, focus will be placed on the first interactive item. If no
					interactive item exists then the focus is placed on the modal itself.
					All content behind the modal is made inert. Using the Escape key
					closes the modal. However, clicking on the modal backdrop does not
					automatically close the modal.
				</p>

				<CodeBlock
					codeSnippet={`<button id="openDialogBtn">Open dialog</button>
<dialog id="dialog" aria-labelledby="dialog_heading">
  <h2 id="dialog_heading">This is a heading</h2>
  <p>This is some placeholder text within the dialog.</p>
  <button type="button" id="cancelBtn">Cancel</button>
</dialog>`}
					languageType={"html"}
				/>
				<h3>CSS</h3>
				<p>
					The modal comes with some basic built in styles. The backdrop can be
					customised using the ::backdrop pseudo-element. Dialog styles can be
					overwritten by styling the dialog element directly.
				</p>
				<CodeBlock
					codeSnippet={`dialog::backdrop {
  background: rgb(0 0 0 / 70%);
}

dialog {
  border: 1px solid #000;
  box-shadow: 0 19px 38px rgb(0 0 0 / 12%), 0 15px 12px rgb(0 0 0 / 22%);
}`}
					languageType={"css"}
				/>
				<h3>JavaScript</h3>
				<p>
					Using the showModal() method will open the dialog element in a modal
					window (on top of the other content) and apply an implicit state of
					aria-modal="true". The modal can be closed with the close() method. No
					extra JavaScript is needed to handle keyboard focus, making background
					elements inert or closing the modal with the Escape key.
				</p>
				<CodeBlock
					codeSnippet={`const openDialogBtn = document.getElementById("openDialogBtn");
const dialog = document.getElementById("dialog");
const cancelBtn = document.getElementById("cancelBtn");

openDialogBtn.addEventListener("click", () => dialog.showModal());
cancelBtn.addEventListener("click", () => dialog.close());`}
					languageType={"javascript"}
				/>
			</TemplateSection>
			<TemplateSection sectionName="customModals" title="Custom Modals">
				<p>
					If you need to support browsers older than those listed above, then
					you may need to build a custom modal component. In this case you will
					need to add accessible information yourself.
				</p>
				<h3>HTML</h3>
				<p>
					In this case, the div used to create the modal is given a
					role="dialog" to indicate that this is a modal. It is labelled with
					aria-labelledby so that it announces the heading when the modal
					appears. It is also given a tabindex="-1" so that focus can be
					manually handled with JavaScript.
				</p>
				<CodeBlock
					codeSnippet={`<div id="wrapper">  
  <button type="button" id="openModal">Open Modal</button>
</div>

<div class="modalBackground hidden"></div>
<div role="dialog" id="modal" aria-labelledby="modal_heading" class="hidden" tabindex="-1">
   <h2 id="modal_heading">This is a heading</h2>
   <p>This is some placeholder text within the modal.</p>
   <button type="button" id="cancelBtn">Cancel</button>
</div>`}
					languageType={"html"}
				/>
				<h3>CSS</h3>
				<p>
					For this modal we can use the [role="dialog] attribute to add the
					styling. All of the positioning needs to be added as none of it is
					inbuilt, unlike the dialog element.
				</p>
				<CodeBlock
					codeSnippet={`.hidden {
  display: none;
}

[role="dialog"] {
  position: absolute;
  padding: 15px;
  border: 1px solid #000;
  background-color: #fff;
  min-width: 300px;
  top: 2rem;
  left: 50vw; 
  transform: translateX(-50%); 
  overflow: hidden;
  box-shadow: 0 19px 38px rgb(0 0 0 / 12%), 0 15px 12px rgb(0 0 0 / 22%);
  }

.modalBackground {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgb(0 0 0 / 70%);
}
`}
					languageType={"css"}
				/>
				<h3>JavaScript</h3>
				<p>
					In a custom modal you need to handle focus and inert manually. When
					the modal is opened, focus moves from the button to something inside
					the modal. In this case it moves to the modal itself, but it could
					also move to the heading or the first interactive element. The page
					content is wrapped in a div with id="wrapper" so can be selected. Once
					the modal is open the inert attribute is applied to the main content
					so that focus is trapped within the modal.
				</p>
				<p>
					When the modal is closed, the inert attribute needs to be removed from
					the main content. This must happen before you set focus back to the
					opening button. If not, then the button won't be found. An event
					listener also needs adding for the Escape key so that it also runs the
					closeModal function. In this custom component it is also possible to
					add an event to the modal backdrop to close the modal on click.
				</p>
				<CodeBlock
					codeSnippet={`const wrapper = document.getElementById("wrapper")
const openModalBtn = document.getElementById("openModal");
const cancelBtn = document.getElementById("cancelBtn");
const modal = document.getElementById("modal");
const modalBackground = document.querySelector(".modalBackground");


const openModal = () => {
  modal.classList.remove("hidden");
  modalBackground.classList.remove("hidden");
  modal.focus();
  wrapper.setAttribute("inert", "");  
}

const closeModal = () => {
 modal.classList.add("hidden");
 modalBackground.classList.add("hidden");
 wrapper.removeAttribute("inert")
 openModalBtn.focus()
}

openModalBtn.addEventListener("click", openModal)
cancelBtn.addEventListener("click", closeModal)
modalBackground.addEventListener("click", closeModal)
window.addEventListener("keyup", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal()
  }
})`}
					languageType={"javascript"}
				/>
			</TemplateSection>
			<TemplateSection sectionName="WCAGCriteria" title="WCAG Criteria">
				<ul className="list">
					<li>
						<a
							href="https://www.w3.org/TR/WCAG21/#keyboard"
							className="blockLink">
							2.1.1 Keyboard
						</a>
					</li>
					<li>
						<a
							href="https://www.w3.org/TR/WCAG21/#no-keyboard-trap"
							className="blockLink">
							2.1.2 No Keyboard Trap
						</a>
					</li>
					<li>
						<a
							href="https://www.w3.org/TR/WCAG21/#name-role-value"
							className="blockLink">
							4.1.2 Name, role, value
						</a>
					</li>
				</ul>
			</TemplateSection>
			<TemplateSection sectionName="otherResources" title="Other Resources">
				<ul className="list">
					<li>
						<a
							href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog"
							className="blockLink">
							MDN web docs - The Dialog element
						</a>
					</li>
					<li>
						<a
							href="https://adrianroselli.com/2020/10/dialog-focus-in-screen-readers.html"
							className="blockLink">
							Dialog Focus in Screen Readers by Adrian Roselli
						</a>
					</li>
					<li>
						<a
							href="https://www.scottohara.me/blog/2023/01/26/use-the-dialog-element.html"
							className="blockLink">
							Use the dialog element (reasonably) by Scott O'Hara
						</a>
					</li>
				</ul>
			</TemplateSection>
			<PageUpdated date="23rd June 2023" />
		</>
	)
}
