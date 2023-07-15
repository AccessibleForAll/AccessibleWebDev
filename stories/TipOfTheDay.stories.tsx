import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { TipOfTheDay } from "../components/TipOfTheDay/TipOfTheDay"

export default {
	title: "Example/TipOfTheDay",
	component: TipOfTheDay,
} as ComponentMeta<typeof TipOfTheDay>

// eslint-disable-next-line @typescript-eslint/naming-convention
const Template: ComponentStory<typeof TipOfTheDay> = () => <TipOfTheDay />

export const TipOfTheDayCard = Template.bind({})
