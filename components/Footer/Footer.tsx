import Link from "next/link"
import React from "react"
import styles from "./Footer.module.css"
import { BsGithub } from "react-icons/bs"

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__top}>
				<div className={styles.footer__box}>
					<h2 className={styles.footer__linkHeading}>Community</h2>
					<ul className={styles.footer__linkList}>
						<li className={styles.footer__linkItems}>
							<a
								href="https://github.com/AccessibleForAll"
								className={styles.footer__links}>
								GitHub Page
							</a>
						</li>
						<li className={styles.footer__linkItems}>
							<a
								href="https://github.com/AccessibleForAll/AccessibleWebDev/blob/main/CONTRIBUTING.md"
								className={styles.footer__links}>
								Become a Contributor
							</a>
						</li>
						<li className={styles.footer__linkItems}>
							<a href="#" className={styles.footer__links}>
								Sponsor Us
							</a>
						</li>
					</ul>
				</div>
				<div className={styles.footer__box}>
					<h2 className={styles.footer__linkHeading}>Company</h2>
					<ul className={styles.footer__linkList}>
						<li className={styles.footer__linkItems}>
							<Link href="/">
								<a className={styles.footer__links}>Home</a>
							</Link>
						</li>
						<li className={styles.footer__linkItems}>
							<Link href="/about">
								<a className={styles.footer__links}>About</a>
							</Link>
						</li>
						<li className={styles.footer__linkItems}>
							<Link href="/">
								<a className={styles.footer__links}>Contact Me</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.footer__bottomDetails}>
				<p className={styles.footer__copyrightText}>
					© Accessible Web Dev by{" "}
					<strong className={styles.footer__copyrightTextName}>
						Accessible For All
					</strong>
					. Making accessibility accessible for everyone!
				</p>
				<div className={styles.footer__mediaIcon}>
					<a href="https://github.com/AccessibleForAll">
						<BsGithub color="white" size="2rem" aria-label="Github" />
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
