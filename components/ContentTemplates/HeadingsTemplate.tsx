import Image from "next/image"
import { NavPage } from "../NavPage/NavPage"
import { CodeBlock } from "../CodeBlock/CodeBlock"
import { headingsPageNavigation } from "../../data/pageNavigationLists"
import { TemplateSection } from "../TemplateSection/TemplateSection"

export const HeadingsTemplate = () => {
	return (
		<>
			<NavPage pageNavigation={headingsPageNavigation} />
			<article>
				<TemplateSection sectionName="intro" title="Introduction">
					<p>
						HTML headings are tags that are used to hold titles and subheadings
						on a web page. They range from H1, which holds the overall title of
						the page, to H2 - H6, which hold subheadings. The importance of the
						heading decreases as the number increases.
					</p>
					<p>
						A good way to think about headings is to imagine a table of
						contents. The headings make up the important parts of your content
						that you would want users to find quickly.
					</p>
					<div className="imageContainer">
						<Image
							src="/images/headingsTemplate/contents.png"
							alt="screenshot of a table of contents for article about 20 coffee chats with developers, displaying headings for each section"
							width={400}
							height={400}
							layout="intrinsic"
						/>
					</div>
				</TemplateSection>
				<TemplateSection
					sectionName="whyHeadings"
					title="Why are HTML Headings Important?">
					<p>Headings are important for a number of reasons.</p>
					<ul className="unorderedLists">
						<li>
							They give order and structure to the web page, making it easier
							for users to understand the layout and content of the page.{" "}
						</li>
						<li>
							They allow the browser to index and structure the page visually,
							which helps users find what they are looking for.{" "}
						</li>
						<li>
							They allow screen readers and users to skip to specific sections
							of the page, so they can find the information they need quickly.
						</li>
					</ul>
				</TemplateSection>
				<TemplateSection
					sectionName="includedInHeadings"
					title="What Should Be Included in a Heading?">
					<p>
						When using headings, it is important to include descriptive titles
						and subheadings that accurately describe the content on the page.
						This will help users to find what they are looking for more easily.
						Headings should also be concise and to the point. They should
						clearly summarize the content that follows.
					</p>
				</TemplateSection>

				<TemplateSection
					sectionName="goodHeadings"
					title="How to Write a Good Heading">
					<p>
						Writing a good heading is all about being descriptive, and
						remembering how to nest heading sections within one another in
						sequential order.
					</p>
					<p>Below is a code snippet example with semantic section headings.</p>
					<CodeBlock
						codeSnippet={`<h1> Yoga for Developers </h1>
										<h2> What is Yoga? </h2>
											<h3> The History of Yoga </h3>
												<h4> Yoga's Origin </h4>
												<h4> Yoga in Modern Times </h4>
										<h2> The Benefit of Yoga </h2>
											<h3> Strength Conditioning </h3>
												<h4> Power Yoga </h4>
											<h3> Increasing Flexibility</h3>
												<h4> Gentle Stretches </h4>
													<h5> Stretches for the hands </h5>
														<h6> Prayer Pose </h6>
														<h6> Nerve Gliding Exercises </h6>
															`}
					/>
				</TemplateSection>

				<TemplateSection
					sectionName="avoidHeadings"
					title="What Should We Avoid When Using Headings?">
					<ul className="unorderedLists">
						<li>
							Avoid using more than one H1 on a page, as this can confuse the
							structure and hierarchy of the page. Instead, the H1 should be
							used for the most important topic on the page.
						</li>
						<li>
							Headings should not be chosen for style purposes - use CSS to
							style sections instead.
						</li>
						<li>
							Headings should not be placed in non sequential order to ensure
							that the structure of the page makes sense.
						</li>
					</ul>
				</TemplateSection>
				<TemplateSection sectionName="WCAGCriteria" title="WCAG Criteria">
					<ul className="unorderedLists">
						<li>
							<a
								href="https://www.w3.org/TR/WCAG21/#section-headings"
								className="blockLink">
								2.4.10 Section Headings
							</a>
						</li>
						<li>
							<a
								href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html"
								className="blockLink">
								2.4.6 Headings and Labels
							</a>
						</li>
					</ul>
				</TemplateSection>
				<TemplateSection
					sectionName="QuizQuestions"
					title="Test Your Knowledge">
					<ol className="orderedLists">
						<li>How many H1’s should we have on our webpage?</li>
						<li>Why is heading order important?</li>
						<li>
							Why is it important to have accurate and descriptive headings?
						</li>
						<li>
							How does non-semantic headings affect users of screen readers?
						</li>
						<li>What should we use to change the style of our headings?</li>
						<li>
							If you wanted to add another subsection under an h2 heading that
							is directly related to the h2 subject, what heading number would
							you use?
						</li>
						<li>
							If you wanted to add a new subsection after an h2 that is not
							related to the current subsection of h2, which heading number
							would you use to make a new section?
						</li>
					</ol>
				</TemplateSection>
			</article>
			<p className="pageLastUpdated">
				<strong>Page last updated: </strong>24th December 2022
			</p>
		</>
	)
}
