import { NavItem } from "./NavItem"
import { pages } from "../../data/pages"
import styles from "./NavPrimary.module.css"

export interface INavProps {
	activeNavLink: string
}

export const NavPrimary = (props: INavProps) => {
	const { activeNavLink } = props

	return (
		<nav aria-label="Primary" className={styles.navPrimary}>
			<ul className={styles.navList}>
				{pages.map((page, index) => (
					<NavItem
						key={page.name + index}
						page={page}
						activeNavLink={activeNavLink}
					/>
				))}
			</ul>
		</nav>
	)
}
