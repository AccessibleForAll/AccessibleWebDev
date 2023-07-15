import { useState, useRef, useEffect, FocusEvent } from "react"
import { BsCircleHalf } from "react-icons/bs"
import { useTheme } from "next-themes"
import useOnClickOutside from "../../customHooks/useOnClickOutside"

import styles from "./ThemeSwitcher.module.css"
import { themes } from "./themes"

export const ThemeSwitcher = () => {
	const [showThemeSwitcher, setShowThemeSwitcher] = useState<boolean>(false)
	const { theme, setTheme } = useTheme()

	const buttonRef = useRef<HTMLButtonElement>(null)
	const divRef = useRef<HTMLDivElement>(null)

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

	useOnClickOutside(divRef, handleClickOutside)

	useEffect(() => {
		document.addEventListener("keyup", handleThemeSwitcherKB)

		return () => document.removeEventListener("keyup", handleThemeSwitcherKB)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div ref={divRef}>
			<button
				className={styles.themeBtn}
				type="button"
				id="themeSwitcherBtn"
				aria-controls="themeSwitcherMenu"
				onClick={handleThemeSwitcher}
				aria-expanded={showThemeSwitcher}
				ref={buttonRef}>
				<BsCircleHalf
					className={styles.themeIcon}
					size="1rem"
					aria-hidden="true"
				/>
				Theme
			</button>
			{showThemeSwitcher && (
				<ul
					className={styles.themeSwitcher}
					id="themeSwitcherMenu"
					aria-labelledby="themeSwitcherBtn"
					onBlur={handleBlur}>
					{themes.map(({ label, value, Icon }) => (
						<li key={label} className={theme === value ? styles.activeBtn : ""}>
							<button
								className={styles.themeSwitcherBtn}
								onClick={() => handleChangeTheme(value)}
								aria-pressed={theme === value}>
								<Icon
									size="0.7rem"
									aria-hidden="true"
									className={styles.themeIcon}
								/>
								{label}
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}
