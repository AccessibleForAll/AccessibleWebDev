import { TemplateSection } from "../TemplateSection/TemplateSection"
import { CodeBlock } from "../CodeBlock/CodeBlock"
import { FaSave } from "react-icons/fa"

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
				/>
				<p>
					If another element is used to create a button instead, such as a div,
					then functionality must be added to make the div behave exactly like a
					button. Adding the onclick event will not automatically make the
					element keyboard interactive. It also needs to:
				</p>
				<ul>
					<li>Activate when a user presses the enter key</li>
					<li>Activate when a user presses the space key</li>
					<li>Be included in the tab sequence</li>
					<li>Be given the explicit role of button</li>
				</ul>
			</TemplateSection>
			<TemplateSection sectionName="textButtons" title="Text Buttons">
				<p>A text button is a button which has only text inside it.</p>
				<button onClick={handleTextButton}>Text here</button>
				<CodeBlock
					codeSnippet={`<button type="button" onclick="handleClick()">Text here</button>`}
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
						<button onClick={handleAddToBasketButton}>Add to basket</button>
					</li>
					<li>
						Product 2{" "}
						<button onClick={handleAddToBasketButton}>Add to basket</button>
					</li>
					<li>
						Product 3{" "}
						<button onClick={handleAddToBasketButton}>Add to basket</button>
					</li>
					<li>
						Product 4{" "}
						<button onClick={handleAddToBasketButton}>Add to basket</button>
					</li>
					<li>
						Product 5{" "}
						<button onClick={handleAddToBasketButton}>Add to basket</button>
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
}
					
<button type="button" onclick="handleClick()">Add to basket
	<span class="visibly-hidden">Product 1</span>
</button>`}
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
				<button type="button" onClick={handleTextAndIconButton}>
					<FaSave color="black" size="1rem" aria-hidden="true" /> Save
				</button>
				<CodeBlock
					codeSnippet={`<button type="button" onclick="handleClick()">
	<img src="icon-url.png" alt="" />
		Text
</button>`}
				/>
				<CodeBlock
					codeSnippet={`<button type="button" onclick="handleClick()">
	<img src="icon-url.png" aria-hidden="true" />
		Text
</button>`}
				/>
				<p>
					An empty alt attribute has the most wide-spread support so that should
					be your go to choice when using icons. However, some icon libraries
					don't allow an alt attribute to be passed and that's where aria-hidden
					can be useful.
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
				<button type="button" onClick={handleTextAndIconButton}>
					<FaSave color="black" size="1rem" aria-label="Save" />
				</button>
				<CodeBlock
					codeSnippet={`<button type="button" onclick="handleClick()">
	<img src="icon-url.png" alt="Save" />
</button>`}
				/>
				<CodeBlock
					codeSnippet={`<button type="button" onclick="handleClick()">
	<i class="fa-solid fa-floppy-disk" aria-label="Save"></i>
</button>`}
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
				/>
				<p>
					<strong>Don't do this:</strong>
				</p>
				<CodeBlock
					codeSnippet={`<button type="button" onclick="handleClick()">
	<i class="fa-solid fa-magnifying-glass" aria-label="Magnifying glass"></i>
</button>`}
				/>
			</TemplateSection>
		</>
	)
}
