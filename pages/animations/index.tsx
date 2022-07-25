import { NextPage } from "next"
import { useRouter } from "next/router"

//Components
import Layout from "../../components/Layout/Layout"

// Utils
import { capitalizeRouter } from "../../utils"

const AnimationsPage: NextPage = () => {
	const router = useRouter()
	const title = capitalizeRouter(router.pathname)
	return (
		<Layout pageTitle={title} headerTitle={title}>
			<p>Animations - coming soon</p>
		</Layout>
	)
}

export default AnimationsPage

/*
Should have an alt text
Animation shows instructions:Short alt to describe animation. Long alt containing instructions.


*/
