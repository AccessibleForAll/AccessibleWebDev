import type { GetStaticProps, NextPage } from "next"
import { Layout } from "../components/Layout/Layout"
import Head from "next/head"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { MaintainerCard } from "../components/MaintainerCard/MaintainerCard"
import { currentMaintainers, IMaintainer } from "../data/maintainers"
import styles from "../styles/about.module.css"

interface IAboutProps {
	currentMaintainerData: IMaintainer[]
}

const About: NextPage<IAboutProps> = ({ currentMaintainerData }) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { t } = useTranslation("common")
	return (
		<>
			<Head>
				<title>{`About - Accessible Web Dev`}</title>
				<meta
					name="description"
					content="About the Accessible Web Dev site & team"
				/>
				<meta property="og:title" content="Accessible Web Dev - About" />
				<meta property="og:description" content="About Accessible Web Dev" />
				<meta property="og:url" content="https://accessibleweb.dev/about" />

				<meta
					property="twitter:url"
					content="https://accessibleweb.dev/about"
				/>
				<meta name="twitter:title" content="Accessible Web Dev - About" />
				<meta name="twitter:description" content="About Accessible Web Dev" />
			</Head>
			<Layout activeNavLink="">
				<div>
					<h1>About Us</h1>
					<section>
						<h2>Current Maintainers</h2>
						<div className={styles.aboutRow}>
							{currentMaintainerData.map((maintainer, index) => (
								<MaintainerCard key={index} maintainer={maintainer} />
							))}
						</div>
					</section>
				</div>
			</Layout>
		</>
	)
}

export const getStaticProps: GetStaticProps = async (context) => {
	const locale: string = context?.locale || ""

	const currentMaintainerData = currentMaintainers

	return {
		props: {
			...(await serverSideTranslations(locale, ["common"])),
			// Will be passed to the page component as props
			currentMaintainerData: currentMaintainerData,
		},
	}
}

export default About
