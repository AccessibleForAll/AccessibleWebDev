import { CodeBlock } from "../CodeBlock/CodeBlock"
import { NavPage } from "../NavPage/NavPage"
import { PageUpdated } from "../PageUpdated/PageUpdated"
import { TemplateSection } from "../TemplateSection/TemplateSection"
import { chartPageNavigation } from "../../data/pageNavigationLists"

export const ChartsTemplate = () => {
	return (
		<>
			<NavPage pageNavigation={chartPageNavigation} />
			<TemplateSection sectionName="introduction" title="Introduction">
				<p>
					The chart is a visual representation of data that uses symbols, lines,
					or bars to convey information. Whether it's comparing features of two
					mobile devices on a website, results of a survey on a social media
					post, or a person's monthly progress in their goal, charts should be
					conveyed in a way that is easy to for all users to read and
					understand.
				</p>
			</TemplateSection>
			<TemplateSection sectionName="typesOfCharts" title="Types of Charts">
				<p>
					Common types of that are used on the web include:
					<ol>
						<li>Comparison Charts: Often used to compare two products</li>
						<li>Bar Charts:Often used to used to compare sale results</li>
						<li>Line Charts: Often used to convey a company's history</li>
					</ol>
				</p>
			</TemplateSection>
			<TemplateSection
				sectionName="howToCreate"
				title="How to Create a Comparison Chart">
				<p> Out of all the charts used on websites, comparison charts tend to be
					used the most. Here's how to add this piece of content to your
					website.</p>
				<ol> 
<li>  Add the table element </li> 
<CodeBlock languageType="html" codeSnippet={
							`<table>
								
								</table> 
						`} 
						/>
						<li> Add a table head: This helps create the list of categories that will be compared.</li>
						<CodeBlock languageType="html" codeSnippet={ 
							`<thead>
								<tr>
									<th>Category 1</th>
									<th>Category 2</th>
									<th>Category 3</th>
								</tr>
							</thead>
						`} 
						/>
						<li> Add the `<tbody>`, `<td>`, and `<tr>` elements: These help create the data that will be compared</li>
						<CodeBlock languageType="html" codeSnippet={
							`<tbody>
								<tr>
									<td>Data 1</td>
									<td>Data 2</td>
									<td>Data 3</td>
								</tr>
							</tbody>
						`}
						/>
<p> Here's how the table looks as a whole</p>
<CodeBlock languageType="html" codeSnippet={
							`<table>
								<thead>
									<tr>
										<th>Category 1</th>
										<th>Category 2</th>
										<th>Category 3</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Data 1</td>
										<td>Data 2</td>
										<td>Data 3</td>
									</tr>
								</tbody>
							</table>
						`} 
						/>
				</ol>	
			</TemplateSection>
			<TemplateSection
				sectionName="accessibilityTips"
				title="Tips to make your charts accessible">
				<p> Here are some ways you can make your charts accessible</p>
				<ol>
					<li>**Use descriptive labels:** Clearly describe significant parts of the chart (e.g., the title and x and y-axises). Make data points and columns distinguishable by using clear labels and different colors. </li>
					<li> **Be selective about color choices:** Use a color contrast checker to ensure that the colors in your chart can be detected by screen readers.</li>
					<li>**Use other sources:** Consider using different forms of media to present the data whether its images, text, short clips, etc. This would help people comprehend the data in their own way. </li>
				</ol>
			</TemplateSection>
		</>
	)
}
