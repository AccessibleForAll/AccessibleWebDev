import "../styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"
import { appWithTranslation } from "next-i18next"
import { ThemeProvider } from "next-themes"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<meta property="og:title" content="Accessible Web Dev" />
				<meta
					property="og:description"
					content="Learn the basics about web accessibility in a clear and easy to understand way"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://accessibleweb.dev/" />
				<meta
					property="og:image"
					content="https://user-images.githubusercontent.com/57045550/192143094-d3987a9c-4bc9-4d42-b1e3-25ba7655a4bd.png"
				/>
			</Head>
			<ThemeProvider attribute="class">
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	)
}

export default appWithTranslation(MyApp)
