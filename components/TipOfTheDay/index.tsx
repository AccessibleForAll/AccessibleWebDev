import { useEffect, useState } from "react"
import styles from "./TipOfTheDay.module.css"
import { Tips } from "../../data/tipsOfTheDay"

interface ITip {
	title: string
	description: string
	tipLink: string
	tipLinkLabel: string
}

export const TipOfTheDay = () => {
	const [randomIndex, setRandomIndex] = useState<number>(0)
	const [loading, setLoading] = useState<boolean>(true)
	const tipIndex: ITip = Tips[randomIndex]

	useEffect(() => {
		const randomNumber = Math.floor(Math.random() * Tips.length)

		setRandomIndex(randomNumber)
		setLoading(false)
	}, [])

	const createTipOfTheDay = () => {
		return (
			<>
				<h2>{tipIndex.title}</h2>
				<p>{tipIndex.description}</p>
				<a target="_blank" rel="noreferrer" href={tipIndex.tipLink}>
					{tipIndex.tipLinkLabel}
				</a>
			</>
		)
	}
	const tip = loading ? null : createTipOfTheDay()

	return <div className={styles.card}>{tip}</div>
}
