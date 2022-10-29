/* eslint-disable @next/next/no-img-element */
import React from "react"
import notFoundImage from "../public/404.png"
import Image from "next/image"
import Head from "next/head"
import { Layout } from "../components/Layout/Layout"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { GetStaticProps } from "next"

const PageNotFound = () => {
	const { t } = useTranslation("common")
	return (
		<>
			<Head>
				<title>{`Page Not Found - Accessible Web Dev`}</title>
				<meta name="description" content="404 - Page Not Found" />
			</Head>
			<Layout headerTitle="404 - Not Found" activeNavLink={""}>
				<div className="center">
					<Image
						src={notFoundImage.src}
						alt="Page not found"
						width={800}
						height={600}
					/>
				</div>
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

export default PageNotFound
