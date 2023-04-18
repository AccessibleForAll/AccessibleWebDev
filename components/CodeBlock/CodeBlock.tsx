import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism"
import CopyCodeBlock from "../CopyCodeBlock/CopyCodeBlock"

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
		<div style={{ position: "relative" }}>
			<CopyCodeBlock code={codeSnippet} />
			<SyntaxHighlighter
				language={languageType}
				style={dracula}
				wrapLongLines={true}
				className="contain">
				{codeSnippet}
			</SyntaxHighlighter>
		</div>
	)
}
