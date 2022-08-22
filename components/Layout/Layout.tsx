import React, { useState } from "react"
import Header from "../Header/Header"
import NavPrimary from "../Nav/NavPrimary"
import NavPrimaryMobile from "../Nav/NavPrimaryMobile"
import styles from "./Layout.module.css"

interface LayoutProps {
	pageTitle: string
	headerTitle: string
	activeNavLink: string
	children: JSX.Element
}

const Layout = (props: LayoutProps) => {
	const { pageTitle, headerTitle, activeNavLink, children } = props

	const [showNavMobile, setShowNavMobile] = useState<boolean>(false)

	const handleNavClick = () => {
		setShowNavMobile(prevState => !prevState)
	}

	return (
		<>
			<Header pageTitle={pageTitle} headerTitle={headerTitle} handleNavClick={handleNavClick} showNavMobile={showNavMobile} />
			<div className={styles.layoutContainer}>
				<NavPrimary activeNavLink={activeNavLink} />
				{showNavMobile && <NavPrimaryMobile activeNavLink={activeNavLink} handleNavClick={handleNavClick} />}
				<main>{children}</main>
			</div>
		</>
	)
}

export default Layout
