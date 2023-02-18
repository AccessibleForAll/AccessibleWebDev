import { ReactNode } from "react"
import styles from "./UpdatedDate.module.css"

interface IUpdatedDateSectionProps {
	date: string
}
export const UpdatedDate = ({ date }: IUpdatedDateSectionProps) => (
	<div className="">
		<p className="pageLastUpdated">
			<strong>Page last updated: </strong>
			{date}
		</p>
	</div>
)
