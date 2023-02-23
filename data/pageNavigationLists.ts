export interface IPageNavigationItem {
	linkName: string
	href: string
}

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

export const formsPageNavigation: IPageNavigationItem[] = [
	{ linkName: "Introduction", href: "#introduction" },
	{ linkName: "Why Are Web Accessible Forms Important?", href: "#whyFormsImportant" },
	{ linkName: "Best practices for designing web-accessible forms", href: "#formsBestPractices" },
	{ linkName: "Code examples for web-accessible forms", href: "#formsCode" },
	{ linkName: "What to avoid", href: "#formsAvoid" },
]