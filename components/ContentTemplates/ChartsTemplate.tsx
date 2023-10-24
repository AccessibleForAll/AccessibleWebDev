import { CodeBlock } from "../CodeBlock/CodeBlock"
import { NavPage } from "../NavPage/NavPage"
import { PageUpdated } from "../PageUpdated/PageUpdated"
import { TemplateSection } from "../TemplateSection/TemplateSection"
import { chartsPageNavigation } from "../../data/pageNavigationLists"

export const ChartsTemplate = () => {
	return (
		<>
			<NavPage pageNavigation={chartsPageNavigation} />
			<TemplateSection sectionName="introduction" title="Introduction">
				<p>
					The chart is a visual representation of data that uses symbols, lines,
					or bars to convey information. Whether it's comparing the features of two
					mobile devices on a website, results of a survey on a social media
					post, or a person's monthly progress in their goal, charts should be
					conveyed in a way that is easy for all users to read and
					understand. Unfortunately, that's not always the case.
				</p>
<h3> Common issues</h3>
				<ul>
                <li>Same color scheme: Charts tend to use the same style of colors, which makes it difficult for low-vision and visually-impaired users to read their content</li>
				<li>X and y-axes: The x and y-axes in charts make it harder for people with dyscalculia and other learning and neurocognitive disabilities to understand the the relationship between the two axes and interpret the chart's data points</li>
				</ul>
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
				sectionName="accessibilityTips"
				title="Tips to make your charts accessible">
				<p> Here are some ways you can make your charts accessible</p>
				<h2>Images of Charts</h2>
				<p>
					Like any other image, it's important to add alternative text when
					you're adding images of charts to your website and mobile
					applications. Per <a href="https://www.w3.org/WAI/tutorials/images/complex/"> W3C's standards for complex images</a>, it's best to use to long descriptions when writing alt text for charts, so that people, especially those who have low-vision and other disabilities, have an easier time reading the chart's content. Adding this information can get difficult, so consider using the following method to help you:
					</p>
					<CodeBlock languageType="markdown" codeSnippet={`alt="Chart type of type data where reason for including chart"`}
					<p>Here it is in action:</p>
					<CodeBlock languageType="html" codeSnippet={`<p> <img src="breast-cancer-stats-charts.jpg" alt="Bar graph of breast cancer cases per 100,000 American women where Black women have 124.0 more rates of incidences than their white counterparts"> </p>`}
					<h2>Working with Interactive Charts</h2>
				<p>Interactive charts tend to have interactive features such as animated images, videos, progress bars. While they make the charts more engaging, the UI of these features tend to be small and complex, making it difficult for visually-impaired users and those with limited motor skills to interact with(no pun intended 😉). Here's some ways to make these charts interactive for everyone:</p>
				<ul>
					<li><strong>Make it keyboard accessible:</strong> The keyboard is a tool that makes it easier for low-vision and motor-limited users to navigate websites, so it's important to make every visual keyboard-friendy. For example, if your chart has a link users need to click on in order to view content, ensure that the <kbd> Enter</kbd> key can be used to access it</li>
					<li> <strong>Create a dark and light version:</strong> While dark mode makes it easier for people who are sensitive to light, it can cause the pupils to dilate, making a person's vision blurry. So it's best to offer a light and dark version to satisfy both users</li>
					<li><strong> Make static visuals a preference:</strong>  The modifiable nature of interactive visuals tends to make it difficult screen readers to analyze this information so consider using static visuals as they tend to be more screen reader and keyboard-friendly.</li>
				</ul>
				<h2> Using Colors</h2>
				<p> As previously mentioned, charts tend use the same color scheme, which makes it difficult for low-vision users to access the content. Here are some ways to make the colors of your charts more accessible:</p>
                            <ul>
				    <li><strong>Use a single-hue palette:</strong> It makes the chart readable for all sorts of color-blindness</li>
				    <li><strong>Use a color contrast checker:</strong> Let's be honest, choosing accessible colors can be be hassle, so color contrast checkers can be very helpful in ensuring that your color palette provides colors that make it easy for everyone to view your charts. </li>
			    </ul>
				<h2> Presenting information</h2>
                                  <p> When comes to presenting information in your charts, here are some things to keep in mind to ensure they are accessible:</p>
				<ul>
					<li><strong>Use clear label and descriptions:</strong> Place labels and legends to mark and distinguish significant data points in your charts. Also, create titles that summarize the message of your charts. Doing these methods would help users, especially those who are neurodivergent, gain a better understanding of your chart's purpose and content</li>
					<li><strong>Provide other resources:</strong> Some people learn visually. Others learn with auditory, so it's important to provides other forms of content whether it's an article, blog, video, etc. That way these users would gain a better understanding of your chart</li>
				</ul>
				</TemplateSection>
			<TemplateSection sectionName="recommendedTools" title="Recommended Resources">
				<p>Here are some resources we recommend to help you create accessible charts</p>
				<ul>
					<li> <a href="https://webaim.org/resources/contrastchecker/"> WebAIM: Contrast Color Checker</a></li>
					<li> <a href="https://accessiblepalette.com/"> Accessible Palette</a></li>
				</ul>
			</TemplateSection> 
			<TemplateSection sectionName="accessibilityCriteria" title="WCAG Criteria">
				<ul>
			 {/* add content later */}
				</ul>
			</TemplateSection> 
		</>
	)
}
