import type { GetStaticProps, NextPage } from "next"
import { Layout } from "../components/Layout/Layout"
import Head from "next/head"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import {
	MaintainerCard,
	MaintainerCardProps,
} from "../components/MaintainerCard/MaintainerCard"
import styles from "../styles/about.module.css"

interface AboutProps {
	maintainerData: MaintainerCardProps[]
}

const About: NextPage = (props) => {
	const { maintainerData } = props as AboutProps
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
						{maintainerData.map((maintainer, index) => (
							<MaintainerCard key={index} {...maintainer} />
						))}
					</div>
				</section>
			</Layout>
		</>
	)
}

export const getStaticProps: GetStaticProps = async (context) => {
	const locale: string = context.locale!

	const maintainerData: MaintainerCardProps[] = [
		{
			image: "https://github.com/emmadawsondev.png",
			fullName: "Emma Dawson",
			description:
				"Emma is a full stack developer from Stockholm with a passion for accessibility and open source. She wants to make web accessibility easy to learn for everyone.",
			githubLink: "https://github.com/EmmaDawsonDev",
		},
		{
			image: "https://github.com/ctoffanin.png",
			fullName: "Cristian Toffanin",
			description:
				"Cristian is a full stack developer based in the Netherlands. He's always curious and always learning. He's currently learning about accessibility (Emma's mentee).",
			githubLink: "https://github.com/ctoffanin",
		},
	]

	return {
		props: {
			...(await serverSideTranslations(locale, ["common"])),
			// Will be passed to the page component as props
			maintainerData: maintainerData,
		},
	}
}

export default About
