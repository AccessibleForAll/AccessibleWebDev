import type { GetStaticProps, NextPage } from "next"
import { Layout } from "../components/Layout/Layout"
import Head from "next/head"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { TipOfTheDay } from "../components/TipOfTheDay"

const Home: NextPage = () => {
	const { t } = useTranslation("homepage")

	return (
		<>
			<Head>
				<title>{t("pageTitle")}</title>
				<meta name="description" content={t("metaContent")} />
				<meta property="og:title" content="Accessible Web Dev" />
				<meta
					property="og:description"
					content="Learn the basics about web accessibility in a clear and easy to understand way"
				/>
				<meta property="og:url" content="https://accessibleweb.dev/" />

				<meta property="twitter:url" content="https://accessibleweb.dev/" />
				<meta name="twitter:title" content="Accessible Web Dev" />
				<meta
					name="twitter:description"
					content="Learn the basics about web accessibility in a clear and easy to understand way"
				/>
			</Head>
			<Layout activeNavLink="/">
				<div>
					<h1>Accessible Web Dev</h1>
					<section>
						<h2>{t("heading.welcome")}</h2>
						<p>{t("para.text1")}</p>
						<p>{t("para.text2")}</p>
						<p>{t("para.text3")}</p>
						<p>
							{t("para.text4")}{" "}
							<a href="https://github.com/AccessibleForAll/AccessibleWebDev/issues/new/choose">
								{t("link.githubIssue")}
							</a>
						</p>
						<TipOfTheDay />
					</section>
				</div>
			</Layout>
		</>
	)
}

export const getStaticProps: GetStaticProps = async (context) => {
	const locale: string = context?.locale || ""

	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "homepage"])),
			// Will be passed to the page component as props
		},
	}
}

export default Home
