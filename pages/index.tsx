import type { NextPage } from "next"
import { useRouter } from "next/router"
import Layout from "../components/Layout/Layout"

const Home: NextPage = () => {
	const router = useRouter()
	return (
		<Layout
			pageTitle="Home"
			headerTitle="Web Dev"
			activeNavLink={router.pathname}>
			<p>Main page - coming soon</p>
		</Layout>
	)
}

export default Home
