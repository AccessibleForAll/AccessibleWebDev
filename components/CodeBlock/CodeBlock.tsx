import SyntaxHighlighter from "react-syntax-highlighter"

// The theme needs to be imported from cjs rather than esm otherwise it breaks
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism"

interface ICodeBlockProps {
	codeSnippet: string
	language: string
}

export const CodeBlock = ({ codeSnippet, language }: ICodeBlockProps) => {
	return (
		<SyntaxHighlighter
			language={language}
			style={materialDark}
			wrapLongLines={true}>
			{codeSnippet}
		</SyntaxHighlighter>
	)
}

export default CodeBlock
