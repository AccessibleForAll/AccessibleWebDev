export interface IPage {
	name: string
	href: string
	content?: string
}

export const pages: IPage[] = [
	{ name: "Home", href: "/" },
	// { name: "Alerts", href: "/alerts", content: "alerts" },
	// {
	// 	name: "Animations",
	// 	href: "/animations",
	// 	content: "animations",
	// },
	{ name: "Audio", href: "/audio", content: "audio" },
	{ name: "Breadcrumbs", href: "/breadcrumbs", content: "breadcrumbs" },
	{ name: "Buttons", href: "/buttons", content: "buttons" },
	// {
	// 	name: "Captchas",
	// 	href: "/captchas",
	// 	content: "captchas",
	// },
	// {
	// 	name: "Charts",
	// 	href: "/charts",
	// 	content: "charts",
	// },
	{ name: "Forms", href: "/forms", content: "forms" },
	{ name: "Headings", href: "/headings", content: "headings" },
	// { name: "Icons", href: "/icons", content: "icons" },
	{ name: "Images", href: "/images", content: "images" },
	{ name: "Links", href: "/links", content: "links" },
	// { name: "Lists", href: "/lists", content: "lists" },
	// { name: "Menus", href: "/menus", content: "menus" },
	{ name: "Modals", href: "/modals", content: "modals" },
	{ name: "Navigation", href: "/navigation", content: "navigation" },
	// { name: "Pagination", href: "/pagination", content: "pagination" },
	// { name: "Tables", href: "/tables", content: "tables" },
	// { name: "Video", href: "/video", content: "video" },
]
