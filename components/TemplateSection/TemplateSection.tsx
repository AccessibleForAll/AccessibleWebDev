import { ReactNode } from "react"

interface ITemplateSectionProps {
	sectionName: string
	title: string
	children: ReactNode
}

export const TemplateSection = ({
	sectionName,
	title,
	children,
}: ITemplateSectionProps) => {
	return (
		<section aria-labelledby={sectionName} className="infoSection">
			<h2 id={sectionName}>{title}</h2>
			{children}
		</section>
	)
}
