import { useState } from "react"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import { NavPrimary } from "../Nav/NavPrimary"
import { NavPrimaryMobile } from "../Nav/NavPrimaryMobile"
import { SkipLink } from "../SkipLink/SkipLink"
import styles from "./Layout.module.css"

interface LayoutProps {
	headerTitle: string
	activeNavLink: string
	children: JSX.Element
}

export const Layout = (props: LayoutProps) => {
	const { headerTitle, activeNavLink, children } = props

	const [showNavMobile, setShowNavMobile] = useState<boolean>(false)

	const handleNavClick = () => {
		setShowNavMobile((prevState) => !prevState)
	}

	return (
		<>
			<SkipLink />
			<Header
				headerTitle={headerTitle}
				handleNavClick={handleNavClick}
				showNavMobile={showNavMobile}
			/>
			<div className={styles.layoutContainer}>
				<NavPrimary activeNavLink={activeNavLink} />
				{showNavMobile && (
					<NavPrimaryMobile
						activeNavLink={activeNavLink}
						handleNavClick={handleNavClick}
					/>
				)}
				<main id="main">{children}</main>
			</div>
			<Footer />
		</>
	)
}
