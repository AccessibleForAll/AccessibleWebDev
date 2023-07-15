import Link from "next/link"
import styles from "./NavPrimary.module.css"
import { IPage } from "../../data/pages"

export interface INavItemProps {
	page: IPage
	activeNavLink: string
	handleNavClick?: () => void
}

export const NavItem = ({
	page,
	activeNavLink,
	handleNavClick,
}: INavItemProps) => {
	const isLinkActive = activeNavLink === page.href
	return (
		<li className={`${styles.navListItem} ${isLinkActive ? "active" : ""}`}>
			<Link href={page.href}>
				<a
					onClick={handleNavClick}
					aria-current={isLinkActive ? "page" : false}>
					{page.name}
				</a>
			</Link>
		</li>
	)
}
