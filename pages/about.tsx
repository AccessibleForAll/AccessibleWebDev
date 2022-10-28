import type { GetStaticProps, NextPage } from "next"
import Layout from "../components/Layout/Layout"
import Head from "next/head"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import MaintainerCard, {
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
						{maintainerData.map((e) => {
							return MaintainerCard(e)
						})}
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
			image: "",
			fullName: "Emma Dawson",
			description:
				"Emma is a full stack developer from Stockholm with a passion for accessibility and open source. She wants to make web accessibility easy to learn for everyone.",
			githubLink: "https://github.com/EmmaDawsonDev",
		},
		{
			image: "",
			fullName: "Cristian Toffanin",
			description:
				"Doggo ipsum many pats long doggo shooberino shoober aqua doggo, pupperino mlem h*ck. Woofer much ruin diet heckin good boys heckin adorable doggo, super chub yapper.",
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
