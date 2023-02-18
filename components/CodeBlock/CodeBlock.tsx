import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism"

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
		<SyntaxHighlighter language={languageType} style={dracula}>
			{codeSnippet}
		</SyntaxHighlighter>
	)
}
