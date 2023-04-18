import { useState } from "react"
import { FaCopy, FaCheckSquare } from "react-icons/fa"
import style from "./copyCodeBlock.module.css"

interface CodeSnippet {
	code: string
}

const CopyCodeBlock = ({ code }: CodeSnippet) => {
	const [copyOk, setCopyOk] = useState(false)

	const iconColor = copyOk ? "#0af20a" : "#ddd"

	const handleClick = () => {
		navigator.clipboard.writeText(code)

		setCopyOk(true)
		setTimeout(() => {
			setCopyOk(false)
		}, 500)
	}

	return (
		<button
			className={copyOk ? `${style.codeCopied}` : style.codeCopyBtn}
			onClick={handleClick}
			aria-label="Copy code snippet to clipboard">
			{copyOk ? (
				<FaCheckSquare style={{ color: iconColor }} />
			) : (
				<FaCopy style={{ color: iconColor }} />
			)}
		</button>
	)
}

export default CopyCodeBlock
