import Link from "next/link"
import React from "react"
import styles from "./footer.module.css"

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.footer__top}>
				<ul className={styles.footer__box}>
					<li className={styles.footer__linkName}>Community</li>
					<li className={styles.footer__linkItems}>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://github.com/AccessibleForAll"
							className={styles.footer__links}>
							Github Page
						</a>
					</li>
					<li className={styles.footer__linkItems}>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://github.com/AccessibleForAll/AccessibleWebDev/blob/main/CONTRIBUTING.md"
							className={styles.footer__links}>
							{" "}
							Become a Contributor
						</a>
					</li>
					<li className={styles.footer__linkItems}>
						<a href="#" className={styles.footer__links}>
							Sponsor Us
						</a>
					</li>
				</ul>
				<ul
					className={styles.footer__box}
					style={{ paddingInlineStart: "0px" }}>
					<li className={styles.footer__linkName}>Company</li>
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
						<Link href="/about">
							<a className={styles.footer__links}>Contact Me</a>
						</Link>
					</li>
				</ul>
			</div>
			<div className={styles.footer__bottomDetails}>
				<span className={styles.footer__copyrightText}>
					© Accessible Web Dev by{" "}
					<b className={styles.footer__copyrightTextName}>Accessible For All</b>
					. Making accessibility accessible for everyone!
				</span>
				<div className={styles.footer__mediaIcon}>
					<a
						href="https://github.com/AccessibleForAll"
						target="_blank"
						rel="noreferrer">
						<svg
							fill="#FFF"
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							viewBox="0 0 24 24">
							<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Footer
