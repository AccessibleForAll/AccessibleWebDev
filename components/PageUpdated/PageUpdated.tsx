import styles from "./PageUpdated.module.css"
interface IPageUpdatedProps {
	date: string
}
export const PageUpdated = ({ date }: IPageUpdatedProps) => (
	<p className={styles.pageLastUpdated}>
		<strong>Page last updated: </strong>
		{date}
	</p>
)
