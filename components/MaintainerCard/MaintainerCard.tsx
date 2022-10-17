/* eslint-disable @next/next/no-img-element */
import styles from "./MaintainerCard.module.css"

export interface MaintainerCardProps {
	maintainerImage: string
	maintainerFullName: string
	maintainerDescription: string
	maintainerGithubName: string
	maintainerGithubLink: string
}

export const MaintainerCard = (props: MaintainerCardProps) => {
	const {
		maintainerImage,
		maintainerFullName,
		maintainerDescription,
		maintainerGithubName,
		maintainerGithubLink,
	} = props

	return (
		<section className={styles.maintainerContainer}>
			{maintainerImage ? (
				<img
					className={styles.maintainerImage}
					src={maintainerImage}
					alt={maintainerFullName}
				/>
			) : (
				<p className={styles.maintainerImage}>{maintainerImage || "image"}</p>
			)}

			<h1 className={styles.maintainerFullName}>{maintainerFullName}</h1>
			<p className={styles.maintainerDescription}>{maintainerDescription}</p>

			<a href={maintainerGithubLink} target="_blank" rel="noreferrer">
				<button className={styles.linkButton} type="button">
					{maintainerGithubName}
				</button>
			</a>
		</section>
	)
}

export default MaintainerCard
