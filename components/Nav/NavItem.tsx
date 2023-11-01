import Link from "next/link"
import styles from "./NavPrimary.module.css"
import { IPage } from "../../data/pages"

export interface INavItemProps {
	page: IPage
	activeNavLink: string
	isLastNavItem?: boolean
	handleNavClick?: () => void
}

export const NavItem = ({
	page,
	activeNavLink,
	isLastNavItem = false,
	handleNavClick,
}: INavItemProps) => {
	const isLinkActive = activeNavLink === page.href
	return (
		<li className={`${styles.navListItem} ${isLinkActive ? "active" : ""}`}>
			<Link href={page.href}>
				<a
					onClick={handleNavClick}
					aria-current={isLinkActive ? "page" : false}
					data-last-nav-item={isLastNavItem}>
					{page.name}
				</a>
			</Link>
		</li>
	)
}
