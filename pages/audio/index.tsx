import { NextPage } from "next"
import { useRouter } from "next/router"
import Layout from "../../components/Layout/Layout"
import { capitalizeRouter } from "../../utils"

const AudioPage: NextPage = () => {
	const router = useRouter()
	const title = capitalizeRouter(router.pathname)
	return (
		<Layout
			pageTitle={title}
			headerTitle={title}
			activeNavLink={router.pathname}>
			<p>Audio - coming soon</p>
		</Layout>
	)
}

export default AudioPage

/*
Audio recording - link to transcript directly after recording
Transcripts ideally identify speakers, and describe important/relevant/significant sounds
Audio used to signal correct/incorrect answers - provide text alternative too
*/
