import type { GetStaticProps, NextPage } from "next"
import Layout from "../components/Layout/Layout"
import Head from "next/head"
import WorkInProgress from "../components/WorkInProgress/WorkInProgress"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

const About: NextPage = () => {
	const { t } = useTranslation("common")
	return (
		<>
			<Head>
				<title>{`About - Accessible Web Dev`}</title>
				<meta
					name="description"
					content="About the Accessible Web Dev site & team"
				/>
			</Head>
			<Layout headerTitle="About Us" activeNavLink="">
				<section>
					<WorkInProgress />
				</section>
			</Layout>
		</>
	)
}

export const getStaticProps: GetStaticProps = async (context) => {
	const locale: string = context.locale!

	return {
		props: {
			...(await serverSideTranslations(locale, ["common"])),
			// Will be passed to the page component as props
		},
	}
}

export default About
