import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { NavPrimaryMobile, NavProps } from "../components/Nav/NavPrimaryMobile"

export default {
	title: "Example/Nav",
	component: NavPrimaryMobile,
} as ComponentMeta<typeof NavPrimaryMobile>

const Template: ComponentStory<typeof NavPrimaryMobile> = (args) => (
	<NavPrimaryMobile {...args} />
)

export const MobilePrimaryNav = Template.bind({})

MobilePrimaryNav.args = {
	activeNavLink: "home",
	handleNavClick: () => true,
} as NavProps
