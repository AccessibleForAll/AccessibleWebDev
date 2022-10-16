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

const SIMULATION_DATA: Record<string, string> = {
	image:
		"https://img.freepik.com/free-photo/handsome-smiling-young-african-man_171337-9650.jpg",
	name: "John",
	surname: "Doe",
	description:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt luctus, nunc nisl aliquam massa, eget aliquam nisl nisl eu nunc. Sed euismod, nisl vel tincidunt luctus, nunc nisl aliquam massa, eget aliquam nisl nisl eu nunc.",
	github: "https://github.com",
	github_name: "john-doe-github",
}

export const DesktopMaintainerCard = Template.bind({})

DesktopMaintainerCard.args = {
	maintainerImage: SIMULATION_DATA.image,
	maintainerName: SIMULATION_DATA.name,
	maintainerSurname: SIMULATION_DATA.surname,
	maintainerDescription: SIMULATION_DATA.description,
	maintainerGithubName: SIMULATION_DATA.github_name,
	maintainerGithubLink: SIMULATION_DATA.github,
} as MaintainerCardProps
