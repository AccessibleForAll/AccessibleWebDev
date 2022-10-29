import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Footer } from "../components/Footer/Footer"

export default {
	title: "Example/Footer",
	component: Footer,
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = () => <Footer />

export const DesktopFooter = Template.bind({})
