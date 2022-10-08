/* eslint-disable @next/next/no-img-element */
import React from "react"
import notFoundImage from "../public/404.png"
import Image from "next/image"
import Head from "next/head"
import Layout from "../components/Layout/Layout"

const PageNotFound = () => {
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

export default PageNotFound
