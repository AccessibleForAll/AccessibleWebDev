import styles from "./CodeBlock.module.css"
interface ICodeBlockProps {
	codeSnippet: string
	codeDescription: string
}

export const CodeBlock = ({
	codeSnippet,
	codeDescription,
}: ICodeBlockProps) => {
	return (
		<pre className={styles.codeWrapper} aria-label={codeDescription}>
			<code>{codeSnippet}</code>
		</pre>
	)
}

export default CodeBlock
