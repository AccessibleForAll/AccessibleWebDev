import { useState } from "react"
import { FaCopy, FaCheckSquare } from "react-icons/fa"
import styles from "./CopyCodeBlock.module.css"

interface CodeSnippet {
	code: string
}

const CopyCodeBlock = ({ code }: CodeSnippet) => {
	const [copyOk, setCopyOk] = useState(false)

	const handleClick = () => {
		navigator.clipboard.writeText(code)

		setCopyOk(true)
		setTimeout(() => {
			setCopyOk(false)
		}, 3000)
	}

	return (
		<button
			className={styles.codeCopyBtn}
			onClick={handleClick}
			aria-label="Copy code snippet to clipboard">
			{copyOk ? (
				<>
					<FaCheckSquare />
					Copied
				</>
			) : (
				<>
					<FaCopy />
					Copy
				</>
			)}
		</button>
	)
}

export default CopyCodeBlock
