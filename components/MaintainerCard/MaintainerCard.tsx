/* eslint-disable @next/next/no-img-element */
import styles from "./MaintainerCard.module.css"

export interface MaintainerCardProps {
	image: string
	fullName: string
	description: string
	githubLink: string
}

export const MaintainerCard = (props: MaintainerCardProps) => {
	const { image, fullName, description, githubLink } = props

	return (
		<section className={styles.maintainerContainer}>
			{image ? (
				<img className={styles.maintainerImage} src={image} alt={fullName} />
			) : (
				<p className={styles.maintainerImage}>{image}</p>
			)}

			<p className={styles.maintainerFullName}>{fullName}</p>
			<p className={styles.maintainerDescription}>{description}</p>

			<a className={styles.linkButton} href={githubLink}>
				{`${fullName}'s Github`}
			</a>
		</section>
	)
}
