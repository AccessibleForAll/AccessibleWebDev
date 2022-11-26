import Link from "next/link"
import styles from "./NavPage.module.css"
import { IPageNavigationItem } from "../../data/pageNavigationLists"

interface INavPageProps {
	pageNavigation: IPageNavigationItem[]
}

export const NavPage = ({ pageNavigation }: INavPageProps) => {
	return (
		<details className={styles.pageNav}>
			<summary className={styles.pageNavTitle}>On This Page</summary>

			<nav aria-label="On This Page">
				<ul className={styles.pageNavList}>
					{pageNavigation.map((item, index) => (
						<li key={index}>
							<Link href={item.href}>{item.linkName}</Link>
						</li>
					))}
				</ul>
			</nav>
		</details>
	)
}
