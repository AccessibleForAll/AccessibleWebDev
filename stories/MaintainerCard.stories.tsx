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

DesktopMaintainerCard.args = {
	image:
		"https://img.freepik.com/free-photo/handsome-smiling-young-african-man_171337-9650.jpg",
	fullName: "John Doe",
	description:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt luctus, nunc nisl aliquam massa, eget aliquam nisl nisl eu nunc. Sed euismod, nisl vel tincidunt luctus, nunc nisl aliquam massa, eget aliquam nisl nisl eu nunc.",
	githubLink: "https://github.com",
} as MaintainerCardProps
