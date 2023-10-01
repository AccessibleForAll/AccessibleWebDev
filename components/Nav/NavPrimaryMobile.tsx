import { useState } from "react"
import { NavItem } from "./NavItem"
import { pages } from "../../data/pages"
import styles from "./NavPrimary.module.css"

export interface INavProps {
	activeNavLink: string
	handleNavClick: () => void
}

export const NavPrimaryMobile = ({
	activeNavLink,
	handleNavClick,
}: INavProps) => {

	const [search, setSearch] = useState<string>("")

	return (
		<nav aria-label="Primary" className={styles.navPrimaryMobile}>
			<ul className={styles.navList}>
				<input
					className={styles.searchBox}
					placeholder="search"
					type="text"
					onChange={(e) => setSearch(e.target.value.toLowerCase())}
				/>
				{pages.map((page, index) =>
					page.name.toLowerCase().includes(search) ? (
						<NavItem
							key={page.name + index}
							page={page}
							activeNavLink={activeNavLink}
							handleNavClick={handleNavClick}

						/>
					) : (
						""
					)
				)}
			</ul>
		</nav>
	)
}
