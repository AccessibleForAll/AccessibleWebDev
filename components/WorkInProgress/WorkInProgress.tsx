import React from "react"
import styles from "./WorkInProgress.module.css"

export const WorkInProgress = () => {
	return (
		<section className={styles.WIPContainer}>
			<h2>This section is a work in progress</h2>
			<p>Please come back at a later date.</p>
			<a href="https://github.com/AccessibleForAll/AccessibleWebDev">
				Let us know what information you're looking for.
			</a>
		</section>
	)
}
