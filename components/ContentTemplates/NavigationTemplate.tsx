import { navigationPageNavigation } from "../../data/pageNavigationLists"
import { CodeBlock } from "../CodeBlock/CodeBlock"
import { NavPage } from "../NavPage/NavPage"
import { PageUpdated } from "../PageUpdated/PageUpdated"
import { TemplateSection } from "../TemplateSection/TemplateSection"

// same order
// multiple navs on a page

export const NavigationTemplate = () => {
	return (
		<>
			<NavPage pageNavigation={navigationPageNavigation} />
			<TemplateSection sectionName="introduction" title="Introduction">
				<p>
					A website navigation is a section of the page aimed at helping you
					find the main sections of a website. HTML has a semantic &lt;nav&gt;
					element which should be used around all navigations on the page. This
					element is a landmark element and can be used by screen reader users
					to more easily find their way around the page.
				</p>
			</TemplateSection>
			<TemplateSection sectionName="simpleNav" title="A Simple Navigation">
				<p>
					In its simplest form a navigation is a list of links to other pages
					within a larger website or to other regions of the same page. A nav
					element wraps an unordered list of links in order to communicate how
					long the navigation is.
				</p>

				<CodeBlock
					codeSnippet={`<nav>
	<ul>
		<li>
			<a href"/">Link 1</a>
		</li>
		<li>
			<a href"/">Link 2</a>
		</li>
		<li>
			<a href"/">Link 3</a>
		</li>
	</ul>
</nav>`}
					languageType={"html"}
				/>
			</TemplateSection>
			<TemplateSection sectionName={"hamburgerMenus"} title={"Hamburger Menus"}>
				<p>
					Often on mobile there is not space for a full navigation and a common
					pattern is to use a hamburger menu. This is usually a button with an
					icon that looks like three layers of a hamburger and represents the
					place to find the navigation. Pressing the button opens the navigation
					and often the icon will change to a cross to signify a close button.
				</p>
				<p>
					To make a hamburger menu accessible it must be reachable and operable
					by keyboard only. If a button element is used then this will happen
					automatically. It should have a clear label stating the function of
					the button and it should also announce whether it is opened or closed
					to screen reader users. For this, aria-label and aria-expanded are
					useful and JavaScript will be needed to toggle the navigation open and
					closed.
				</p>
				{
					// TODO: Fix this code block!
				}
				<CodeBlock
					codeSnippet={`<button id="hamburgerMenu" class="navButton" aria-label="Navigation menu" aria-expanded="false" aria-controls="primaryNav">
	Menu
</button>
<nav id="primaryNav" class="hidden">
	<ul class="primaryNavList">
		<li>
			<a href="#">Item 1</a>
		</li>
		<li>
			<a href="#">Item 2</a>
		</li>
		<li>
			<a href="#">Item 3</a>
		</li>
	</ul>
</nav>`}
					languageType={"html"}
				/>
				<CodeBlock
					codeSnippet={`.navButton {
  position: relative;
}

.primaryNavList {
  position: absolute;
  list-style: none;
  margin: 0;
  padding: 0;
  border: 1px solid black;
  width: 10rem;
  z-index: 1;
}

.primaryNavList li {
  padding: 1rem;
}

.hidden {
  display: none;
}`}
					languageType={"css"}
				/>
				<CodeBlock
					codeSnippet={`const navButton = document.getElementById("hamburgerMenu");
const disclosure = document.getElementById("primaryNav");
const listItems = disclosure.querySelectorAll("li a");

function openNavigation() {
  navButton.setAttribute("aria-expanded", "true");
  disclosure.classList.remove("hidden");
}

function closeNavigation() {
  navButton.setAttribute("aria-expanded", "false");
  disclosure.classList.add("hidden");
}

function toggleNavigation() {
  const open = navButton.getAttribute("aria-expanded");
  open === "false" ? openNavigation() : closeNavigation();
}

// This function closes an open disclosure if a user tabs away from the last anchor element in the list. It is reliant on the ul container having a class to check whether the relatedTarget is within the disclosure. If not, it will close.
function handleBlur() {
  const navList = event.currentTarget.closest(".primaryNavList");
  if (!event.relatedTarget || !navList.contains(event.relatedTarget)) {
    closeNavigation();
  }
}

navButton.addEventListener("click", toggleNavigation);

// add event to the last item in the nav list to trigger the disclosure to close if the user tabs out of the disclosure
listItems[listItems.length - 1].addEventListener("blur", handleBlur);

// Close the disclosure if a user presses the escape key
window.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    navButton.focus();
    closeNavigation();
  }
});`}
					languageType={"javascript"}
				/>
			</TemplateSection>
			<TemplateSection sectionName={"megaMenus"} title={"Mega Menus"}>
				<p>
					Mega menus are more complex navigations with nested links to different
					sections and pages. Examples can often be found on popular clothing
					chain websites.
				</p>
				<p>
					The top level of a mega menu is usually broken up into broad
					categories. These categories can be made with buttons that trigger a
					popup to open when pressed. The list of navigation links is then
					shown.
				</p>
				<p>
					In the example below a very simple "Mega Menu" is shown with only two
					sections. These can be extended as necessary.
				</p>
				<CodeBlock
					codeSnippet={`<nav>
  <ul class="nav-list">
    <li class="nav-group">
      <button id="navItem1" class="navItem" aria-expanded="false" aria-controls="disclosure1">Nav 1 &#9660;</button>
      <ul class="disclosure hidden" id="disclosure1">
        <li>
          <a href="#">Dropdown 1 - item 1</a>
        </li>
        <li>
          <a href="#">Dropdown 1 - item 2</a>
        </li>
        <li>
          <a href="#">Dropdown 1 - item 3</a>
        </li>
      </ul>
    </li>
    <li class="nav-group">
      <button id="navItem2" class="navItem" aria-expanded="false" aria-controls="disclosure2">Nav list 2 &#9660;</button>
      <ul class="disclosure hidden" id="disclosure2">
        <li>
          <a href="#">Dropdown 2 - item 1</a>
        </li>
        <li>
          <a href="#">Dropdown 2 - item 2</a>
        </li>
      </ul>
    </li>
  </ul>
</nav>`}
					languageType={"html"}
				/>
				<CodeBlock
					codeSnippet={`.disclosure {
  position: absolute;
  border: 1px solid black;
  width: 12rem;
  padding: 0.5rem 1rem;
  z-index: 1;
}

.disclosure li {
  margin: 0.5rem 0;
}

.hidden {
  display: none;
}`}
					languageType={"css"}
				/>
				<CodeBlock
					codeSnippet={`const navButtons = document.querySelectorAll(".navItem");
const disclosures = document.querySelectorAll(".disclosure");

function openNavigation(button) {
  button.setAttribute("aria-expanded", "true");
  // The ul is a direct sibling to the button
  const disclosure = button.nextElementSibling;
  disclosure.classList.remove("hidden");
}

function closeNavigation(button) {
  button.setAttribute("aria-expanded", "false");
  const disclosure = button.nextElementSibling;
  disclosure.classList.add("hidden");
}

function toggleNavigation(index) {
  // First we close any open dropdowns not related to the current button in focus by looping over all nav buttons
  navButtons.forEach((button, buttonIndex) => {
    if (buttonIndex != index) {
      closeNavigation(button);
    }
  });
  const currentButton = event.target;
  const open = currentButton.getAttribute("aria-expanded");
  open === "false"
    ? openNavigation(currentButton)
    : closeNavigation(currentButton);
}

// This function closes an open disclosure if a user tabs away from the last anchor element in the list. It is reliant on the top-level list item of the top level ul having a class to find the group containing button + disclosure it controls
function handleBlur(button) {
  const navList = event.currentTarget.closest(".nav-group");
  if (!event.relatedTarget || !navList.contains(event.relatedTarget)) {
    closeNavigation(button);
  }
}

// Adds the toggle event to every top level button
navButtons.forEach((button, index) => {
  button.addEventListener("click", () => toggleNavigation(index));
});

// This adds the handleBlur event to the last anchor element in each disclosure
disclosures.forEach((disclosure) => {
  const listItems = disclosure.querySelectorAll("li a");
  listItems[listItems.length - 1].addEventListener("blur", (event) => {
    handleBlur(disclosure.previousElementSibling);
  });
});

// This adds a global event listener to close any open disclosures when the escape key is pressed
window.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    const navButtonsArr = Array.from(navButtons);
    const currentOpenButtonIndex = navButtonsArr.findIndex(
      (button) => button.getAttribute("aria-expanded") === "true"
    );
    // If there is an open disclosure, close it and send focus back to the button that controls it.
    if (currentOpenButtonIndex >= 0) {
      const currentOpenButton = navButtons[currentOpenButtonIndex];
      currentOpenButton.focus();
      closeNavigation(currentOpenButton);
    }
  }
});`}
					languageType={"javascript"}
				/>
			</TemplateSection>
			<TemplateSection sectionName={"linksOrder"} title={"Order of Links"}>
				<p>
					To help users find their way around easily, it's important that the
					relative order of links remains the same across all pages within a web
					site.
				</p>
			</TemplateSection>
			<TemplateSection
				sectionName={"multipleNavs"}
				title={"Multiple Navigations Per Page"}>
				<p>
					It is common to have more than one navigation per page, for example a
					primary navigation that takes people between different pages of the
					website and a secondary navigation that takes people to different
					sections within a page.
				</p>
				<p>
					When there are multiple navigations using the nav element it is
					important to differentiate them for screen reader users by labelling
					them. Use aria-label or aria-labelledby to let screen reader users
					know the different functions of the navigation elements.
				</p>

				<CodeBlock
					codeSnippet={`<nav aria-label="Site">
				...
				</nav>
				`}
					languageType={"html"}
				/>
				<CodeBlock
					codeSnippet={`<nav aria-label="Within page">
				...
				</nav>
				`}
					languageType={"html"}
				/>
			</TemplateSection>
			<TemplateSection sectionName="WCAGCriteria" title="WCAG Criteria">
				<ul className="list">
					<li>
						<a href="#" className="blockLink">
							###
						</a>
					</li>
				</ul>
			</TemplateSection>
			<TemplateSection sectionName="otherResources" title="Other Resources">
				<ul className="list">
					<li>
						<a href="#" className="blockLink">
							###
						</a>
					</li>
				</ul>
			</TemplateSection>
			<PageUpdated date="26th June 2023" />
		</>
	)
}
