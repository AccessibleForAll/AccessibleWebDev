import { useEffect, useRef, useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism"
import CopyCodeBlock from "../CopyCodeBlock/CopyCodeBlock"
import styles from "./CodeBlock.module.css"

type TCodeLanguage =
	| "html"
	| "css"
	| "javascript"
	| "jsx"
	| "typescript"
	| "tsx"
interface ICodeBlockProps {
	codeSnippet: string
	languageType: TCodeLanguage
}

export const CodeBlock = ({ codeSnippet, languageType }: ICodeBlockProps) => {
	const [scrollableRegion, setScrollableRegion] = useState(false)

	const ref = useRef<HTMLPreElement>(null)
	const PreWithRef = (preProps: React.HTMLAttributes<HTMLPreElement>) => (
		<pre {...preProps} ref={ref} />
	)

	useEffect(() => {
		if (ref.current) {
			const element = ref.current
			setScrollableRegion(element.clientWidth < element.scrollWidth)
		}
	}, [])

	return (
		<div className={styles.CodeBlockContainer}>
			<div className={styles.codeLanguage}>{languageType}</div>
			<CopyCodeBlock code={codeSnippet} />
			<SyntaxHighlighter
				language={languageType}
				style={nightOwl}
				className={styles.CodeBlock}
				PreTag={PreWithRef}
				tabIndex={scrollableRegion ? 0 : -1}>
				{codeSnippet}
			</SyntaxHighlighter>
		</div>
	)
}
