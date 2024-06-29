import Link from "next/link"
import styles from "./Footer.module.css"
import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs"

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerTop}>
				<ul className={styles.footerList}>
					<li>
						<Link href="/about" className={styles.footerLink}>
							About the maintainers
						</Link>
					</li>

					<li>
						<a
							href="https://github.com/AccessibleForAll/AccessibleWebDev/blob/main/CONTRIBUTING.md"
							className={styles.footerLink}>
							Become a Contributor
						</a>
					</li>
					<li>
						<a
							href="https://github.com/sponsors/EmmaDawsonDev"
							className={styles.footerLink}>
							Support Us
						</a>
					</li>
					<li>
						<a
							href="mailto:emma.l.dawson@gmail.com"
							className={styles.footerLink}>
							Contact Us
						</a>
					</li>
					<li>
						<Link href="/" className={styles.footerLink}>
							Accessibility Statement - coming soon
						</Link>
					</li>
				</ul>
			</div>
			<div className={styles.footerBottom}>
				<p className={styles.footerCopyrightText}>
					© Accessible Web Dev by <strong>Accessible For All</strong>. Making
					accessibility accessible for everyone!
				</p>

				<a href="https://github.com/AccessibleForAll">
					<BsGithub
						className={styles.footerLogos}
						size="1.5rem"
						aria-label="Github"
					/>
				</a>
			</div>
		</footer>
	)
}
