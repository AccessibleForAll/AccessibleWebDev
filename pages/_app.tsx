import "../styles/globals.css"
import type { AppProps } from "next/app"
import { useEffect } from "react"

function MyApp({ Component, pageProps }: AppProps) {

	// useEffect(() => {
	// 	console.log(window.matchMedia);

	// 	if (localStorage.getItem("theme") === "dark" || localStorage.getItem("theme") === "light") {
	// 		const theme = localStorage.getItem("theme")!
	// 		document.documentElement.className = theme
	// 	} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
	// 		document.documentElement.className = "dark"
	// 	} else {
	// 		document.documentElement.className = "light"
	// 	}
	// }, [])

	return <Component {...pageProps} />
}

export default MyApp
