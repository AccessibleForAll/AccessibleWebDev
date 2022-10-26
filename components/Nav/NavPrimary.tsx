import NavItem from "./NavItem"
import { pages } from "../../data/pages"
import styles from "./NavPrimary.module.css"

export interface NavProps {
	activeNavLink: string
	handleNavClick: () => void
}

export const NavPrimary = (props: NavProps) => {
	const { activeNavLink, handleNavClick } = props

	return (
		<nav aria-label="Primary" className={styles.navPrimary}>
			<ul className={styles.navList}>
				{pages.map((page, index) => (
					<NavItem
						key={page.name + index}
						page={page}
						activeNavLink={activeNavLink}
						handleNavClick={handleNavClick}
					/>
				))}
			</ul>
		</nav>
	)
}

export default NavPrimary
