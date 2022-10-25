import NavItem from "./NavItem"
import { pages } from "../../data/pages"
import styles from "./NavPrimary.module.css"

export interface NavProps {
	activeNavLink: string
}

export const NavPrimary = (props: NavProps) => {
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

export default NavPrimary
