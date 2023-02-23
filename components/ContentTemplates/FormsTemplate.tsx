import Image from "next/image"
import { NavPage } from "../NavPage/NavPage"
import { CodeBlock } from "../CodeBlock/CodeBlock"
import { formsPageNavigation } from "../../data/pageNavigationLists"
import { TemplateSection } from "../TemplateSection/TemplateSection"

export const FormsTemplate = () => {
	return (
		<>
			<NavPage pageNavigation={formsPageNavigation} />
			<article>
				<TemplateSection 
					sectionName="introduction" 
					title="Introduction">
					<p>
						Web-accessible forms are an important aspect of creating an inclusive and user-friendly website. 
						In this article, we will discuss the importance of web-accessible forms, and best practices for designing and implementing them. 
						We will also demonstrate some examples and code snippets to help you get started.
					</p>
					<div className="imageContainer">
						<Image
							src="/images/imagesTemplate/basicSignInForm.png"
							alt="A screenshot of a sign-in form with buttons labelled sign in, sign in with Facebook, and sign in with Google"
							width={300}
							height={200}
							layout="intrinsic"
						/>
				</TemplateSection>

				<TemplateSection sectionName="whyFormsImportant" 
					title="Why Are Web Accessible Forms Important?">
					<p>
						Web-accessible forms are important because they allow users with disabilities to interact with and use your website. 
						This includes users who may have visual impairments, mobility impairments, or cognitive impairments, among others. 
						These users may be navigating your page using only a keyboard, using a screen reader, or using various software including speech-to-text and text-to-speech. 
					</p>
					<div className="imageContainer">
						<Image
							src="/images/imagesTemplate/formsButton.png"
							alt="Close up of a keyboard with a blue button labelled forms where right shift is usually located"
							width={300}
							height={200}
							layout="intrinsic"
						/>
				</TemplateSection>

				<TemplateSection sectionName="formsBestPractices" 
					title="Best practices for designing web-accessible forms">
					<p>
						There are several best practices to follow when designing web-accessible forms:
					</p>
					<ol>
						<li> Use clear and descriptive labels: Make sure that the labels for your form fields are clear and descriptive, so that users know what information is being requested.</li>
						<li> Provide clear instructions: Provide clear instructions for filling out the form, including any required information or formatting guidelines.</li>
						<li> Use appropriate input types: Use the appropriate input type for each field, such as text, email, or number. This will help users understand what type of information is being requested and will also make it easier for them to enter the information.</li>
						<li> Use placeholder text appropriately: Placeholder text can be helpful for providing examples or additional information, but it should not be used as a substitute for a label.</li>
						<li> Allow users to navigate the form using their keyboard: Users should be able to navigate through the form and enter information using their keyboard. This is especially important for users who may have mobility impairments.</li>
						<li> Use error messages to guide users: If a user makes a mistake when filling out the form, provide clear and helpful error messages to guide them in correcting the issue.</li>
					</ol>
				</TemplateSection>
						

				<TemplateSection sectionName="formsCode" 
					title="Code examples for web-accessible forms">
					<p>
						Here are some examples of code snippets that you can use to create web-accessible forms:
					</p>
					<CodeBlock
						codeSnippet={
								`<form> 
									<label for="name">Name:</label><br> 
									<input type="text" id="name" name="name"><br> 
									<label for="email">Email:</label><br> 
									<input type="email" id="email" name="email"><br> 
									<input type="submit" value="Submit"> 
								</form>
						`}/>
					<p>
						This code snippet creates a simple form with two fields, a text field for the user's name and an email field for their email address. 
						The for attribute of the label elements is used to associate the labels with their corresponding input fields, and the type attribute of the input elements specifies the type of input being requested (text or email).
					</p>
					<CodeBlock
						codeSnippet={
								`<form>
									<label for="name">Name:</label><br>
									<input type="text" id="name" name="name" required><br>
									<label for="email">Email:</label><br>
									<input type="email" id="email" name="email" required><br>
									<input type="submit" value="Submit">
								</form>
						`}/>
					<p>
						This code snippet is similar to the first example, but it includes the required attribute for both input fields. 
						This attribute specifies that the fields are required and the form cannot be submitted unless they are filled out.
					</p>
					<CodeBlock
						codeSnippet={
								`
								<form> 
									<label for="name">Name:</label><br> 
									<input type="text" id="name" name="name" required> 
									<span>	
						`}/>
				</TemplateSection>

				<TemplateSection sectionName="formsAvoid"
					title="What to avoid">
					<p>
						Alerts for eros in forms should not only be shown via color, but with text as well.
					</p>
					<p>
						To make a web page form accessible using semantic HTML and ARIA, you can follow the steps below:
					</p>
					<ol>
						<li> Use semantic HTML tags to structure the form: 
							Use the <code> &lt;form&gt; </code>  element to enclose the form, and <code> &lt;label&gt; </code> elements to label each form control (e.g., input fields, buttons, etc.). 
							Make sure to properly associate the <code> &lt;label&gt; </code> elements with their respective form controls using the for attribute. 
							This will help screen readers understand the structure and purpose of the form.</li>
						<li> Make the form keyboard-navigable: 
							Ensure that users can tab through the form controls and use the space bar or Enter key to interact with them. 
							This will allow users to access the form without a mouse.</li>
						<li> Use descriptive and concise <code> &lt;label&gt; </code> elements: 
							Use clear and concise language in the <code> &lt;label&gt; </code> elements to describe the purpose of each form control. 
							This will help users understand what information is being requested and how to properly complete the form.</li>
						<li> Use appropriate input types: 
							Use the appropriate HTML input types (e.g., text, email, password, etc.) to ensure that the form controls are properly labelled and easy to use.</li>
						<li> Use ARIA attributes to enhance accessibility: 
							If needed, you can use ARIA (Accessible Rich Internet Applications) attributes to provide additional information to assistive technologies (e.g., screen readers). 
							For example, you can use the aria-describedby attribute to provide a description of a form control, or the aria-required attribute to indicate that a form control is required.</li>
					</ol>
					<p>
						By following these steps, you can create an accessible web page form that can be easily read and used by screen readers and without a mouse.
					</p>
				</TemplateSection>
		</>
	)
}