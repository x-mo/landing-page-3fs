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
const navItemNames = extractSectionNavNames();
const sectionIds = extractSectionIds();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function extractSectionNavNames() {
    const sectionNavNames = [];
    for (let section of sections) {
        sectionNavNames.push(section.dataset.nav);
    }
    return sectionNavNames;
}

function extractSectionIds() {
    const sectionIds = [];
    for (let section of sections) {
        sectionIds.push(section.id);
    }
    return sectionIds;
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

function createNavList() {
    const documentFragment = document.createDocumentFragment();
    navItemNames.forEach(function (name) {
        documentFragment.appendChild(createNavListItem(name));
    })
    return documentFragment;
}

function createNavListItem(itemName) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    //a.setAttribute("href", "#section");
    a.textContent = itemName;
    a.classList.add("menu__link");
    li.appendChild(a);
    return li;
}
// build the nav
navBarList.appendChild(createNavList());

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


