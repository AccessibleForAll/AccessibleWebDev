import type { NextPage } from "next"
import { useRouter } from "next/router"
import Layout from "../components/Layout/Layout"
import Head from "next/head"

const Home: NextPage = () => {
	const router = useRouter()
	return (
		<>
			<Head>
				<title>{`Home - Accessible Web Dev`}</title>
				<meta name="description" content="Learn the basics about web accessibility in a clear and easy to understand way" />
			</Head>
			<Layout headerTitle="Web Dev" activeNavLink={router.pathname}>
				<section>
					<h2>Welcome!</h2>
					<p>
						Accessible web dev is here to make accessibility more understandable
						for developers and designers as current standards can be hard to
						understand.
					</p>
					<p>
						This is not a replacement for current standards but hopefully a
						complement to them and help on your journey to creating more
						accessible web experiences for everyone.
					</p>
					<p>
						Each page will contain a variety of examples of how to make specific
						elements or widgets accessible. It will also provide links to
						resources and further reading.
					</p>
					<p>
						It is currently a work in progress so not all pages are finished (or
						even started). If you don't find what you are looking for please
						feel free to{" "}
						<a href="https://github.com/AccessibleForAll/AccessibleWebDev/issues/new/choose">
							raise an issue on GitHub.
						</a>
					</p>
				</section>
			</Layout>
		</>
	)
}

export default Home
