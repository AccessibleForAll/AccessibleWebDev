import "../styles/globals.css"
import type { AppProps } from "next/app"
import { useEffect } from "react"

function MyApp({ Component, pageProps }: AppProps) {

	useEffect(() => {
		// Checks color scheme on first load
		if (localStorage.getItem("theme") === "dark" || localStorage.getItem("theme") === "light") {
			const theme = localStorage.getItem("theme")!
			document.documentElement.className = theme
		} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.documentElement.className = "dark"
		} else {
			document.documentElement.className = "light"
		}
	}, [])

	useEffect(() => {
		// Add listener to update styles when changed from system settings
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
			if (e.matches && !localStorage.getItem("theme")) { document.documentElement.className = 'dark' }
			else if (!e.matches && !localStorage.getItem("theme")) { document.documentElement.className = 'light' }
		});

		// Remove listener
		return () => {
			window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {
			});
		}
	}, []);

	return <Component {...pageProps} />
}

export default MyApp
