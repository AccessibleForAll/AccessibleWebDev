import SyntaxHighlighter from "react-syntax-highlighter"
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism"

interface ICodeBlockProps {
	codeSnippet: string
	language: string
}

export const CodeBlock = ({ codeSnippet, language }: ICodeBlockProps) => {
	return (
		<SyntaxHighlighter language={language} style={okaidia} wrapLongLines={true}>
			{codeSnippet}
		</SyntaxHighlighter>
	)
}

export default CodeBlock
