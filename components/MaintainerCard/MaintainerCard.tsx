/* eslint-disable @next/next/no-img-element */
import styles from "./MaintainerCard.module.css"

export interface MaintainerCardProps {
	maintainerImage: string
	maintainerName: string
	maintainerSurname: string
	maintainerDescription: string
	maintainerGithubName: string
	maintainerGithubLink: string
}

export const MaintainerCard = (props: MaintainerCardProps) => {
	const {
		maintainerImage,
		maintainerName,
		maintainerSurname,
		maintainerDescription,
		maintainerGithubName,
		maintainerGithubLink,
	} = props

	return (
		<section>
			{maintainerImage ? (
				<img
					className={styles.maintainerImage}
					src={maintainerImage}
					alt={`${maintainerName} ${maintainerSurname}`}
				/>
			) : (
				<p className={styles.maintainerImage}>{maintainerImage || "image"}</p>
			)}
			<section className={styles.maintainerContainer}>
				<h1 className={styles.maintainerFullName}>
					{`${maintainerName} ${maintainerSurname}`}
				</h1>
				<p className={styles.maintainerDescription}>{maintainerDescription}</p>

				<a href={maintainerGithubLink} target="_blank" rel="noreferrer">
					<button className={styles.linkButton} type="button">
						{maintainerGithubName}
					</button>
				</a>
			</section>
		</section>
	)
}

export default MaintainerCard
