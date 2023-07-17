export interface IMaintainer {
	image: string
	fullName: string
	description: string
	githubLink: string
}

export const currentMaintainers: IMaintainer[] = [
	{
		image: "https://avatars.githubusercontent.com/u/57045550?v=4&s=150",
		fullName: "Emma Dawson",
		description:
			"Emma is a full stack developer from Stockholm with a passion for accessibility and open source. She wants to make web accessibility easy to learn for everyone.",
		githubLink: "https://github.com/EmmaDawsonDev",
	},
	{
		image: "https://avatars.githubusercontent.com/u/1682188?v=4&s=150",
		fullName: "Cristian Toffanin",
		description:
			"Cristian is a full stack developer based in the Netherlands. He's always curious and always learning. He's currently learning about accessibility (Emma's mentee).",
		githubLink: "https://github.com/ctoffanin",
	},
]
