export interface IPageNavigationItem {
	linkName: string
	href: string
}

export const breadcrumbsPageNavigation: IPageNavigationItem[] = [
	{ linkName: "Introduction", href: "#introduction" },
	{ linkName: "HTML Structure", href: "#htmlStructure" },
	{ linkName: "Add Extra Information with ARIA", href: "#aria" },
	{ linkName: "Breadcrumbs Example", href: "#breadcrumbsExample" },
	{ linkName: "Styling Breadcrumbs", href: "#breadcrumbStyling" },
	{ linkName: "WCAG Criteria", href: "#WCAGCriteria" },
	{ linkName: "Other Resources", href: "#otherResources" },
]

export const buttonPageNavigation: IPageNavigationItem[] = [
	{ linkName: "Introduction", href: "#introduction" },
	{ linkName: "Text Buttons", href: "#textButtons" },
	{ linkName: "Text and Icon Buttons", href: "#textAndIconButtons" },
	{ linkName: "Icon-only Buttons", href: "#iconOnlyButtons" },
	{ linkName: "Button States", href: "#buttonStates" },
	{ linkName: "Button or Link?", href: "#buttonOrLink" },
	{ linkName: "WCAG Criteria", href: "#WCAGCriteria" },
	{ linkName: "Other Resources", href: "#otherResources" },
]

export const imagePageNavigation: IPageNavigationItem[] = [
	{ linkName: "Introduction", href: "#introduction" },
	{ linkName: "Text Alternatives", href: "#textAlternatives" },
	{ linkName: "Decorative Images", href: "#decorativeImages" },
	{ linkName: "Informative Images", href: "#informativeImages" },
	{ linkName: "Functional Images", href: "#functionalImages" },
	{ linkName: "How to write good alt text", href: "#goodAltText" },
	{ linkName: "Images of Text", href: "#imagesOfText" },
	{ linkName: "Images and Colour", href: "#imagesAndColour" },
	{ linkName: "Image Maps", href: "#imageMaps" },
	// { linkName: "Image Checklist", href: "#checklist" },
	{ linkName: "WCAG Criteria", href: "#WCAGCriteria" },
	{ linkName: "Other Resources", href: "#otherResources" },
]

export const headingsPageNavigation: IPageNavigationItem[] = [
	{ linkName: "Introduction", href: "#intro" },
	{ linkName: "Why are HTML Headings Important?", href: "#whyHeadings" },
	{
		linkName: "What Should Be Included in a Heading?",
		href: "#includedInHeadings",
	},
	{ linkName: "How to Write a Good Heading", href: "#goodHeadings" },
	{
		linkName: "What Should We Avoid When Using Headings?",
		href: "#avoidHeadings",
	},
	{ linkName: "WCAG Criteria", href: "#WCAGCriteria" },
	{ linkName: "Test Your Knowledge", href: "#QuizQuestions" },
]

export const modalPageNavigation: IPageNavigationItem[] = [
	{ linkName: "Introduction", href: "#introduction" },
	{ linkName: "How a modal should work", href: "#howAModalShouldWork" },
	// {
	// 	linkName: "What Should Be Included in a Heading?",
	// 	href: "#includedInHeadings",
	// },
	// { linkName: "How to Write a Good Heading", href: "#goodHeadings" },
	// {
	// 	linkName: "What Should We Avoid When Using Headings?",
	// 	href: "#avoidHeadings",
	// },
	// { linkName: "WCAG Criteria", href: "#WCAGCriteria" },
	// { linkName: "Test Your Knowledge", href: "#QuizQuestions" },
]
