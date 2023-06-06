import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism"
import CopyCodeBlock from "../CopyCodeBlock/CopyCodeBlock"
import style from "./CodeBlock.module.css"

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
	return (
		<div className={style.CodeBlockContainer}>
			<CopyCodeBlock code={codeSnippet} />
			<SyntaxHighlighter
				language={languageType}
				style={nightOwl}
				className={style.CodeBlock}>
				{codeSnippet}
			</SyntaxHighlighter>
		</div>
	)
}
