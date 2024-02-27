import { FocusEvent, useCallback } from "react"
import { NavItem } from "./NavItem"
import { pages } from "../../data/pages"
import styles from "./NavPrimary.module.css"

export interface INavProps {
	activeNavLink: string
	closeNavMobile: () => void
}

export const NavPrimaryMobile = ({
	activeNavLink,
	closeNavMobile,
}: INavProps) => {
	const handleNavBlur = useCallback((event: FocusEvent<HTMLAnchorElement>) => {
		const isLastNavItem = /true/i.test(event.target.dataset?.lastNavItem ?? "")
		if (isLastNavItem) closeNavMobile()
	}, [])
	return (
		<nav
			aria-label="Primary"
			className={styles.navPrimaryMobile}
			onBlur={handleNavBlur}>
			<ul className={styles.navList}>
				{pages.map((page, index) => (
					<NavItem
						key={page.name + index}
						page={page}
						activeNavLink={activeNavLink}
						handleNavClick={closeNavMobile}
						isLastNavItem={pages.length === index + 1}
					/>
				))}
			</ul>
		</nav>
	)
}
