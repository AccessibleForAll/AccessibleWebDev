import { NextPage } from 'next'

const ImagesPage: NextPage = () => {
  return (
    <main>
      <h1>Images</h1>
    </main>
  )
}

export default ImagesPage

/*
Images = non-text content
Must be perceivable by ppl who can't see or have difficulty interpreting eg cognitive
Must have a text alternative
Should present same info as non-text
Should be able to substitute non text for text without loss of meaning
Alt text converted to speech or braille by AT
Alt text is searchable
Functional images = functional alt text
Text in image should be included in alt text
Interactive image maps - short alt text plus describes interactive purpose eg "Building floor plan. Select a room for more info"
Questions to ask - why is the image here? What is it's purpose/function? What words would I use instead?
Include a decision tree
Decorative images have null alt text
Can group multiple images under one alt text eg star ratings. Provide alt on only 1 star then mark the rest as decorative
ASCII art - provide alt text and skip link
Images of text = all text should be provided in alt text format
Short alt text not enough? Provide both short and long.
longdesc attribute - a URI to another page containing longer desc longdesc="image-description.html" deprecated
If a longer desc is on the page for all to see, use an aria-describedby attribute to link the sections to each other
<img src="url" alt="short desc" aria-describedby="idtosection" />
Use [End of description] to mark end of text for longdesc so they know they can go back

TEST - remove the image. Does the alt text convey everything?
*/
