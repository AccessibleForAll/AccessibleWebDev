/* eslint-disable @next/next/no-img-element */
import React from "react"
import styles from "../styles/pageNotFound.module.css"
import notFoundImage from "../public/404.png"
import Image from "next/image"
import Head from "next/head"
import Layout from "../components/Layout/Layout"
import { useRouter } from "next/router"

const PageNotFound = () => {
	const router = useRouter()
	return (
		<>
			<Head>
				<title>{`Page Not Found - Accessible Web Dev`}</title>
				<meta name="description" content="404 - Page Not Found" />
			</Head>
			<Layout headerTitle="404 - Not Found" activeNavLink={""}>
				<>
					<h2>Oops, we could not find this page.</h2>

					<Image
						src={notFoundImage.src}
						alt="Page not found"
						width={400}
						height={300}
					/>
				</>
			</Layout>
		</>
	)
}

export default PageNotFound
