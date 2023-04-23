import { useState } from "react"
import { FaCopy, FaCheckSquare } from "react-icons/fa"
import style from "./CopyCodeBlock.module.css"

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
			className={style.codeCopyBtn}
			onClick={handleClick}
			aria-label="Copy code snippet to clipboard">
			{copyOk ? (
				<>
					<FaCheckSquare className={style.faCopSymbol} />
					<span className={style.cpyText}>copied</span>
				</>
			) : (
				<>
					<FaCopy className={style.faCopySymbol} />
					<span className={style.cpyText}>copy</span>
				</>
			)}
		</button>
	)
}

export default CopyCodeBlock
