import { NextPage } from "next"
import { useRouter } from "next/router"
import Layout from "../../components/Layout/Layout"
import { capitalizeRouter } from "../../utils"

const CaptchasPage: NextPage = () => {
	const router = useRouter()
	const title = capitalizeRouter(router.pathname)
	return (
		<Layout pageTitle={title} headerTitle={title}>
			<p>CAPTCHAS - coming soon</p>
		</Layout>
	)
}

export default CaptchasPage

/* 
text alternative defeats the point as can be read by a robot
Provide at least 2 different modalities eg visual and auditory
Access to human customer service to bypass
Don't require authenticated/authorised users to do captcha

*/
