import type { GetStaticProps, NextPage } from "next"
import Layout from "../components/Layout/Layout"
import Head from "next/head"
import WorkInProgress from "../components/WorkInProgress/WorkInProgress"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { MaintainerCardProps } from "../components/MaintainerCard/MaintainerCard"

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
					<WorkInProgress />
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
			description: "",
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
