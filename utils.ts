import beautify from "js-beautify"

export const capitalizeRoute = (phrase: string) => {
	return phrase.charAt(0).toUpperCase() + phrase.slice(1)
}

/**
 * Function to format HTML in js literal, that is passed to playground
 * @param {string} code : html code to be formatted
 * @returns formatted HTML
 */
export const formatHtml = (code: string) => {
	const htmlTemplate = `
	<html>
<head>
<link rel="stylesheet" href="./Wrapper.css" />
</head>
<body>                             
${code}
</body>
</html>`

	return beautify.html(htmlTemplate)
}

/**
 * Function to format css in js literal, that is passed to playground
 * @param {string} code : css code to be formatted
 * @returns formatted css
 */
export const formatCss = (code: string) => {
	return beautify.css_beautify(code)
}
