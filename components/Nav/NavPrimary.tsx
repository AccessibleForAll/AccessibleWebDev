import NavItem from "./NavItem";
import {pages} from "./NavPrimaryPages"
import styles from "./NavPrimary.module.css"



interface NavProps {
	activeNavLink: string
}

// interface NavItemProps extends NavProps {
// 	page: Page
// }

// const NavItem = (props: NavItemProps) => {
// 	const { page, activeNavLink } = props
// 	return (
// 		<li
// 			className={`${styles.navListItem} ${
// 				activeNavLink === page.href ? "active" : ""
// 			}`}>
// 			<Link href={page.href}>{page.name}</Link>
// 		</li>
// 	)
// }

const NavPrimary = (props: NavProps) => {
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
