import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { NavItem, NavItemProps } from "../components/Nav/NavItem"
import { pages } from "../data/pages"

export default {
	title: "Example/NavItem",
	component: NavItem,
} as ComponentMeta<typeof NavItem>

const Template: ComponentStory<typeof NavItem> = (args) => <NavItem {...args} />

export const DesktopNavItem = Template.bind({})

DesktopNavItem.args = {
	page: pages[16],
	activeNavLink: "/navigation",
} as NavItemProps
