interface IPageUpdatedProps {
	date: string
}
export const PageUpdated = ({ date }: IPageUpdatedProps) => (
	<p className="pageLastUpdated">
		<strong>Page last updated: </strong>
		{date}
	</p>
)
