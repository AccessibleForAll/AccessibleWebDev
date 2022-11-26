import { NavItem } from "./NavItem"
import { pages } from "../../data/pages"
import styles from "./NavPrimary.module.css"

export interface INavProps {
	activeNavLink: string
	handleNavClick: () => void
}

export const NavPrimaryMobile = (props: INavProps) => {
	const { activeNavLink, handleNavClick } = props
	return (
		<nav aria-label="Primary" className={styles.navPrimaryMobile}>
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
