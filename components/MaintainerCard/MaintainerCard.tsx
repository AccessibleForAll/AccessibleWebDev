import Image from "next/image"
import styles from "./MaintainerCard.module.css"

const isLinkToImage = (link = "default") =>
	/\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(link)

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
			{isLinkToImage(maintainerImage) ? (
				<Image
					src={maintainerImage}
					alt={`${maintainerName} ${maintainerSurname}`}
					layout="fill"
				/>
			) : (
				<p>{maintainerImage || "image"}</p>
			)}

			<h1>{`${maintainerName} ${maintainerSurname}`}</h1>
			<p>{maintainerDescription}</p>

			<a href={maintainerGithubLink} target="_blank" rel="noreferrer">
				<button type="button">{maintainerGithubName}</button>
			</a>
		</section>
	)
}

export default MaintainerCard
