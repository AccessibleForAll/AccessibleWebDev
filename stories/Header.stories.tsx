import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Header, IHeaderProps } from "../components/Header/Header"

export default {
	title: "Example/Header",
	component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const DesktopHeader = Template.bind({})

DesktopHeader.args = {
	headerTitle: "Page Title",
	handleNavClick: () => true,
	showNavMobile: false,
	// eslint-disable-next-line @typescript-eslint/naming-convention
} as IHeaderProps
