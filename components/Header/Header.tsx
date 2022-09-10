import Head from "next/head"
import Link from "next/link"
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5"
import { BsCircleHalf, BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import styles from "./Header.module.css"
import { useState, useRef, useEffect } from "react";

interface ThemeSwitcherProps {
	setShowThemeSwitcher: (value: boolean) => void
}

const ThemeSwitcher = () => {
	// const { setShowThemeSwitcher } = props;

	const [showThemeSwitcher, setShowThemeSwitcher] = useState<boolean>(false)
	const [currentFocusedEl, setCurrentFocusedEl] = useState<string>("")


	const buttonRef = useRef<HTMLButtonElement>(null)
	const systemRef = useRef<HTMLLIElement>(null)
	const lightRef = useRef<HTMLLIElement>(null)
	const darkRef = useRef<HTMLLIElement>(null)



	const handleThemeSwitcher = () => {
		console.log("click");

		setShowThemeSwitcher(prevState => !prevState)
		if (!currentFocusedEl) {
			setCurrentFocusedEl("systemRef")
		}
		// if (showThemeSwitcher) {
		// 	setCurrentFocusedEl("systemRef")
		// }
	}

	const handleThemeSwitcherKB = (e: React.KeyboardEvent<HTMLButtonElement>) => {
		console.log("btn kb");

		if (!showThemeSwitcher && (e.key === "ArrowDown" || e.key === "Down" || e.key === "Enter" || e.key === " ")) {
			setShowThemeSwitcher(true)
			setCurrentFocusedEl("systemRef")
		}
		if (!showThemeSwitcher && (e.key === "ArrowUp" || e.key === "Up")) {
			setShowThemeSwitcher(true)
			setCurrentFocusedEl("darkRef")
		}
		if (e.key === "Esc" || e.key === "Escape") {
			setShowThemeSwitcher(false)
			buttonRef.current?.focus()
			setCurrentFocusedEl("buttonRef")
		}
	}

	console.log(currentFocusedEl, buttonRef)
	const handleMenuKBFocus = (e: React.KeyboardEvent<HTMLUListElement>) => {
		console.log("ul kb");

		if (currentFocusedEl == "systemRef" && (e.key === "ArrowDown" || e.key === "Down")) {
			setCurrentFocusedEl("lightRef")

		}
		if (currentFocusedEl == "lightRef" && (e.key === "ArrowDown" || e.key === "Down")) {
			setCurrentFocusedEl("darkRef")

		}
		if (currentFocusedEl == "darkRef" && (e.key === "ArrowDown" || e.key === "Down")) {
			setCurrentFocusedEl("systemRef")

		}
		if (currentFocusedEl == "systemRef" && (e.key === "ArrowUp" || e.key === "Up")) {
			setCurrentFocusedEl("darkRef")

		}
		if (currentFocusedEl == "lightRef" && (e.key === "ArrowUp" || e.key === "Up")) {
			setCurrentFocusedEl("systemRef")

		}
		if (currentFocusedEl == "darkRef" && (e.key === "ArrowUp" || e.key === "Up")) {
			setCurrentFocusedEl("lightRef")

		}
		if (e.key === "Esc" || e.key === "Escape") {
			setShowThemeSwitcher(false)
			buttonRef.current?.focus()
			setCurrentFocusedEl("buttonRef")

		}
	}




	const setFocusedElement = (value: string) => {
		switch (value) {
			case "systemRef": systemRef.current?.focus();
				break;
			case "lightRef": lightRef.current?.focus();
				break;
			case "darkRef": darkRef.current?.focus()
				break;
			case "buttonRef": buttonRef.current?.focus()
				break;
			default: buttonRef.current?.focus()
		}
	}

	useEffect(() => {
		if (showThemeSwitcher && currentFocusedEl) {
			console.log("useEffect");

			setFocusedElement(currentFocusedEl)
		}
	}, [showThemeSwitcher, currentFocusedEl])

	const setTheme = (theme: string) => {
		console.log("setTheme");

		document.documentElement.className = theme
		localStorage.setItem("theme", theme)
		buttonRef.current?.focus()
		setCurrentFocusedEl("buttonRef")
		//setShowThemeSwitcher(false)
	};

	const setThemeFromOS = () => {
		console.log("setDefault");

		window.matchMedia('(prefers-color-scheme: dark)').matches ? document.documentElement.className = "dark" : document.documentElement.className = "light"
		localStorage.removeItem("theme")
		buttonRef.current?.focus()
		setCurrentFocusedEl("buttonRef")
		//setShowThemeSwitcher(false)
	};

	console.log(showThemeSwitcher);


	let theme;
	if (typeof window !== "undefined") {
		theme = localStorage.getItem("theme")
	}

	return (
		<>
			<button className={styles.themeBtn} ref={buttonRef} onClick={handleThemeSwitcher} onKeyDown={handleThemeSwitcherKB} type="button" id="themeSwitcherBtn" aria-haspopup="true" aria-controls="themeSwitcherMenu" aria-expanded={showThemeSwitcher}>
				<BsCircleHalf color="white" size="1rem" aria-hidden="true" />
				Theme
			</button>
			{showThemeSwitcher && <ul onKeyDown={(e) => handleMenuKBFocus(e)} className={styles.themeSwitcher} role="menu" id="themeSwitcherMenu" aria-labelledby="themeSwitcherBtn">
				<li role="menuitemradio" aria-checked={!theme} onClick={() => { setThemeFromOS(); setShowThemeSwitcher(false); }} onKeyDown={(e) => (e.key === " " || e.key === "Enter") && setThemeFromOS()} ref={systemRef} tabIndex={-1} className={!theme ? styles.activeBtn : ""}>
					<BsCircleHalf size="0.7rem" aria-hidden="true" className={styles.themeIcon} />Device settings</li>
				<li role="menuitemradio" aria-checked={theme === "light"} onClick={() => { setTheme("light"); setShowThemeSwitcher(false); }} onKeyDown={(e) => (e.key === " " || e.key === "Enter") && setTheme("light")} ref={lightRef} tabIndex={-1} className={theme === "light" ? styles.activeBtn : ""}>
					<BsFillSunFill size="0.7rem" aria-hidden="true" className={styles.themeIcon} />Light mode</li>
				<li role="menuitemradio" aria-checked={theme === "dark"} onClick={() => { setTheme("dark"); setShowThemeSwitcher(false); }} onKeyDown={(e) => (e.key === " " || e.key === "Enter") && setTheme("dark")} ref={darkRef} tabIndex={-1} className={theme === "dark" ? styles.activeBtn : ""} >
					<BsFillMoonFill size="0.7rem" aria-hidden="true" className={styles.themeIcon} />Dark mode</li>
			</ul>}
		</>
	)
}

interface HeaderProps {
	pageTitle: string
	headerTitle: string
	handleNavClick: () => void
	showNavMobile: boolean
}

const Header = (props: HeaderProps) => {
	const { pageTitle, headerTitle, handleNavClick, showNavMobile } = props
	// const [showThemeSwitcher, setShowThemeSwitcher] = useState<boolean>(false)

	// const handleThemeSwitcher = () => {
	// 	setShowThemeSwitcher(prevState => !prevState)
	// }

	// const handleThemeSwitcherKB = (e: React.KeyboardEvent<HTMLButtonElement>) => {
	// 	if (e.key === "ArrowDown" || e.key === "Down") {
	// 		setShowThemeSwitcher(true)
	// 	}
	// 	if (e.key === "Esc" || e.key === "Escape") {
	// 		setShowThemeSwitcher(false)
	// 	}
	// }

	// const buttonRef = useRef<HTMLButtonElement>(null)

	return (
		<>
			<Head>
				<title>{`${pageTitle} - Accessible Web Dev`}</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header>
				<div className={styles.topBanner}>
					<Link href="/">Accessible Web Dev</Link>
					<div className={styles.buttonsContainer}>
						{/* <button className={styles.themeBtn} ref={buttonRef} onClick={handleThemeSwitcher} onKeyDown={handleThemeSwitcherKB} type="button" id="themeSwitcherBtn" aria-haspopup="true" aria-controls="themeSwitcherMenu" aria-expanded={showThemeSwitcher}>
							<BsCircleHalf color="white" size="1rem" aria-hidden="true" />
							Theme
						</button>
						{showThemeSwitcher && <ThemeSwitcher setShowThemeSwitcher={setShowThemeSwitcher} />} */}
						<ThemeSwitcher />
						<button className={styles.hamburgerBtn} onClick={handleNavClick} aria-label="Navigation menu" aria-expanded={showNavMobile} >
							{!showNavMobile && <IoMenuSharp color="white" size="2.5rem" aria-hidden="true" />}
							{showNavMobile && <IoCloseSharp color="white" size="2.5rem" aria-hidden="true" />}
						</button>
					</div>

				</div>
				<h1 className={styles.headerTitle}>Accessible {headerTitle}</h1>
			</header>
		</>
	)
}

export default Header
