import React from "react"
import styles from "./TipOfTheDay.module.css"

export const TipOfTheDay = () => {
	return (
		<div className={styles.card}>
			<h2>Short tip title</h2>
			<p>Longer explanation of tip</p>
			<a href="www.link.com">Name of Link</a>
		</div>
	)
}
