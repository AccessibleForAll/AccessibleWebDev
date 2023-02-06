import styles from "./TipOfTheDay.module.css"

export const TipOfTheDay = () => {
	return (
		<div className={styles.card}>
			<h2>Short tip title</h2>
			<p>Longer explanation of tip</p>
			<a href="#">Name of Link</a>
		</div>
	)
}
