import Link from "next/link";
import styles from "./NavPrimary.module.css"

type Page = { name: string; href: string }

interface NavItemProps {
	page: Page
    activeNavLink: string
    handleNavClick?: () => void
}

const NavItem = (props: NavItemProps) => {
	const { page, activeNavLink, handleNavClick } = props

    
	return (
		<li
			className={`${styles.navListItem} ${
				activeNavLink === page.href ? "active" : ""
			}`}>
			<Link href={page.href}>
                <a onClick={handleNavClick}>{page.name}</a></Link>
		</li>
	)
}

export default NavItem;