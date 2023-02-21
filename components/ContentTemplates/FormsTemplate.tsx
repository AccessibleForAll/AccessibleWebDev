import Image from "next/image"
import { NavPage } from "../NavPage/NavPage"
import { CodeBlock } from "../CodeBlock/CodeBlock"
import { imagePageNavigation } from "../../data/pageNavigationLists"
import { TemplateSection } from "../TemplateSection/TemplateSection"

export const FormsTemplate = () => {
	return (
		<>
			<NavPage pageNavigation={imagePageNavigation} />
			<article>
				<TemplateSection sectionName="intro" title="Introduction">
					<p>
						Web-accessible forms are an important aspect of creating an
						inclusive and user-friendly website. They give access to users who
						may be navigating your page using only a keyboard, using a screen
						reader, or using various software including speech-to-text and
						text-to-speech.
					</p>
					<p>
						{" "}
						In this article, we will discuss best practices for designing and
						implementing forms on webpages. We will also demonstrate some
						examples of coding forms with HTML only, and examples with
						Accessible Rich Internet Applications (ARIA).
					</p>
					<div className="imageContainer">
						<Image
							src="/images/imagesTemplate/loginform.png"
							alt="log in page"
							width={500}
							height={300}
							layout="intrinsic"
						/>
					</div>
				</TemplateSection>
				<TemplateSection
					sectionName="whyForms"
					title="What Makes a Form Accessible?">
					<p>missing something????</p>
					<p>
						Without special attention to how you build your forms, users may not
						be able to percieve the information the form is asking for. Paying
						attention to semantic HTML and adding in ARIA as needed, helps to
						clarify what information is being requested in a form.
					</p>
					<p>
						An Accessible form includes:
						<ul className="unorderedLists">
							<li>
								Semantic HTML elements: Use the appropriate HTML elements for
								the purpose of the form and its elements. For example:
								<ul className="unorderedLists">
									<li>
										<code> &lt;form&gt; </code> for the form
									</li>
									<li>
										<code> &lt;label&gt; </code> for labels
									</li>
									<li>
										<code> &lt;input&gt; </code> for text inputs
									</li>
									<li>
										<code> &lt;button&gt; </code> for buttons
									</li>
								</ul>
							</li>
							<li>
								Proper structure: Use headings, lists, and other structural
								elements to organize the content of the form in a logical and
								hierarchical way. This will help screen readers and other
								assistive technologies to understand the structure and purpose
								of the form.
							</li>
							<li>
								Clear and descriptive labels: Use the
								<code> &lt;label&gt; </code> element to provide clear and
								descriptive labels for form elements. This will help users
								understand the purpose of each form element and provide a clear
								association between the label and the form element.
							</li>
							<li>
								Use of the placeholder attribute: The placeholder attribute can
								be used to provide a hint or example of the expected input, but
								it should not be used as a replacement for a proper label. If
								you use the placeholder attribute, make sure to also use the
								<code> &lt;label&gt; </code> element to provide a clear and
								descriptive label for the form element.
							</li>
							<li>
								Descriptive and concise error messages: If the form includes
								validation, provide clear and concise error messages to help
								users understand what went wrong and how to fix it. Do not rely
								on colors to convey meaning.
							</li>
							<li>
								Contrast: Make sure the contrast between the form elements and
								the background is sufficient to make the form elements clearly
								legible for users with visual impairments.
							</li>
						</ul>
					</p>
				</TemplateSection>

				<TemplateSection
					sectionName="htmlForm"
					title="Accessible HTML Form Example">
					<p>
						Here is an example of an accessible HTML form without using ARIA:
					</p>
					<CodeBlock
						codeSnippet={`
                       <form>
                            <h2>Contact Form</h2>
                            <p>Use this form to send us a message</p>
                            <label for="name">Name:</label>
                                <input type="text" id="name" name="name">
                            <label for="email">Email:</label>
                                <input type="email" id="email" name="email">
                            <label for="message">Message:</label>
                            <textarea id="message" name="message"></textarea>
                            <button type="submit">Send</button>
                        </form>
					 `}
					/>
					<div className="imageContainer">
						<Image
							src="/images/formsTemplate/formm.png"
							alt="code snippet UI of form"
							width={300}
							height={400}
							layout="intrinsic"
						/>
					</div>
					<p>
						This form includes a heading, a paragraph, and a series of form
						elements (text input, email input, and text area) that are each
						labeled using the <code> &lt;label&gt; </code> element. The form
						also includes a submit button. The form elements are organized using
						semantic HTML elements and are given appropriate id and name
						attributes to enable proper association with their labels. The form
						also includes proper structure and uses clear and concise labels to
						help users understand the purpose of each form element.
					</p>
				</TemplateSection>

				<TemplateSection sectionName="aria" title="When Should You Use ARIA?">
					<p>
						When added to HTML, ARIA acts as a markup that displays properties,
						roles, and states of the user interface elements. It provides a way
						for web developers to add additional information to web pages and
						applications to better present the content to users.
					</p>
					<p>
						There are a few specific situations where using ARIA can be
						particularly helpful in making a form more accessible:
						<ul className="unorderedLists">
							<li>
								Custom form controls: If you are using custom form controls that
								do not have a corresponding semantic HTML element (e.g. a custom
								dropdown menu), you can use ARIA attributes to provide
								information about the role and state of the control to assistive
								technologies.
							</li>
							<li>
								Dynamic content: If your form includes dynamic content (e.g. a
								form that expands or collapses based on user input), you can use
								ARIA attributes to update the state and role of the content to
								assistive technologies in real-time.
							</li>
							<li>
								Complex forms: If your form has a complex structure or includes
								multiple groups of related form elements, you can use ARIA
								attributes to provide additional information about the
								relationships between the elements and the overall structure of
								the form.
							</li>
						</ul>
					</p>
					<p>
						Overall, using ARIA can be helpful in making a form more accessible,
						but it is not necessary in all cases. By following best practices
						for accessible HTML forms (such as using semantic HTML elements,
						clear and descriptive labels, and proper structure), you can create
						an accessible form without using ARIA.
					</p>
				</TemplateSection>

				<TemplateSection
					sectionName="ariaCode"
					title="Accessible HTML with ARIA Example">
					<CodeBlock
						codeSnippet={`
                            <form>
                                <h2>Log in</h2>
                                <label for="username">Username:</label>
                                    <input type="text" id="username" aria-labelledby="username-label">
                                <label for="password">Password:</label>
                                    <input type="password" id="password" aria-labelledby="password-label">
                                <button type="submit" role="button">Log in</button>
                            </form>
                            `}
					/>
					<p>
						In this example, the aria-labelledby attribute is used to label each
						form element using the corresponding id of the element's label. This
						allows assistive technologies to accurately present the label and
						input element to the user. The role attribute is also used to
						specify the role of the submit button as a button, which allows
						assistive technologies to present it as such to the user. .
					</p>
				</TemplateSection>

				<TemplateSection sectionName="WCAGCriteria" title="WCAG Criteria">
					<ul className="unorderedLists">
						<li>
							<a
								href="https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html"
								className="blockLink">
								3.3.2 Labels and Instructions
							</a>
						</li>
						<li>
							<a
								href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-identified.html"
								className="blockLink">
								3.3.1 Error Identification
							</a>
						</li>
						<li>
							<a
								href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-unpredictable-change.html"
								className="blockLink">
								3.2.2 On Output
							</a>
						</li>
						<li>
							<a
								href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-suggestions.html"
								className="blockLink">
								3.3.3 Error Suggestions
							</a>
						</li>
						<li>
							<a
								href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html"
								className="blockLink">
								4.1.2 Name, Role, Value
							</a>
						</li>
					</ul>
				</TemplateSection>
				<TemplateSection
					sectionName="QuizQuestions"
					title="Test Your Knowledge"></TemplateSection>
			</article>
			<p className="pageLastUpdated">
				<strong>Page last updated: </strong>24th December 2022
			</p>
		</>
	)
}
