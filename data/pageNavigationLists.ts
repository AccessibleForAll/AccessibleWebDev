export interface IPageNavigationItem {
	linkName: string
	href: string
}

export const audioPageNavigation: IPageNavigationItem[] = [
	{ linkName: "Introduction", href: "#introduction" },
	{ linkName: "Transcripts", href: "#transcripts" },
	{ linkName: "Captions", href: "#captions" },
	{ linkName: "How To Add Closed Captions To Your Video?", href: "#howToAdd" },
	{ linkName: "Sign Language", href: "#signLanguage" },
	{ linkName: "Accessible media players", href: "#accessibleMediaPlayers" },
	{ linkName: "WCAG Criteria", href: "#WCAGCriteria" },
	{ linkName: "Other Resources", href: "#otherResources" },
]

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
	{ linkName: "Touch Target Minimum", href: "#touchTargetMinimum" },
	{ linkName: "WCAG Criteria", href: "#WCAGCriteria" },
	{ linkName: "Other Resources", href: "#otherResources" },
]

export const linkPageNavigation: IPageNavigationItem[] = [
	{ linkName: "Introduction", href: "#introduction" },
	{ linkName: "Accessible Link Names", href: "#accessibleLinkNames" },
	{ linkName: "Link State and Style", href: "#linkStates" },
	{ linkName: "Image and Icon Links", href: "#linkImage" },
	{ linkName: "Touch Target Minimum", href: "#touchTargetMinimum" },
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

export const formsPageNavigation: IPageNavigationItem[] = [
	{ linkName: "Introduction", href: "#introduction" },
	{
		linkName: "What Should We Consider When Building Accessible Forms?",
		href: "#whatToConsider",
	},
	{
		linkName: "Creating Simple, Understandable Forms",
		href: "#creatingForms",
	},
	{
		linkName: "Keyboard Accessible Forms",
		href: "#keyboardAccessibleForms",
	},
	{ linkName: "Error Validation and Changes in State", href: "#formErrors" },
	{ linkName: "WCAG Criteria", href: "#WCAGCriteria" },
]

export const modalPageNavigation: IPageNavigationItem[] = [
	{ linkName: "Introduction", href: "#introduction" },
	{ linkName: "How a modal should work", href: "#howAModalShouldWork" },
	{ linkName: "Using <dialog>", href: "#usingDialog" },
	{ linkName: "Custom Modals", href: "#customModals" },
	{ linkName: "WCAG Criteria", href: "#WCAGCriteria" },
	{ linkName: "Other Resources", href: "#otherResources" },
]

export const navigationPageNavigation: IPageNavigationItem[] = [
	{ linkName: "Introduction", href: "#introduction" },
	{ linkName: "A Simple Navigation", href: "#simpleNav" },
	{ linkName: "Hamburger Menus", href: "#hamburgerMenus" },
	{ linkName: "Mega Menus", href: "#megaMenus" },
	{ linkName: "Order of Links", href: "#linksOrder" },
	{ linkName: "Multiple Navigations Per Page", href: "#multipleNavs" },
	{ linkName: "WCAG Criteria", href: "#WCAGCriteria" },
	//{ linkName: "Other Resources", href: "#otherResources" },
]
