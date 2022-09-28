/* eslint-disable @next/next/no-img-element */
import React from "react"
import styles from "../styles/pageNotFound.module.css"
import notFoundImage from "../public/404.png"
import Link from "next/link"

const PageNotFound = () => {
	return (
		<div className={styles.notFound}>
			<div className={styles.left}>
				<h1 className={styles.headingPrimary}>
					Oops, we couldn't find this page.
				</h1>
				<p className={styles.description}>
					Here are some helpful links instead:
				</p>
				<ul className={styles.linkList}>
					<li className={styles.linkItems}>
						<Link href="/">
							<a className={styles.link}> Home </a>
						</Link>
					</li>
					<li className={styles.linkItems}>
						<Link href="/animations">
							<a className={styles.link}>Animations</a>
						</Link>
					</li>
					<li className={styles.linkItems}>
						<Link href="/audio">
							<a className={styles.link}>Audio</a>
						</Link>
					</li>
					<li className={styles.linkItems}>
						<Link href="/captchas">
							<a className={styles.link}>Captachs</a>
						</Link>
					</li>
					<li className={styles.linkItems}>
						<Link href="/charts">
							<a className={styles.link}>Charts</a>
						</Link>
					</li>
					<li className={styles.linkItems}>
						<Link href="/icons">
							<a className={styles.link}>Icons</a>
						</Link>
					</li>
					<li className={styles.linkItems}>
						<Link href="/images">
							<a className={styles.link}>Images</a>
						</Link>
					</li>
				</ul>
			</div>
			<div className={styles.right}>
				<img
					src={notFoundImage.src}
					className={styles.notFoundImage}
					alt="not found"
				/>
			</div>
		</div>
	)
}

export default PageNotFound
