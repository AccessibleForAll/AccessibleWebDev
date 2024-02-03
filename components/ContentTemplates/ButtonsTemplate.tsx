import { TemplateSection } from "../TemplateSection/TemplateSection"
import { CodeBlock } from "../CodeBlock/CodeBlock"
import { FaSave } from "react-icons/fa"
import { NavPage } from "../NavPage/NavPage"
import { buttonPageNavigation } from "../../data/pageNavigationLists"
import { PageUpdated } from "../PageUpdated/PageUpdated"
import styles from "./ButtonsTemplate.module.css"

export const ButtonsTemplate = () => {
	const handleTextButton = () => {
		alert("This is a Text button")
	}

	const handleAddToBasketButton = () => {
		alert("This is an example Add to Basket button")
	}

	const handleTextAndIconButton = () => {
		alert("This is an example Text and Icon button")
	}
	return (
		<>
			<NavPage pageNavigation={buttonPageNavigation} />
			<TemplateSection sectionName="introduction" title="Introduction">
				<p>
					Buttons are interactive elements that perform an action when pressed.
					That action could be something like submitting a form or opening a
					menu.
				</p>
				<p>
					Buttons have their own semantic HTML element which comes with lots of
					inbuilt functionality. Using an HTML button means it can be reached by
					the tab key and activated with both a mouse and a keyboard
					automatically just by adding an onclick event. Using the semantic
					button element will save you lots of time.
				</p>

				<CodeBlock
					codeSnippet={`<button type="submit" onclick="handleClick()"></button>`}
					languageType={"html"}
				/>
				<p>
					If another element is used to create a button instead, such as a div,
					then functionality must be added to make the div behave exactly like a
					button. Adding the onclick event will not automatically make the
					element keyboard interactive. It also needs to:
				</p>
				<ul className="list">
					<li>Activate when a user presses the enter key</li>
					<li>Activate when a user presses the space key</li>
					<li>Be included in the tab sequence</li>
					<li>Be given the explicit role of button</li>
				</ul>
			</TemplateSection>
			<TemplateSection sectionName="textButtons" title="Text Buttons">
				<p>A text button is a button which has only text inside it.</p>
				<button className={styles.exampleButton} onClick={handleTextButton}>
					Text here
				</button>
				<CodeBlock
					codeSnippet={`<button type="button" onclick="handleClick()">Text here</button>`}
					languageType={"html"}
				/>
				<p>
					It gets its accessible name from the text between the opening and
					closing button tags. If your text clearly explains the button's
					purpose then this is an accessible button. However, if you have
					several text buttons with the same text you may need to do more to
					make them accessible.
				</p>
				<h3>Buttons with identical text</h3>
				<p>
					Let's say we have multiple products on a page, each with an "Add to
					basket" button. How do we help screen reader users and speech
					dictation users differentiate between the different buttons?
				</p>
				<ul>
					<li>
						Product 1{" "}
						<button
							className={styles.exampleButton}
							onClick={handleAddToBasketButton}>
							Add to basket
						</button>
					</li>
					<li>
						Product 2{" "}
						<button
							className={styles.exampleButton}
							onClick={handleAddToBasketButton}>
							Add to basket
						</button>
					</li>
					<li>
						Product 3{" "}
						<button
							className={styles.exampleButton}
							onClick={handleAddToBasketButton}>
							Add to basket
						</button>
					</li>
					<li>
						Product 4{" "}
						<button
							className={styles.exampleButton}
							onClick={handleAddToBasketButton}>
							Add to basket
						</button>
					</li>
					<li>
						Product 5{" "}
						<button
							className={styles.exampleButton}
							onClick={handleAddToBasketButton}>
							Add to basket
						</button>
					</li>
				</ul>
				<p>We could use CSS to visibly hide some extra text:</p>
				<CodeBlock
					codeSnippet={`.visibly-hidden {
	clip: rect(0 0 0 0); 
	clip-path: inset(50%);
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap; 
	width: 1px;
}`}
					languageType={"css"}
				/>
				<CodeBlock
					codeSnippet={`<button type="button" onclick="handleClick()">Add to basket
	<span class="visibly-hidden">Product 1</span>
</button>`}
					languageType={"html"}
				/>
				<p>
					This would then read out "Add to basket product 1" to screen reader
					users.
				</p>
				<p>
					However, it's important to be careful of word order when using this
					technique. If we had instead inserted the product name in the middle
					of the sentence, for example: "Add product 1 to basket" this can cause
					problems for users of speech input software.
				</p>
				<p>We could also use an aria-label.</p>
				<CodeBlock
					codeSnippet={`<button type="button" onclick="handleClick()" aria-label="Add to basket product 1">Add to basket</button>`}
					languageType={"html"}
				/>
				<p>
					Again, it is important that the start of the aria-label matches with
					the visible text on the button to help users of speech input software
					be able to activate the button.{" "}
				</p>
			</TemplateSection>
			<TemplateSection
				sectionName="textAndIconButtons"
				title="Text and Icon Buttons">
				<p>
					Some buttons have both text and icons inside. The icon can help
					complement the text and aid understanding. To prevent the accessible
					name from repetition, eg "Button, save icon, save", the icon should be
					given an empty(null) alt attribute or the state aria-hidden="true"
				</p>
				<button
					className={styles.exampleButton}
					type="button"
					onClick={handleTextAndIconButton}>
					<span>
						<FaSave size="1rem" aria-hidden="true" /> Save
					</span>
				</button>
				<CodeBlock
					codeSnippet={`<button type="button" onclick="handleClick()">
<img src="icon-url.png" alt="" />
	Text
</button>`}
					languageType={"html"}
				/>
				<CodeBlock
					codeSnippet={`<button type="button" onclick="handleClick()">
<img src="icon-url.png" aria-hidden="true" />
	Text
</button>`}
					languageType={"html"}
				/>
				<p>
					An empty alt attribute has the most wide-spread support, so that
					should be your go to choice when using icons. However, some icon
					libraries don't allow an alt attribute to be passed and that's where
					aria-hidden can be useful.
				</p>
			</TemplateSection>
			<TemplateSection sectionName="iconOnlyButtons" title="Icon-only buttons">
				<p>
					Some buttons use only an icon to convey their function. In this case
					it's important to choose icons that are widely recognised and
					understood, otherwise it can be difficult to know their function. The
					icons should also have a suitable label. This can be done with the alt
					attribute if using images or the aria-label attribute.
				</p>
				<button
					className={styles.exampleButton}
					type="button"
					onClick={handleTextAndIconButton}>
					<FaSave size="1rem" aria-label="Save" />
				</button>
				<CodeBlock
					codeSnippet={`<button type="button" onclick="handleClick()">
	<img src="icon-url.png" alt="Save" />
</button>`}
					languageType={"html"}
				/>
				<CodeBlock
					codeSnippet={`<button type="button" onclick="handleClick()">
	<i class="fa-solid fa-floppy-disk" aria-label="Save"></i>
</button>`}
					languageType={"html"}
				/>
				<p>
					Make sure that the label you give the icon matches the function of the
					button, not necessarily describing the actual icon.
				</p>
				<p>
					<strong>Do this:</strong>
				</p>
				<CodeBlock
					codeSnippet={`<button type="button" onclick="handleClick()">
	<i class="fa-solid fa-magnifying-glass" aria-label="Search"></i>
</button>`}
					languageType={"html"}
				/>
				<p>
					<strong>Don't do this:</strong>
				</p>
				<CodeBlock
					codeSnippet={`<button type="button" onclick="handleClick()">
	<i class="fa-solid fa-magnifying-glass" aria-label="Magnifying glass"></i>
</button>`}
					languageType={"html"}
				/>
			</TemplateSection>
			<TemplateSection sectionName="buttonStates" title="Button States">
				<p>
					Buttons can be used to communicate different states. A toggle button
					can communicate both an on and off state. Buttons can also have
					default, hover, focus, active and disabled states.
				</p>
				<h3>Default, hover, focus and active states</h3>
				<p>These states can be handled with CSS.</p>
				<ul>
					<li>
						<strong>Default state: </strong>
						The normal state of a button when it's not being interacted with.
						Any text or icon should have a contrast ratio of 4.5:1 with the
						button background color. The button background color should have a
						3:1 contrast ratio with the background.
						<div>
							<button
								className={styles.exampleButton}
								type="button"
								onClick={handleTextButton}>
								Default
							</button>
						</div>
					</li>
					<li>
						<strong>Hover state: </strong>
						How the button looks when hovered over with a mouse cursor. This
						state is not visible on all devices, most notably touch screens.
						It's not a requirement to have a hover state but if used then normal
						color contrast ratios apply.
						<div>
							<button
								className={styles.exampleHover}
								type="button"
								onClick={handleTextButton}>
								Hover
							</button>
						</div>
					</li>
					<li>
						<strong>Focus state: </strong>A button in focus should have a focus
						indicator which makes it easy to see where focus is on the screen.
						This is often a thicker border or outline around the button and
						should have a contrast ratio of at least 3:1 with both the button
						background color and the background behind the button. If the
						button's colors change from default they should still meet the
						required color contrast ratio between text and background.
						<div>
							<button
								className={styles.exampleFocus}
								type="button"
								onClick={handleTextButton}>
								Focus
							</button>
						</div>
					</li>
					<li>
						<strong>Active state: </strong>A button is active in the moment it
						is pressed. It will often look like it's been pressed.
						<div>
							<button
								className={styles.exampleActive}
								type="button"
								onClick={handleTextButton}>
								Active
							</button>
						</div>
					</li>
				</ul>
				<h3>Disabled state</h3>
				<p>
					A disabled button is a button that is not focusable or clickable. It
					has been given the disabled attribute. The browser styling often greys
					out the text making the contrast lower than 3:1 which makes disabled
					buttons difficult to see for some people. Often they are also not
					discoverable by users of assistive technology. Therefore, it's best to
					avoid disabled buttons and add in logic that provides error messages
					instead if the button is pressed.
				</p>
				<button
					className={styles.exampleDisabled}
					type="button"
					disabled
					onClick={handleTextButton}>
					Disabled button
				</button>
				<CodeBlock
					codeSnippet={`<button type="button" onclick="handleClick()" disabled>Disabled button</button>`}
					languageType={"html"}
				/>
				<h3>Toggle buttons - pressed and unpressed states</h3>
				<p>
					You might have a button that turns something on or off, or only has
					two states. One example of this might be a light/dark mode.
				</p>
				<p>
					In this case you need to add the extra information by using the aria
					attribute aria-pressed which can either be true or false. This can be
					toggled with the use of JavaScript. This lets screen reader users know
					the state of the button.The button may also dynamically change the
					text/icon to visually convey the state too.
				</p>
				<CodeBlock
					codeSnippet={`<button type="button" onclick="handleClick()" aria-pressed="true">Toggle button</button>`}
					languageType={"html"}
				/>
				<h3>Menus and popups - expanded and collapsed state</h3>
				<p>
					If a button is used to open a menu or popup then it should also
					communicate to screen readers whether the popup is shown or not. This
					is done with the aria-expanded attribute which can take true or false
					values. If the popup is shown then aria-expanded="true". If the popup
					is not shown then aria-expanded="false" and the screen reader will
					announce that the popup is collapsed. The state of aria-expanded can
					be controlled with JavaScript.
				</p>
				<CodeBlock
					codeSnippet={`<button type="button" onclick="handleClick()" aria-expanded="true">Button with popup</button>`}
					languageType={"html"}
				/>
			</TemplateSection>
			<TemplateSection sectionName="buttonOrLink" title="Button or Link?">
				<p>
					How do you know when it's best to use a button and when it's best to
					use a link?
				</p>
				<p>
					Don't let CSS dictate which element you use. The styling can always be
					changed. A simple rule of thumb is to think about what the element
					should do. Buttons are for actions and links are to take you to new
					places.
				</p>
				<p>
					Is it performing an action like opening a modal, a menu or some other
					popup? Is it applying some styling to a page like a bold or italic
					button in a text editor? Is it allowing you to save something or
					search for something? Then you should probably use a button.
				</p>
				<p>
					Is it taking you to another page or another area of the page? Then it
					should probably be a link.
				</p>
			</TemplateSection>
			<TemplateSection
				sectionName="touchTargetMinimum"
				title="Touch Target Minimum">
				<p>
					When it comes to creating accessible buttons for your websites and
					applications, it's important that they are easy to activate. To
					achieve this goal, WCAG suggests that buttons have a minimum target
					size of at least 24 by 24 CSS pixels. In doing so, users, especially
					those who suffer from mobility impairments like hand tremors or are
					amputees, have an easier time clicking on them.
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
					<li>
						<a
							href="https://www.w3.org/TR/WCAG21/#info-and-relationships"
							className="blockLink">
							1.3.1 Info and Relationships
						</a>
					</li>
					<li>
						<a
							href="https://www.w3.org/TR/WCAG21/#identify-purpose"
							className="blockLink">
							1.3.6 Identify Purpose
						</a>
					</li>
					<li>
						<a
							href="https://www.w3.org/TR/WCAG21/#contrast-minimum"
							className="blockLink">
							1.4.3 Contrast (minimum)
						</a>
					</li>
					<li>
						<a
							href="https://www.w3.org/TR/WCAG21/#non-text-contrast"
							className="blockLink">
							1.4.11 Non-text Contrast
						</a>
					</li>
					<li>
						<a
							href="https://www.w3.org/TR/WCAG21/#content-on-hover-or-focus"
							className="blockLink">
							1.4.13 Content on Hover or Focus
						</a>
					</li>
					<li>
						<a
							href="https://www.w3.org/TR/WCAG21/#keyboard"
							className="blockLink">
							2.1.1 Keyboard
						</a>
					</li>
					<li>
						<a
							href="https://www.w3.org/TR/WCAG21/#focus-visible"
							className="blockLink">
							2.4.7 Focus Visible
						</a>
					</li>
					<li>
						<a
							href="https://www.w3.org/TR/WCAG21/#label-in-name"
							className="blockLink">
							2.5.3 Label in Name
						</a>
					</li>
					<li>
						<a
							href="https://www.w3.org/TR/WCAG22/#target-size-enhanced"
							className="blockLink">
							2.5.5 Target Size (Enhanced)
						</a>
					</li>
					<li>
						<a
							href="https://www.w3.org/TR/WCAG22/#target-size-minimum"
							className="blockLink">
							2.5.8 Target Size (Minimum)
						</a>
					</li>
					<li>
						<a
							href="https://www.w3.org/TR/WCAG21/#on-focus"
							className="blockLink">
							3.2.1 On Focus
						</a>
					</li>
				</ul>
			</TemplateSection>

			<TemplateSection sectionName="otherResources" title="Other Resources">
				<ul className="list">
					<li>
						<a
							href="https://design-system.service.gov.uk/components/button/"
							className="blockLink">
							Gov.uk Design System Button
						</a>
					</li>
					<li>
						<a
							href="https://yatil.net/blog/buttons-vs-links"
							className="blockLink">
							Buttons vs. Links by Eric Eggert
						</a>
					</li>
				</ul>
			</TemplateSection>
			<PageUpdated date="18th February 2023" />
		</>
	)
}
