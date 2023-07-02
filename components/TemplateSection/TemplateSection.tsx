import { ReactNode } from "react"
import styles from "./TemplateSection.module.css"

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
		<section aria-labelledby={sectionName} className={styles.infoSection}>
			<h2 id={sectionName}>{title}</h2>
			{children}
		</section>
	)
}
