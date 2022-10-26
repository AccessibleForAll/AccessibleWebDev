import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { NavPrimary, NavProps } from "../components/Nav/NavPrimary"

export default {
	title: "Example/Nav",
	component: NavPrimary,
} as ComponentMeta<typeof NavPrimary>

const Template: ComponentStory<typeof NavPrimary> = (args) => (
	<NavPrimary {...args} />
)

export const PrimaryNav = Template.bind({})

PrimaryNav.args = {
	activeNavLink: "/",
	handleNavClick: () => true,
} as NavProps