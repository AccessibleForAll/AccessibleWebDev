import { useState, useRef, useEffect, FocusEvent } from "react"
import { BsCircleHalf, BsFillSunFill, BsFillMoonFill } from "react-icons/bs"

import styles from "./ThemeSwitcher.module.css"

const ThemeSwitcher = () => {
	const [showThemeSwitcher, setShowThemeSwitcher] = useState<boolean>(false)

	const buttonRef = useRef<HTMLButtonElement>(null)

	const handleThemeSwitcher = () => {
		setShowThemeSwitcher((prevState) => !prevState)
	}

	const setTheme = (theme: string) => {
		document.documentElement.className = theme
		localStorage.setItem("theme", theme)
		handleThemeSwitcher()
		buttonRef.current?.focus()
	}

	const setThemeFromOS = () => {
		window.matchMedia("(prefers-color-scheme: dark)").matches
			? (document.documentElement.className = "dark")
			: (document.documentElement.className = "light")
		localStorage.removeItem("theme")
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

	useEffect(() => {
		document.addEventListener("keyup", handleThemeSwitcherKB)

		return () => document.removeEventListener("keyup", handleThemeSwitcherKB)
	}, [])

	let theme
	if (typeof window !== "undefined") {
		theme = localStorage.getItem("theme")
	}

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
					onBlur={handleBlur}>
					<li className={!theme ? styles.activeBtn : ""}>
						<button
							className={styles.themeSwitcherBtn}
							onClick={setThemeFromOS}
							aria-pressed={!theme}>
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
							onClick={() => setTheme("light")}
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
							onClick={() => setTheme("dark")}
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
