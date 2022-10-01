export interface IPage {
	name: string
	href: string
	content?: string
}

export const pages: IPage[] = [
	{ name: "Home", href: "/" },
	{
		name: "Animations",
		href: "/animations",
		content: "animations",
	},
	{ name: "Audio", href: "/audio", content: "audio" },
	{
		name: "Captchas",
		href: "/captchas",
		content: "captchas",
	},
	{
		name: "Charts",
		href: "/charts",
		content: "charts",
	},
	{ name: "Headings", href: "/headings", content: "headings" },
	{ name: "Icons", href: "/icons", content: "icons" },
	{ name: "Images", href: "/images", content: "images" },
	{ name: "Links", href: "/links", content: "links" },
	{ name: "Video", href: "/video", content: "video" },
]
