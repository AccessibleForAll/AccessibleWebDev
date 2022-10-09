import type { GetStaticProps, NextPage } from "next"
import Layout from "../components/Layout/Layout"
import Head from "next/head"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

const Home: NextPage = () => {
	const { t } = useTranslation("homepage")

	return (
		<>
			<Head>
				<title>{t("pageTitle")}</title>
				<meta name="description" content={t("metaContent")} />
			</Head>
			<Layout headerTitle="Accessible Web Dev" activeNavLink="/">
				<section>
					<h2>{t("welcome")}</h2>
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

export const getStaticProps: GetStaticProps = async (context) => {
	const locale: string = context.locale!
	console.log(context)

	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "homepage"])),
			// Will be passed to the page component as props
		},
	}
}

export default Home
