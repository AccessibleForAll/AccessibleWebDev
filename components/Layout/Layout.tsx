import { useState } from "react"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import { NavPrimary } from "../Nav/NavPrimary"
import { NavPrimaryMobile } from "../Nav/NavPrimaryMobile"
import { SkipLink } from "../SkipLink/SkipLink"
import styles from "./Layout.module.css"

interface ILayoutProps {
	activeNavLink: string
	children: JSX.Element
}

export const Layout = ({ activeNavLink, children }: ILayoutProps) => {
	const [isNavMobileOpen, setIsNavMobileOpen] = useState<boolean>(false)

	const toggleNavMobileOpen = () => {
		setIsNavMobileOpen((prevState) => !prevState)
	}

	return (
		<>
			<SkipLink />
			<Header
				handleNavClick={toggleNavMobileOpen}
				isNavMobileOpen={isNavMobileOpen}
			/>
			<div className={styles.layoutContainer}>
				<NavPrimary activeNavLink={activeNavLink} />
				{isNavMobileOpen && (
					<NavPrimaryMobile
						activeNavLink={activeNavLink}
						closeNavMobile={toggleNavMobileOpen} // since, closeNavMobile prop can only be called when <NavPrimaryMobile /> is in open state so, toggleNavMobileOpen handler can be used for closing nav mobile.
					/>
				)}
				<div className={styles.columnContainer}>
					<main id="main">{children}</main>
					<Footer />
				</div>
			</div>
		</>
	)
}
