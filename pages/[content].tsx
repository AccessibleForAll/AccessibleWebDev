import type { GetStaticPaths, GetStaticProps, NextPage } from "next"

import { Layout } from "../components/Layout/Layout"
import Head from "next/head"
import { capitalizeRoute } from "../utils"
import { pages } from "../data/pages"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

// Components
import { AlertsTemplate } from "../components/ContentTemplates/AlertsTemplate"
import { AnimationsTemplate } from "../components/ContentTemplates/AnimationsTemplate"
import { AudioTemplate } from "../components/ContentTemplates/AudioTemplate"
import { BreadcrumbsTemplate } from "../components/ContentTemplates/BreadcrumbsTemplate"
import { ButtonsTemplate } from "../components/ContentTemplates/ButtonsTemplate"
import { CaptchasTemplate } from "../components/ContentTemplates/CaptchasTemplate"
import { ChartsTemplate } from "../components/ContentTemplates/ChartsTemplate"
import { FormsTemplate } from "../components/ContentTemplates/FormsTemplate"
import { HeadingsTemplate } from "../components/ContentTemplates/HeadingsTemplate"
import { IconsTemplate } from "../components/ContentTemplates/IconsTemplate"
import { ImagesTemplate } from "../components/ContentTemplates/ImagesTemplate"
import { LinksTemplate } from "../components/ContentTemplates/LinksTemplate"
import { ListsTemplate } from "../components/ContentTemplates/ListsTemplate"
import { MenusTemplate } from "../components/ContentTemplates/MenusTemplate"
import { ModalsTemplate } from "../components/ContentTemplates/ModalsTemplate"
import { NavigationTemplate } from "../components/ContentTemplates/NavigationTemplate"
import { TablesTemplate } from "../components/ContentTemplates/TablesTemplate"
import { VideoTemplate } from "../components/ContentTemplates/VideoTemplate"
import { PaginationTemplate } from "../components/ContentTemplates/PaginationTemplate"

interface IProps {
	page: string
}

const ContentPage: NextPage<IProps> = ({ page }) => {
	const title = capitalizeRoute(page)

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { t } = useTranslation("common")

	return (
		<>
			<Head>
				<title>{`${title} - Accessible Web Dev`}</title>
				<meta
					name="description"
					content={`Learn how to make ${title} accessible`}
				/>
				<meta property="og:title" content={`${title} - Accessible Web Dev`} />
				<meta
					property="og:description"
					content={`Learn how to make ${title} accessible`}
				/>
				<meta property="og:url" content={`https://accessibleweb.dev/${page}`} />

				<meta
					property="twitter:url"
					content={`https://accessibleweb.dev/${page}`}
				/>
				<meta name="twitter:title" content={`${title} - Accessible Web Dev`} />
				<meta
					name="twitter:description"
					content={`Learn how to make ${title} accessible`}
				/>
			</Head>
			<Layout activeNavLink={`/${page}`}>
				<>
					<h1>{`Accessible ${title}`}</h1>
					{page === "alerts" && <AlertsTemplate />}
					{page === "animations" && <AnimationsTemplate />}
					{page === "audio" && <AudioTemplate />}
					{page === "breadcrumbs" && <BreadcrumbsTemplate />}
					{page === "buttons" && <ButtonsTemplate />}
					{page === "captchas" && <CaptchasTemplate />}
					{page === "charts" && <ChartsTemplate />}
					{page === "forms" && <FormsTemplate />}
					{page === "headings" && <HeadingsTemplate />}
					{page === "icons" && <IconsTemplate />}
					{page === "images" && <ImagesTemplate />}
					{page === "links" && <LinksTemplate />}
					{page === "lists" && <ListsTemplate />}
					{page === "menus" && <MenusTemplate />}
					{page === "modals" && <ModalsTemplate />}
					{page === "navigation" && <NavigationTemplate />}
					{page === "pagination" && <PaginationTemplate />}
					{page === "tables" && <TablesTemplate />}
					{page === "video" && <VideoTemplate />}
				</>
			</Layout>
		</>
	)
}

export const getStaticPaths: GetStaticPaths = async (context) => {
	const locales = context?.locales || []
	const paths = pages.filter((page) => page.content)

	const pathsWithLocales = paths.flatMap((path) => {
		return locales.map((locale) => {
			return {
				params: {
					content: path.content,
				},
				locale: locale,
			}
		})
	})

	return {
		paths: pathsWithLocales,
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps = async (context) => {
	const content = context.params?.content || ""
	const locale: string = context?.locale || ""

	return {
		props: {
			...(await serverSideTranslations(locale, ["common"])),
			page: content,
		},
	}
}

export default ContentPage
