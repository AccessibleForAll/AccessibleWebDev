interface ICodeBlockProps {
	codeSnippet: string
	languageType: string
}
const defaultType = "html" // default syntaxhighliter argument set as html
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism"

export const CodeBlock = ({ codeSnippet, languageType }: ICodeBlockProps) => {
	return (
		<SyntaxHighlighter language={languageType || defaultType} style={dracula}>
			{codeSnippet}
		</SyntaxHighlighter>
	)
}
