import Image from "next/image"
import { NavPage } from "../NavPage/NavPage"
import { CodeBlock } from "../CodeBlock/CodeBlock"
import { imagePageNavigation } from "../../data/pageNavigationLists"

const ImagesTemplate = () => {
	return (
		<>
			<NavPage pageNavigation={imagePageNavigation} />
			<article>
				<section aria-labelledby="introduction" className="infoSection">
					<h2 id="introduction">Introduction</h2>
					<p>
						A picture is worth more than a thousand words, as the old adage
						goes. Images help bring texts to life, they complement complex
						explanations and often lead to greater understanding and better web
						experiences. For many people they help make things easier to
						understand. However, not everyone can see images and therefore a
						text alternative is needed so that everyone has access to the
						information conveyed in the image.
					</p>
				</section>
				<section aria-labelledby="textAlternatives" className="infoSection">
					<h2 id="textAlternatives">Text Alternatives</h2>
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
						language="html"
						codeSnippet={`<img src="url" alt="The text alternative goes here" />`}
					/>

					<CodeBlock
						language="html"
						codeSnippet={`<svg role="img" height="210" width="400">
	<title>The text alternative goes here</title>
	<path d="M120 10 L55 200 L265 180 Z" />
</svg>`}
					/>
				</section>
				<section aria-labelledby="decorativeImages" className="infoSection">
					<h2 id="decorativeImages">Decorative Images</h2>
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
							width={250}
							height={175}
						/>

						<Image
							src="/images/imagesTemplate/hexagonsPattern.jpg"
							alt="Blue tiled hexagons"
							width={250}
							height={175}
						/>
					</div>
					<CodeBlock
						language="html"
						codeSnippet={`<img src="/oldPaperTexture.jpg" alt="" />
<img src="/hexagonsPattern.jpg" alt="" />`}
					/>
				</section>

				<section aria-labelledby="informativeImages" className="infoSection">
					<h2 id="informativeImages">Informative Images</h2>
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
							alt="Old brown paper texture"
							width={250}
							height={175}
						/>

						<Image
							src="/images/imagesTemplate/drill-instruction.png"
							alt="Blue tiled hexagons"
							width={200}
							height={175}
						/>
					</div>
					<CodeBlock
						language="html"
						codeSnippet={`<img src="/cupcakes.jpg" alt="Cupcakes with pink icing and small sugar heart decorations" />
<img src="drill-instructions.png" alt="How to use a handheld drill. Further instructions below." />`}
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
				</section>

				<section aria-labelledby="functionalImages" className="infoSection">
					<h2 id="functionalImages">Functional Images</h2>
					<p>
						If images are used as part of a link or button they are usually
						there to perform a function. Examples include using a magnifying
						glass to signify a search field, a floppy disk icon as a save button
						or a logo as a link back to the home page. The text alternative
						should match the action performed by the link or button.
					</p>
				</section>

				<section aria-labelledby="goodAltText" className="infoSection">
					<h2 id="goodAltText">How to write good alt text</h2>
					<p>Some text goes here</p>
				</section>

				<section aria-labelledby="imagesOfText" className="infoSection">
					<h2 id="imagesOfText">Images of Text</h2>
					<p>
						Wherever possible, images of text should be avoided as the text
						can’t be enlarged in the same way as text in HTML. However, if you
						must have an image of text then the alt text should match the text
						in the image.
					</p>
				</section>
				<section aria-labelledby="imagesAndColour" className="infoSection">
					<h2 id="imagesAndColour">Images and Colour</h2>
					<p>
						Colour should not be the only way to represent meaning in an image
						because not everyone perceives colour in the same way. If colour is
						used in graphs, charts and diagrams then there should also be
						another way to tell the colours apart, such as different patterns or
						symbols.
					</p>
				</section>
				<section aria-labelledby="imageMaps" className="infoSection">
					<h2 id="imageMaps">Image Maps</h2>
					<p>
						An image map is a larger image with clickable hotspots, each of
						which open a different section. An example could be a floor plan of
						a local building which opens up an enlarged map of each room when
						clicked. The hotspots are made with the area element and each area
						element should have its own alt attribute. The overall image should
						also have an alt attribute.
					</p>
				</section>
				<section aria-labelledby="checklist" className="infoSection">
					<h2 id="checklist">Images Checklist</h2>
					<p>Add some points here</p>
				</section>
				<section aria-labelledby="WCAGCriteria" className="infoSection">
					<h2 id="WCAGCriteria">WCAG Criteria</h2>
					<p>Add list of links here</p>
				</section>
				<section aria-labelledby="otherResources" className="infoSection">
					<h2 id="otherResources">Other Resources</h2>
					<p>Add list of links here</p>
				</section>
			</article>
			<p className="pageLastUpdated">
				<strong>Page last updated: </strong>19th November 2022
			</p>
		</>
	)
}

export default ImagesTemplate
