import { NavItem } from "./NavItem"
import { pages } from "../../data/pages"
import styles from "./NavPrimary.module.css"
import { useState } from "react"

export interface INavProps {
	activeNavLink: string
}

export const NavPrimary = ({ activeNavLink }: INavProps) => {
	const [search, setSearch] = useState<string>("")

	return (
		<nav aria-label="Primary" className={styles.navPrimary}>
			<input
				className={styles.searchBox}
				placeholder="search"
				type="text"
				onChange={(e) => setSearch(e.target.value.toLowerCase())}
			/>

			<ul className={styles.navList}>
				{pages.map((page, index) =>
					page.name.toLowerCase().includes(search) ? (
						<NavItem
							key={page.name + index}
							page={page}
							activeNavLink={activeNavLink}
						/>
					) : (
						""
					)
				)}
			</ul>
		</nav>
	)
}
