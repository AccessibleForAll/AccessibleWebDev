import beautify from "js-beautify"

export const capitalizeRoute = (phrase: string) => {
	return phrase.charAt(0).toUpperCase() + phrase.slice(1)
}

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

export const formatCss = (code: string) => {
	return beautify.css_beautify(code)
}
