export interface IPage {
	name: string
	href: string
}

export const pages: IPage[] = [
	{ name: "Home", href: "/" },
	{ name: "Animations", href: "/animations" },
	{ name: "Audio", href: "/audio" },
	{ name: "CAPTCHAS", href: "/captchas" },
	{ name: "Charts", href: "/charts" },
	{ name: "Icons", href: "/icons" },
	{ name: "Images", href: "/images" },
	{ name: "Video", href: "/video" },
]
