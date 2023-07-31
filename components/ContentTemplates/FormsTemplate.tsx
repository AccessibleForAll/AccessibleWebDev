import { formsPageNavigation } from "../../data/pageNavigationLists"
import { CodeBlock } from "../CodeBlock/CodeBlock"
import { NavPage } from "../NavPage/NavPage"
import { PageUpdated } from "../PageUpdated/PageUpdated"
import { TemplateSection } from "../TemplateSection/TemplateSection"

export const FormsTemplate = () => {
	return (
		<>
			<NavPage pageNavigation={formsPageNavigation} />
			<TemplateSection sectionName="introduction" title="Introduction">
				<p>
					The web is filled with all types of digital forms. Digital forms are
					used to collect user information in an organized way. Whether
					inputting personal health information, completing a simple quiz, or
					placing an order for a local restaurant, forms are there to capture
					data.
				</p>
				<p>
					Examples of digital form elements include radio dial buttons, editable
					text fields, drop-down select elements, and text areas. When a form is
					not accessible, barriers are created that prevent the accurate input
					of data. Users may encounter difficulty using a keyboard to move
					through the forms, or they may miss information needed to complete
					data input accurately.
				</p>
				<p>
					Additionally, assistive technology such as screen readers may not be
					able to read the forms properly. It is imperative that users are able
					to interact with, understand, and complete forms on web pages with
					accuracy and without frustration.
				</p>
			</TemplateSection>
			<TemplateSection
				sectionName="whatToConsider"
				title="What Should We Consider When Building Accessible Forms?">
				<p>
					There are some key considerations when it comes to building forms.
				</p>
				<ul className="list">
					<li>
						Forms should be simple, understandable and have clear labels and
						instructions on how to input data.
					</li>
					<li>
						Forms must be keyboard operable. Users should be able to use the tab
						key to navigate through all form controls.
					</li>
					<li>
						Forms must be programmatically labelled to match the form control.
					</li>
					<li>
						Forms should provide validation and error notifications that do not
						rely on just one sensory characteristic to alert users.
					</li>

					<li>
						Any time limits are communicated up front, and users are able to
						extend time limits if necessary.
					</li>
				</ul>
			</TemplateSection>
			<TemplateSection
				sectionName="creatingForms"
				title="Creating Simple, Understandable Forms">
				<p>
					Users should be able to understand what the form is asking for and how
					to enter the data into these fields. A form should be demarcated with
					the &lt;form&gt; element. Inside the form element, there should be
					clearly identified sections and inputs with labels that ask for
					information in the required format.
				</p>
				<p>
					Provide simple instructions for filling out the form, including any
					required formatting guidelines. For example, if putting in a phone
					number or security number, the visual label before the text field
					should be:{" "}
				</p>
				<p>Phone number (XXX-XXX-XXXX): [text field]</p>
				<p>
					This is better than just having “Phone number” as the visual label, as
					it explicitly lets the user know the expected number format without
					having to guess.
				</p>
				<p>
					Additionally, forms should have good visual contrast between the text
					and background, as well as a clear delineation of the field input area
					and background area. This will make it easier for users to visually
					navigate, especially those with low vision or visual perceptual
					difficulties.
				</p>
			</TemplateSection>
			<TemplateSection
				sectionName="labelsAndInputControls"
				title="Form Labels and Input Controls">
				<p>
					Inputs are created using the &lt;input&gt; element. This element takes
					a type which specifies to the user what kind of data should be
					entered. Use the appropriate &lt;input&gt; type for each field, such
					as “text”, “email”, or “number”.
				</p>
				<p>
					Placeholder text can be helpful for providing examples or additional
					information, but it should not be used as a substitute for a semantic
					label. This is because it disappears when the input is in focus, which
					causes an extra load on memory.
				</p>
				<p>
					Let’s revisit our phone number example. the example shows a simple
					code example of a form with an area to place your phone number.
				</p>
				<CodeBlock
					codeSnippet={`<form>
	<label for="phone">Phone Number (XXX-XXX-XXXX):</label>
	<input type="tel" id="phone" name="phone">
</form>
`}
					languageType={"html"}
				/>
				<p>
					This code will work and create a form with the text “Phone number:”
					and an editable text field next to it to place a number. In the edit
					field, there will be the text “enter phone number” as an additional
					visual cue thanks to the placeholder attribute (remember that screen
					readers do not read placeholder text, so important information should
					be placed elsewhere).
				</p>
				<p>
					With the code in this format, the description “Phone number” is
					*visually* determined, and it is *programmatically* determined.
					Meaning the text “Phone Number” is attached meaningfully to the input
					area.
				</p>
				<p>
					To make sure a label and input are programmatically linked as well as
					visually linked we need to use attributes. The &lt;label&gt; element
					should have a “for” attribute and the &lt;input&gt; element should
					have an “id” attribute. The values of the for attribute and id
					attribute must match to connect the label to the input. In this
					example, the label represents both the visual description users see on
					the page and the programmatic description that is read by a screen
					reader.
				</p>
				<p>
					When the label area is selected by a user, the focus of the browser
					goes to the input field. This makes the tap/ click area larger for the
					user, which is especially helpful for those with dexterity and
					cognitive impairments. It also makes explicitly clear that these two
					areas belong together.
				</p>
			</TemplateSection>
			<TemplateSection
				sectionName="keyboardAccessibleForms"
				title="Keyboard Accessible Forms">
				<p>
					All forms should be navigable by using the keyboard only. Form
					controls are natively keyboard accessible when using the &lt;form&gt;
					element. Users should be able to press the tab or arrow buttons and
					move through all form elements and links. The form elements should be
					activated when the arrow or tab buttons are used (or given focus),
					then activated using the enter or spacebar key.
				</p>
				<p>
					When using JavaScript to create interactions and changes of state, the
					native keyboard accessibility of a form may become inoperable. Because
					there are interactions you can create that are only accessible by
					mouse, extra care should be taken to ensure they can also be accessed
					using the keyboard.
				</p>
				<p>
					Avoid using tables to style forms, instead use CSS. Placing a form in
					a &lt;table&gt; tag may cause navigation issues for assistive
					technology and those using a keyboard to move around the page.
					Manually testing your forms with a keyboard is imperative for catching
					errors caused by JavaScript and general layout issues.
				</p>
			</TemplateSection>
			<TemplateSection
				sectionName="formErrors"
				title="Error Validation and Changes in State">
				<p>
					It is essential that users know when they have placed the wrong
					information in the form. Error messages and alerts should be clear,
					easy to understand, and given in multiple ways.
				</p>
				<p>
					This alert can be in the form of a popup box (navigable by keyboard)
					or an alert next to the form control. The alert should be perceivable
					by everyone. Therefore, alerts should not be limited to a sound, or
					text, or be conveyed by changing the element to a red color. The alert
					should also be readable by a screen reader.
				</p>
				{
					// INFO: move this section!
				}
				<p>
					Additionally, users should know when an input field is required. This
					can be done using the “required” attribute. An example using the Phone
					number form control would go as follows:
				</p>
				<CodeBlock
					codeSnippet={`<form>
	<label for="phone">Phone Number (XXX-XXX-XXXX):</label>
	<input type="tel" id="phone" name="phone" required>
</form>
`}
					languageType={"html"}
				/>
				<p>
					What would be a good way to convey an error if someone entered their
					phone number in an incorrect format? Preferably, the error message
					would appear close to the input, specifying what the error is in as
					much detail as possible. An icon next to the text would help
					differentiate it from other text. The error should also be added to a
					&lt;div&gt; element with role=alert in order to be read out to a
					screen reader user.
				</p>
			</TemplateSection>
			<TemplateSection sectionName="WCAGCriteria" title="WCAG Criteria">
				<ul className="list">
					<li>
						<a href="https://www.w3.org/TR/WCAG21/#info-and-relationships">
							1.3.1 Info and Relationships
						</a>
					</li>
					<li>
						<a href="https://www.w3.org/TR/WCAG21/#sensory-characteristics">
							1.3.3 Sensory Characteristics
						</a>
					</li>
					<li>
						<a href="https://www.w3.org/TR/WCAG21/#identify-input-purpose">
							1.3.5 Identify Input Purpose
						</a>
					</li>
					<li>
						<a href="https://www.w3.org/TR/WCAG21/#use-of-color">
							1.4.1 Use of Color
						</a>
					</li>
					<li>
						<a href="https://www.w3.org/TR/WCAG21/#keyboard">2.1.1 Keyboard</a>
					</li>
					<li>
						<a href="https://www.w3.org/TR/WCAG21/#timing-adjustable">
							2.2.1 Timing Adjustable
						</a>
					</li>
					<li>
						<a href="https://www.w3.org/TR/WCAG21/#timeouts">2.2.6 Timeouts</a>
					</li>
					<li>
						<a href="https://www.w3.org/TR/WCAG21/#headings-and-labels">
							2.4.6 Headings and Labels
						</a>
					</li>
					<li>
						<a href="https://www.w3.org/TR/WCAG21/#focus-visible">
							2.4.7 Focus Visible
						</a>
					</li>
					<li>
						<a href="https://www.w3.org/TR/WCAG21/#label-in-name">
							2.5.3 Label in Name
						</a>
					</li>
					<li>
						<a href="https://www.w3.org/TR/WCAG21/#on-input">3.3.2 On Input</a>
					</li>
					<li>
						<a href="https://www.w3.org/TR/WCAG21/#error-identification">
							3.3.1 Error Identification
						</a>
					</li>
					<li>
						<a href="https://www.w3.org/TR/WCAG21/#labels-or-instructions">
							3.3.2 Labels or Instructions
						</a>
					</li>
					<li>
						<a href="https://www.w3.org/TR/WCAG21/#error-suggestion">
							3.3.3 Error Suggestion
						</a>
					</li>
					<li>
						<a href="https://www.w3.org/TR/WCAG21/#error-prevention-legal-financial-data">
							3.3.4 Error Prevention
						</a>
					</li>
					<li>
						<a href="https://www.w3.org/TR/WCAG21/#name-role-value">
							4.1.2 Name, Role, Value
						</a>
					</li>
				</ul>
			</TemplateSection>
			<PageUpdated date="25th July 2023" />
		</>
	)
}
