import React from "react"
import Header from "../Header/Header"
import NavPrimary from "../Nav/NavPrimary"
import styles from "./Layout.module.css"

interface LayoutProps {
	pageTitle: string
	headerTitle: string
	activeNavLink: string
	children: JSX.Element
}

const Layout = (props: LayoutProps) => {
	const { pageTitle, headerTitle, activeNavLink, children } = props
	return (
		<>
			<Header pageTitle={pageTitle} headerTitle={headerTitle} />
			<div className={styles.layoutContainer}>
				<NavPrimary activeNavLink={activeNavLink} />
				<main>{children}</main>
			</div>
		</>
	)
}

export default Layout
