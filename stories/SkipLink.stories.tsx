import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { SkipLink } from "../components/SkipLink/SkipLink"

export default {
	title: "Example/SkipLink",
	component: SkipLink,
} as ComponentMeta<typeof SkipLink>

const Template: ComponentStory<typeof SkipLink> = () => <SkipLink />

export const HiddenSkipLink = Template.bind({})
