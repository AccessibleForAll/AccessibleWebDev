import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism"

type TcodeLanguage =
	| "html"
	| "css"
	| "javascript"
	| "jsx"
	| "typescript"
	| "tsx"
interface ICodeBlockProps {
	codeSnippet: string
	languageType: TcodeLanguage
}

export const CodeBlock = ({ codeSnippet, languageType }: ICodeBlockProps) => {
	return (
		<SyntaxHighlighter
			language={languageType}
			style={dracula}
			wrapLongLines={true}>
			{codeSnippet}
		</SyntaxHighlighter>
	)
}
