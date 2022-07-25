import React from "react"
import Header from "../Header/Header"

interface LayoutProps {
	pageTitle: string
	headerTitle: string
	children: JSX.Element
}

const Layout = (props: LayoutProps) => {
	const { pageTitle, headerTitle, children } = props
	return (
		<>
			<Header pageTitle={pageTitle} headerTitle={headerTitle} />
			<main>{children}</main>
		</>
	)
}

export default Layout
