import Link from "next/link"
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5"
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher"

import styles from "./Header.module.css"

export interface IHeaderProps {
	handleNavClick: () => void
	showNavMobile: boolean
}

export const Header = ({ handleNavClick, showNavMobile }: IHeaderProps) => {
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
			</header>
		</>
	)
}
