import { NextPage } from "next"
import { useRouter } from "next/router"
import Layout from "../../components/Layout/Layout"
import { capitalizeRouter } from "../../utils"

const IconsPage: NextPage = () => {
	const router = useRouter()
	const title = capitalizeRouter(router.pathname)
	return (
		<Layout
			pageTitle={title}
			headerTitle={title}
			activeNavLink={router.pathname}>
			<p>Icons - coming soon</p>
		</Layout>
	)
}

export default IconsPage

/*
Icons need an aria-label or aria-labelledby attribute if not an image with an alt attribute
SVG icons can be provided a title and aria-labelledby="title id"
Icons and text can be placed within the same link so that it only gets read out once
Emoticons
aria-label & aria-labelledby

*/
