import { NextPage } from "next"

const ChartsPage: NextPage = () => {
	return <div>ChartsPage</div>
}

export default ChartsPage

/* 
Short label
Longer description of chart type, summary of data and trends, convey ALL info in chart
Don't use color (or other visuals) in explanation, explain in another way
Description doesn't have to be prose, it could be a table
longdesc attribute links to longer desc at another URI - deprecated
If a longer desc is on the page for all to see, use an aria-describedby attribute to link the sections to each other. aria-describedby must be on the same page.


TEST - remove the chart. Does the alt text convey everything?
*/
