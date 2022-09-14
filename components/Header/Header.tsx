import Link from "next/link"
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5"

import styles from "./Header.module.css"

import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher"

interface HeaderProps {
	headerTitle: string
	handleNavClick: () => void
	showNavMobile: boolean
}

const Header = (props: HeaderProps) => {
	const { headerTitle, handleNavClick, showNavMobile } = props

	return (
		<>
			<header>
				<div className={styles.topBanner}>
					<Link href="/">Accessible Web Dev</Link>
					<div className={styles.buttonsContainer}>
						<ThemeSwitcher />
						<button
							className={styles.hamburgerBtn}
							onClick={handleNavClick}
							aria-label="Navigation menu"
							aria-expanded={showNavMobile}>
							{!showNavMobile && (
								<IoMenuSharp color="white" size="2.5rem" aria-hidden="true" />
							)}
							{showNavMobile && (
								<IoCloseSharp color="white" size="2.5rem" aria-hidden="true" />
							)}
						</button>
					</div>
				</div>
				<h1 className={styles.headerTitle}>Accessible {headerTitle}</h1>
			</header>
		</>
	)
}

export default Header
