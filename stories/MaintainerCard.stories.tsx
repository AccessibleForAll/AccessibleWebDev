import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import {
	MaintainerCard,
	MaintainerCardProps,
} from "../components/MaintainerCard/MaintainerCard"

export default {
	title: "Example/MaintainerCard",
	component: MaintainerCard,
} as ComponentMeta<typeof MaintainerCard>

const Template: ComponentStory<typeof MaintainerCard> = (args) => (
	<MaintainerCard {...args} />
)

export const DesktopMaintainerCard = Template.bind({})

const maintainer = {
	image:
		"https://cdn.pixabay.com/photo/2016/09/28/02/14/user-1699635_960_720.png",
	fullName: "Adorable Doggo",
	description:
		"Doggo ipsum many pats long doggo shooberino shoober aqua doggo, pupperino mlem h*ck. Woofer much ruin diet heckin good boys heckin adorable doggo, super chub yapper.",
	githubLink: "https://github.com",
}

DesktopMaintainerCard.args = { maintainer } as MaintainerCardProps
