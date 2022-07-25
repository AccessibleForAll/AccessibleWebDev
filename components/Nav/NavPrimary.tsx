import Link from "next/link"
import styles from "./NavPrimary.module.css"

type Page = { name: string; href: string }

const pages: Page[] = [
	{ name: "Home", href: "/" },
	{ name: "Animations", href: "/animations" },
	{ name: "Audio", href: "/audio" },
	{ name: "CAPTCHAS", href: "/captchas" },
	{ name: "Charts", href: "/charts" },
	{ name: "Icons", href: "/icons" },
	{ name: "Images", href: "/images" },
	{ name: "Video", href: "/video" },
]

interface NavProps {
	activeNavLink: string
}

interface NavItemProps extends NavProps {
	page: Page
}

const NavItem = (props: NavItemProps) => {
	const { page, activeNavLink } = props
	return (
		<li
			className={`${styles.navListItem} ${
				activeNavLink === page.href ? "active" : ""
			}`}>
			<Link href={page.href}>{page.name}</Link>
		</li>
	)
}

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
