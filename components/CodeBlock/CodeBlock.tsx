import styles from "./CodeBlock.module.css"
interface ICodeBlockProps {
	codeSnippet: string
}

export const CodeBlock = ({ codeSnippet }: ICodeBlockProps) => {
	return (
		<pre className={styles.codeWrapper}>
			<code>{codeSnippet}</code>
		</pre>
	)
}
