import type { NextPage } from "next"
import Layout from "../components/Layout/Layout"
import Head from "next/head"
import WorkInProgress from "../components/WorkInProgress/WorkInProgress"

const About: NextPage = () => {
	return (
		<>
			<Head>
				<title>{`About - Accessible Web Dev`}</title>
				<meta name="description" content="About the Accessible Web Dev site & team" />
			</Head>
			<Layout headerTitle="About Us" activeNavLink="">
				<section>
          <WorkInProgress />
				</section>
			</Layout>
		</>
	)
}

export default About