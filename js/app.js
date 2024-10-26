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
    for (let section of sections) {
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

function createNavList() {
    const documentFragment = document.createDocumentFragment();
    sectionsData.forEach(function (sectionData) {
        documentFragment.appendChild(createNavListItem(sectionData.label));
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


