import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import WorkInProgress from "../components/WorkInProgress/WorkInProgress"

export default {
	title: "Example/WorkInProgress",
	component: WorkInProgress,
} as ComponentMeta<typeof WorkInProgress>

const Template: ComponentStory<typeof WorkInProgress> = () => <WorkInProgress />

export const WorkInProgressSection = Template.bind({})