export interface ITips {
	title: string
	description: string
	tipLink: string
	tipLinkLabel: string
}

export const Tips: ITips[] = [
	{
		title: "Test with Assistive Technology",
		description:
			"Test your website using assistive technologies such as screen readers and keyboard-only navigation to identify and fix accessibility issues.",
		tipLink: "https://www.w3.org/WAI/test-evaluate/preliminary/",
		tipLinkLabel: "Read more about assistive technology...",
	},
	{
		title: "Make Forms Accessible",
		description:
			"Ensure that all form elements have labels, are navigable via keyboard, and provide clear instructions for users filling out the form.",
		tipLink: "https://www.w3.org/TR/WCAG21/#forms",
		tipLinkLabel: "Read more about forms...",
	},
	{
		title: "Provide Descriptive Links",
		description:
			"Use clear and descriptive link text that conveys the purpose and destination of the link, as screen readers often provide a list of links and users need to understand where each link will take them.",
		tipLink:
			"https://www.w3.org/WAI/tutorials/forms/labels/#descriptive-link-text",
		tipLinkLabel: "Read more about descriptive technologies...",
	},
	{
		title: "Use Sufficient Color Contrast",
		description:
			"Ensure that there is enough contrast between foreground and background colors to make text readable for users with low vision.",
		tipLink: "https://www.w3.org/TR/WCAG21/#contrast-minimum",
		tipLinkLabel: "Read more about color contrast...",
	},
	{
		title: "Ensure Keyboard Accessibility",
		description:
			"Make sure all interactive elements on your website can be accessed and used via keyboard alone, as some users may not be able to use a mouse or other pointing device.",
		tipLink: "https://www.w3.org/TR/WCAG21/#keyboard-accessible",
		tipLinkLabel: "Read more about keyboard accessibility...",
	},
	{
		title: "Use Semantic HTML",
		description:
			"Use appropriate HTML tags to help convey the meaning and structure of your content, which makes it easier for screen readers and other assistive technologies to navigate.",
		tipLink: "https://www.w3.org/WAI/WCAG21/Techniques/semantic-structure.html",
		tipLinkLabel: "Read more about semantic HTML...",
	},
	{
		title: "Use Alt Text for Images",
		description:
			"Include descriptive text in the alt attribute of image tags to help screen readers and visually impaired users understand the content of the image.",
		tipLink: "https://www.w3.org/WAI/tutorials/images/",
		tipLinkLabel: "Read more about alt text...",
	},
]
