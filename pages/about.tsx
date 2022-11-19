import type { GetStaticProps, NextPage } from "next"
import { Layout } from "../components/Layout/Layout"
import Head from "next/head"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import {
	MaintainerCard,
	MaintainerCardProps,
} from "../components/MaintainerCard/MaintainerCard"
import { currentMaintainers, IMaintainer } from "../data/maintainers"
import styles from "../styles/about.module.css"

interface AboutProps {
	currentMaintainerData: IMaintainer[]
}

const About: NextPage = (props) => {
	const { currentMaintainerData } = props as AboutProps
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
					<h2>Current Maintainers</h2>
					<div className={styles.aboutRow}>
						{currentMaintainerData.map((maintainer, index) => (
							<MaintainerCard key={index} maintainer={maintainer} />
						))}
					</div>
				</section>
			</Layout>
		</>
	)
}

export const getStaticProps: GetStaticProps = async (context) => {
	const locale: string = context.locale!

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
