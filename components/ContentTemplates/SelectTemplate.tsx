import { CodeBlock } from "../CodeBlock/CodeBlock"
import { NavPage } from "../NavPage/NavPage"
import { PageUpdated } from "../PageUpdated/PageUpdated"
import { TemplateSection } from "../TemplateSection/TemplateSection"
import { IPageNavigationItem } from "../../data/pageNavigationLists"

export const selectPageNavigation: IPageNavigationItem[] = [
	{ linkName: "Introduction", href: "#introduction" },
	{ linkName: "Custom Select Widgets", href: "#customSelect" },

	{ linkName: "WCAG Criteria", href: "#WCAGCriteria" },
	{ linkName: "Other Resources", href: "#otherResources" },
]

export const SelectTemplate = () => {
	return (
		<>
			<NavPage pageNavigation={selectPageNavigation} />
			<article>
				<TemplateSection sectionName="introduction" title="Introduction">
					<p>
						Select menus are interactive form elements that allow a user to make
						a choice from a list. Select menus have their own semantic HTML
						element which is accessible. This means they can be used by mouse
						users, keyboard users and they work with assistive technology such
						as screen readers automatically.
					</p>
					<label htmlFor="color-select">Choose a color:</label>

					<select name="colors" id="color-select">
						<option value="">--Please choose an option--</option>
						<option value="red">Red</option>
						<option value="blue">Blue</option>
						<option value="green">Green</option>
						<option value="yellow">Yellow</option>
						<option value="purple">Purple</option>
						<option value="orange">Orange</option>
					</select>
					<CodeBlock
						codeSnippet={`<label for="color-select">Choose a color:</label>
<select name="colors" id="color-select">
  <option value="">--Please choose an option--</option>
  <option value="red">Red</option>
  <option value="blue">Blue</option>
  <option value="green">Green</option>
  <option value="yellow">Yellow</option>
  <option value="purple">Purple</option>
  <option value="orange">Orange</option>
</select>`}
						languageType={"html"}
					/>
					<p>
						The label needs to be programmatically associated with the select
						element. This is done by adding a <strong>for</strong> attribute to
						the label element and a matching <strong>id</strong> attribute to
						the select element.
					</p>
					<p>
						Even though the native HTML <strong>{`${" <select>"}`}</strong>{" "}
						element is technically accessible, it can still be difficult to use
						since options do not become visible until the select is actively
						opened. A long list of choices can be difficult to scan through and
						can lead to high cognitive demands on memory. Usability testing
						should always be done to see if a radio group suffices instead. For
						multi-select lists, a list of checkboxes should always be considered
						first.
					</p>
				</TemplateSection>
				<TemplateSection
					sectionName="customSelect"
					title="Custom Select Widgets">
					<p>
						The <strong>{`${" <select>"}`}</strong> element has been notoriously
						hard to style for a long time, and inconsistencies between inbuilt
						browser styles has led many designers to develop a more
						consistent-looking widget which does the same job.
					</p>

					<p>
						It has become much easier to style in recent years, but many
						designers still want consistent design across all browsers. However,
						more consistent design has led to less consistent behaviour as every
						developer implements the widget in their own way. If you do end up
						creating a custom select widget, here's the behaviour you need to
						add to make it accessible:
					</p>
					<ul className="list">
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</TemplateSection>
				<TemplateSection sectionName="" title="">
					<p>blah</p>
				</TemplateSection>
				<TemplateSection sectionName="" title="">
					<p>blah</p>
				</TemplateSection>

				<TemplateSection sectionName="WCAGCriteria" title="WCAG Criteria">
					<ul className="list">
						<li>
							<a
								href="https://www.w3.org/TR/WCAG21/#non-text-content"
								className="blockLink">
								1.1.1 Non-text content
							</a>
						</li>
					</ul>
				</TemplateSection>
				<TemplateSection sectionName="otherResources" title="Other Resources">
					<ul className="list">
						<li>
							<a
								href="https://www.24a11y.com/2019/select-your-poison/"
								className="blockLink">
								Select Your Poison by Sarah Higley
							</a>
						</li>
						<li>
							<a
								href="https://www.24a11y.com/2019/select-your-poison-part-2/"
								className="blockLink">
								Select Your Poison part 2: test all the things by Sarah Higley
							</a>
						</li>
						<li>
							<a
								href="https://adrianroselli.com/2021/03/under-engineered-select-menus.html"
								className="blockLink">
								Under-engineered Select Menus by Adrian Roselli
							</a>
						</li>
						<li>
							<a
								href="https://www.filamentgroup.com/lab/select-css.html"
								className="blockLink">
								Styling a Select Like it's 2019 by Scott Jehl
							</a>
						</li>
					</ul>
				</TemplateSection>
			</article>
			<PageUpdated date="29th July 2024" />
		</>
	)
}
