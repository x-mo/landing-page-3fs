/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navBarList = document.getElementById('navbar__list');
const sections = document.getElementsByTagName('section');
const sectionsData = extractSectionsData();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function extractSectionsData() {
    const sectionData = [];
    for (const section of sections) {
        sectionData.push({
            id: section.id,
            label: section.dataset.nav
        });
    }
    return sectionData;
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function createNavList() {
    const documentFragment = document.createDocumentFragment();
    sectionsData.forEach(function (sectionData) {
        documentFragment.appendChild(createNavListItem(sectionData));
    })
    return documentFragment;
}

function createNavListItem(sectionData) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.setAttribute("href", `#${sectionData.id}`);
    a.textContent = sectionData.label;
    a.classList.add("menu__link");
    li.appendChild(a);
    return li;
}

// Add class 'active' to section when near top of viewport
function makeActive() {
    for (const section of sections) {
        const box = section.getBoundingClientRect();

        if (box.top <= 150 && box.bottom >= 150) {
            //apply active state on current section and corresponding Nav link
            section.classList.add("active__section");
            navBarList.childNodes.forEach(function (navItem) {
                if (navItem.textContent === section.dataset.nav)
                    navItem.classList.add("active__item")
            });
        } else {
            //Remove active state from other section and corresponding Nav link
            section.classList.remove("active__section");
            navBarList.childNodes.forEach(function (navItem) {
                if (navItem.textContent === section.dataset.nav)
                    navItem.classList.remove("active__item")
            });
        }
    }
}

// Scroll to anchor ID using scrollTO event
function smoothScrollToSection(destination) {
    document.querySelector(destination).scrollIntoView({
        behavior: 'smooth'
    });
}

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 
navBarList.appendChild(createNavList());

// Scroll to section on link click
navBarList.addEventListener('click', function (event) {
    event.preventDefault();
    smoothScrollToSection(event.target.getAttribute("href"));
});
// Set sections as active
document.addEventListener("scroll", makeActive);