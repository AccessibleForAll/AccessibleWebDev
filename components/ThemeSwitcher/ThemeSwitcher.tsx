import { useState, useRef, useEffect, FocusEvent } from "react"
import { BsCircleHalf, BsFillSunFill, BsFillMoonFill } from "react-icons/bs"
import { useTheme } from "next-themes"
import useOnClickOutside from "../../customHooks/useOnClickOutside"

import styles from "./ThemeSwitcher.module.css"

const ThemeSwitcher = () => {
	const [showThemeSwitcher, setShowThemeSwitcher] = useState<boolean>(false)
	const { theme, setTheme } = useTheme()

	const buttonRef = useRef<HTMLButtonElement>(null)
	const ulListRef = useRef<HTMLUListElement>(null)

	const handleThemeSwitcher = () => {
		setShowThemeSwitcher((prevState) => !prevState)
	}

	const handleChangeTheme = (theme: string) => {
		setTheme(theme)
		handleThemeSwitcher()
		buttonRef.current?.focus()
	}

	const handleThemeSwitcherKB = (e: { key: string }) => {
		if (e.key === "Esc" || e.key === "Escape") {
			handleThemeSwitcher()
			buttonRef.current?.focus()
		}
	}

	const handleBlur = (e: FocusEvent) => {
		if (!e.currentTarget.contains(e.relatedTarget) && showThemeSwitcher) {
			setShowThemeSwitcher(false)
		}
	}

	const handleClickOutside = () => {
		setShowThemeSwitcher(false)
	}

	useOnClickOutside(ulListRef, handleClickOutside)

	useEffect(() => {
		document.addEventListener("keyup", handleThemeSwitcherKB)

		return () => document.removeEventListener("keyup", handleThemeSwitcherKB)
	}, [])

	return (
		<>
			<button
				className={styles.themeBtn}
				type="button"
				id="themeSwitcherBtn"
				aria-controls="themeSwitcherMenu"
				onClick={handleThemeSwitcher}
				aria-expanded={showThemeSwitcher}
				ref={buttonRef}>
				<BsCircleHalf color="white" size="1rem" aria-hidden="true" />
				Theme
			</button>
			{showThemeSwitcher && (
				<ul
					className={styles.themeSwitcher}
					id="themeSwitcherMenu"
					aria-labelledby="themeSwitcherBtn"
					onBlur={handleBlur}
					ref={ulListRef}>
					<li className={theme === "system" ? styles.activeBtn : ""}>
						<button
							className={styles.themeSwitcherBtn}
							onClick={() => handleChangeTheme("system")}
							aria-pressed={theme === "system"}>
							<BsCircleHalf
								size="0.7rem"
								aria-hidden="true"
								className={styles.themeIcon}
							/>
							Device settings
						</button>
					</li>
					<li className={theme === "light" ? styles.activeBtn : ""}>
						<button
							className={styles.themeSwitcherBtn}
							onClick={() => handleChangeTheme("light")}
							aria-pressed={theme === "light"}>
							<BsFillSunFill
								size="0.7rem"
								aria-hidden="true"
								className={styles.themeIcon}
							/>
							Light mode
						</button>
					</li>
					<li className={theme === "dark" ? styles.activeBtn : ""}>
						<button
							className={styles.themeSwitcherBtn}
							onClick={() => handleChangeTheme("dark")}
							aria-pressed={theme === "dark"}>
							<BsFillMoonFill
								size="0.7rem"
								aria-hidden="true"
								className={styles.themeIcon}
							/>
							Dark mode
						</button>
					</li>
				</ul>
			)}
		</>
	)
}

export default ThemeSwitcher
