import { Sandpack, SandpackFile } from "@codesandbox/sandpack-react"

import styles from "./Playground.module.css"

type FileType = {
	[fileName: string]: SandpackFile
}

type Props = {
	files: FileType
}

/**
 * Playground component
 * @returns Ui for playground
 */
const Playground = (props: Props) => {
	return (
		<div className={styles.container}>
			<Sandpack theme="auto" template="static" files={{ ...props.files }} />
		</div>
	)
}

export default Playground
