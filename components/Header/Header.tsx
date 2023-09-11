import Link from "next/link"
import Image from "next/image"
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
					<Link href="/">
						<Image
							src="/AWD.svg"
							alt="Accessible Web Dev Logo"
							width="60"
							height="60"
						/>
					</Link>
					<div className={styles.buttonsContainer}>
						<ThemeSwitcher />
						<button
							className={styles.hamburgerBtn}
							onClick={handleNavClick}
							aria-label="Navigation menu"
							aria-expanded={showNavMobile}>
							{!showNavMobile && (
								<IoMenuSharp size="1.5rem" aria-hidden="true" />
							)}
							{showNavMobile && (
								<IoCloseSharp size="1.5rem" aria-hidden="true" />
							)}
						</button>
					</div>
				</div>
			</header>
		</>
	)
}
