/* eslint-disable @next/next/no-img-element */
import styles from "./MaintainerCard.module.css"
import { IMaintainer } from "../../data/maintainers"

export interface IMaintainerCardProps {
	maintainer: IMaintainer
}

export const MaintainerCard = ({
	image,
	fullName,
	description,
	githubLink,
}: IMaintainer) => {
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
