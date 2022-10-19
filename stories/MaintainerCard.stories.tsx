import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import {
	MaintainerCard as MaintainerCardComponent,
	MaintainerProps,
} from "../components/MaintainerCard/MaintainerCard"

export default {
	title: "Example/MaintainerCard",
	component: MaintainerCardComponent,
} as ComponentMeta<typeof MaintainerCardComponent>

const Template: ComponentStory<typeof MaintainerCardComponent> = (args) => (
	<MaintainerCard {...args} />
)

export const MaintainerCard = Template.bind({})

MaintainerCard.args = {
	image:
		"https://img.freepik.com/free-photo/handsome-smiling-young-african-man_171337-9650.jpg",
	fullName: "John Doe",
	description:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt luctus, nunc nisl aliquam massa, eget aliquam nisl nisl eu nunc. Sed euismod, nisl vel tincidunt luctus, nunc nisl aliquam massa, eget aliquam nisl nisl eu nunc.",
	githubLink: "https://github.com",
} as MaintainerProps
