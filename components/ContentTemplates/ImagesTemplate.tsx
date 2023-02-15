import Image from "next/image"
import { NavPage } from "../NavPage/NavPage"
import { CodeBlock } from "../CodeBlock/CodeBlock"
import { imagePageNavigation } from "../../data/pageNavigationLists"
import { TemplateSection } from "../TemplateSection/TemplateSection"

export const ImagesTemplate = () => {
	return (
		<>
			<NavPage pageNavigation={imagePageNavigation} />
			<article>
				<TemplateSection sectionName="introduction" title="Introduction">
					<p>
						A picture is worth more than a thousand words, as the old adage
						goes. Images help bring texts to life, they complement complex
						explanations and often lead to greater understanding and better web
						experiences. For many people they help make things easier to
						understand. However, not everyone can see images and therefore a
						text alternative is needed so that everyone has access to the
						information conveyed in the image.
					</p>
				</TemplateSection>
				<TemplateSection
					sectionName="textAlternatives"
					title="Text Alternatives">
					<p>
						The text alternative for an image depends upon its purpose. Is the
						image purely decorative? Does it help to describe or explain the
						text? Or does it serve a functional role like an icon pointing to
						the homepage?
					</p>
					<p>
						In HTML the text alternative is added to the image element which
						takes an alt attribute. The alt attribute should be present on every
						img element. If the image is an svg it must be given the role of
						image and a title to make it accessible.
					</p>
					<p>
						The alternative text can be read out by screen readers or converted
						into braille for refreshable braille displays. Without it, screen
						reader users may hear the whole image url instead, which can often
						be a string of incomprehensible letters and numbers.
					</p>
					<CodeBlock
						codeSnippet={`<img src="url" alt="The text alternative goes here" />`}
						languageType={"html"}
					/>

					<CodeBlock
						codeSnippet={`<svg role="img" height="210" width="400">
	<title>The text alternative goes here</title>
	<path d="M120 10 L55 200 L265 180 Z" />
</svg>`}
						languageType={"html"}
					/>
				</TemplateSection>
				<TemplateSection
					sectionName="decorativeImages"
					title="Decorative Images">
					<p>
						Decorative images usually add no extra information to a page and a
						person’s understanding is not hindered if the images are not
						visible. Background patterns and shapes are often decorative. Icons
						are also sometimes decorative if they are combined with a link and
						the link text describes the icon. Decorative images should have an
						empty (sometimes also called null) alt attribute.
					</p>
					<div className="imageContainer">
						<Image
							src="/images/imagesTemplate/oldPaperTexture.jpg"
							alt="Old brown paper texture"
							width={300}
							height={200}
							layout="intrinsic"
						/>

						<Image
							src="/images/imagesTemplate/hexagonsPattern.jpg"
							alt="Blue tiled hexagons"
							width={300}
							height={200}
							layout="intrinsic"
						/>
					</div>
					<CodeBlock
						codeSnippet={`<img src="/oldPaperTexture.jpg" alt="" />
<img src="/hexagonsPattern.jpg" alt="" />`}
						languageType={"html"}
					/>
				</TemplateSection>

				<TemplateSection
					sectionName="informativeImages"
					title="Informative Images">
					<p>
						Informative images compliment written information by illustrating
						concepts and examples visually. An image of a cake alongside a
						recipe, a diagram visualising an instruction and a telephone icon
						preceding a phone number are all examples of informative images.
						These should have a short and succinct text alternative.
					</p>
					<div className="imageContainer">
						<Image
							src="/images/imagesTemplate/cupcakes.jpg"
							alt="Cupcakes with pink icing and small sugar heart decorations"
							width={300}
							height={200}
							layout="intrinsic"
						/>
					</div>
					<CodeBlock
						codeSnippet={`<img src="/cupcakes.jpg" alt="Cupcakes with pink icing and small sugar heart decorations" />`}
						languageType={"html"}
					/>

					<h3>Complex Informative Images</h3>
					<p>
						Some informative images such as graphs can convey a lot of complex
						information. In such cases the text alternative needs to convey the
						same information which can be difficult to do in a short and
						succinct alt attribute. In this case the text alternative is split
						into two parts. The alt attribute should summarise the image and
						also explain where a longer form text explanation can be found. The
						longer text can be found on the same page or as a link to a separate
						page.
					</p>
					<p>
						The longer text should convey the same complex information as the
						image. In the case of graphs the data should be explained along with
						any trends or relationships. Avoid using colour as the only way of
						explaining the information as not everyone perceives colour in the
						same way.
					</p>
					<div className="imageContainer">
						<Image
							src="/images/imagesTemplate/drill-instruction.png"
							alt="Drawn instructions for how to use a handheld drill"
							width={200}
							height={175}
							layout="intrinsic"
						/>
					</div>
					<CodeBlock
						codeSnippet={`<img src="drill-instructions.png" alt="How to use a handheld drill. Further instructions below." />`}
						languageType={"html"}
					/>
				</TemplateSection>

				<TemplateSection
					sectionName="functionalImages"
					title="Functional Images">
					<p>
						If images are used as part of a link or button they are usually
						there to perform a function. Examples include using a magnifying
						glass to signify a search field, a floppy disk icon as a save button
						or a logo as a link back to the home page. The text alternative
						should match the action performed by the link or button.
					</p>
					<div className="imageContainer">
						<Image
							src="/images/imagesTemplate/searchBtn.png"
							alt="Magnifying glass used as search button example"
							width={150}
							height={150}
							layout="intrinsic"
						/>
						<Image
							src="/images/imagesTemplate/playBtn.png"
							alt="Triangle used as play button example"
							width={150}
							height={150}
							layout="intrinsic"
						/>
					</div>
					<CodeBlock
						codeSnippet={`<img src="searchBtn.png" alt="Search" />
<img src="playBtn.png" alt="Play" />`}
						languageType={"html"}
					/>
				</TemplateSection>

				<TemplateSection
					sectionName="goodAltText"
					title="How to write good alt text">
					<p>
						Writing good text alternatives is not always easy and there are many
						differing opinions about how to do it well. The text alternative
						should get across all the important information. A good rule of
						thumb is to imagine you are describing an image to someone over the
						phone. Which details would you tell them about? Which details would
						you leave out? The more complex the image, the more detailed your
						alternative text needs to be.
					</p>
					<p>Let's take a look at the following image:</p>
					<div className="imageContainer">
						<Image
							src="/images/imagesTemplate/vw-beetle-car.jpg"
							alt="VW Beetle Car in pale green in front of a pitched roof house painted in the same colour"
							width={600}
							height={400}
							layout="intrinsic"
						/>
					</div>
					<p>
						The focus of this image would depend on the context of where it's
						used. Is the focus the car or the house? Let's look at a couple of
						alternatives.
					</p>
					<p>
						<strong>Alternative 1: The house is for sale</strong>
					</p>
					<p>
						The main focus should be on describing the house. The car is
						probably not important as that won't be included in the house sale.
						Let's try it.
					</p>
					<p>
						<strong>Basic: </strong>House with pitched roof and brown front
						door.
					</p>
					<p>
						<strong>More detailed: </strong>Pale green, one storey house with
						pitched roof, large windows and steps up to a brown front door.
						Surrounded by a white picket fence.
					</p>
					<p>
						<strong>Too detailed? </strong>Pale green, one storey house of
						wooden construction. White painted trim surrounds large windows with
						3 panels on either side of a stained wood front door. The house is
						surrounded by a small garden and white picket fence with steps
						leading from the road to the porch. There is both on-road parking
						out the front and a driveway to the left of the house. The garden is
						well-established with palms, various trees, bushes and vines.
					</p>
					<p>
						<strong>Alternative 2: A car magazine</strong>
					</p>
					<p>
						This time the car is the main focus and the house needs less
						description. However, the house adds to the aesthetic and emotion of
						the image.
					</p>
					<p>
						<strong>Basic: </strong>Vintage car parked on a street.
					</p>
					<p>
						<strong>More detailed: </strong>Soft, pale green vintage VW Beetle
						parked in front of a house painted in the same pale green.
					</p>
					<p>
						<strong>Too detailed? </strong>Soft, pale green vintage VW Beetle in
						excellent condition with shiny silver trim and new tyres. The car is
						parked on a quiet street in front of a one storey house painted in
						the same color in a sleepy suburb.
					</p>
				</TemplateSection>

				<TemplateSection sectionName="imagesOfText" title="Images of Text">
					<p>
						Wherever possible, images of text should be avoided as the text
						can’t be enlarged in the same way as text in HTML. However, if you
						must have an image of text then the alt text should match the text
						in the image.
					</p>
					<div className="imageContainer">
						<Image
							src="/images/imagesTemplate/make-the-day-great.jpg"
							alt="Make the day great sign"
							width={300}
							height={200}
							layout="intrinsic"
						/>
					</div>
					<CodeBlock
						codeSnippet={`<img src="make-the-day-great.jpg" alt="Make the day great sign" />`}
						languageType={"html"}
					/>
				</TemplateSection>
				<TemplateSection
					sectionName="imagesAndColour"
					title="Images and Colour">
					<p>
						Colour should not be the only way to represent meaning in an image
						because not everyone perceives colour in the same way. If colour is
						used in graphs, charts and diagrams then there should also be
						another way to tell the colours apart, such as different patterns or
						symbols.
					</p>
					{
						// TODO: Add an example here of a pie chart or bar chart
					}
				</TemplateSection>
				<TemplateSection sectionName="imageMaps" title="Image Maps">
					<p>
						An image map is a larger image with clickable hotspots, each of
						which open a different section. An example could be a floor plan of
						a local building which opens up an enlarged map of each room when
						clicked. The hotspots are made with the area element and each area
						element should have its own alt attribute. The overall image should
						also have an alt attribute.
					</p>
					<p>
						Let's take a look at the image below. The image itself has an alt
						attribute which describes the whole image. Each area is clickable
						and leads to a Wikipedia article. Each area also has an alt
						attribute describing just that section of the image.
					</p>
					<map name="primary">
						<area
							shape="circle"
							coords="190,130,70"
							href="https://en.wikipedia.org/wiki/Doughnut"
							target="_blank"
							alt="Doughnut"
						/>
						<area
							shape="circle"
							coords="380,250,100"
							href="https://en.wikipedia.org/wiki/Coffee"
							target="_blank"
							alt="Coffee"
						/>
					</map>
					<Image
						useMap="#primary"
						src="/images/imagesTemplate/donut-coffee.png"
						width={600}
						height={400}
						alt="Illustration of a pink doughnut with sprinkles next to a cup of black coffee"
						layout="intrinsic"
					/>
					<CodeBlock
						codeSnippet={`<map name="primary">
	<area
		shape="circle"
		coords="190,130,70"
		href="https://en.wikipedia.org/wiki/Doughnut"
		alt="Doughnut"
	/>
	<area
		shape="circle"
		coords="380,250,100"
		href="https://en.wikipedia.org/wiki/Coffee"
		alt="Coffee"
	/>
</map>
<img
	usemap="#primary"
	src="donut-coffee.png"
	alt="Illustration of a pink doughnut with sprinkles next to a cup of black coffee" 
/>`}
						languageType={"html"}
					/>
				</TemplateSection>
				{/* TODO: <TemplateSection sectionName="checklist"  title="Images Checklist">
					
					<p>Add some points here</p>
				</TemplateSection> */}
				<TemplateSection sectionName="WCAGCriteria" title="WCAG Criteria">
					<a
						href="https://www.w3.org/TR/WCAG21/#non-text-content"
						className="blockLink">
						1.1.1 Non-text content
					</a>
					<a
						href="https://www.w3.org/TR/WCAG21/#use-of-color"
						className="blockLink">
						1.4.1 Use of Color
					</a>
					<a
						href="https://www.w3.org/TR/WCAG21/#images-of-text"
						className="blockLink">
						1.4.5 Images of Text
					</a>
					<a
						href="https://www.w3.org/TR/WCAG21/#images-of-text-no-exception"
						className="blockLink">
						1.4.9 Images of Text (No Exception)
					</a>
				</TemplateSection>
				<TemplateSection sectionName="otherResources" title="Other Resources">
					<a
						href="https://www.w3.org/WAI/tutorials/images/"
						className="blockLink">
						W3C Images Tutorial
					</a>
					<a
						href="https://www.w3.org/WAI/tutorials/images/decision-tree/"
						className="blockLink">
						W3C An alt decision tree
					</a>
					<a
						href="https://jakearchibald.com/2021/great-alt-text/"
						className="blockLink">
						Writing great alt text: Emotion matters
					</a>
					<a
						href="https://tink.uk/thoughts-on-skin-tone-and-text-descriptions.md-notes-on-synthetic-speech/"
						className="blockLink">
						Thoughts on skin tone and text descriptions
					</a>
					<a
						href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map"
						className="blockLink">
						MDN: The Image Map element
					</a>
				</TemplateSection>
			</article>
			<p className="pageLastUpdated">
				<strong>Page last updated: </strong>26th November 2022
			</p>
		</>
	)
}
