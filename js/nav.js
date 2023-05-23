// Create a new navigation bar element
var navBar = document.createElement("nav");
navBar.classList.add("navbar", "navbar-expand-lg", "sticky-top", "bg-body-tertiary");

// Create a container for the navigation links
var container = document.createElement("div");
container.classList.add("container-fluid");
navBar.appendChild(container);

// Create the navigation header
var navHeader = document.createElement("a");
navHeader.classList.add("navbar-brand");
navHeader.setAttribute("href", "index.html");
container.appendChild(navHeader);

// Add a svg logo to the navHeader
var navlogo = document.createElement("img");
navlogo.setAttribute("src", "images/navimg.svg");
navlogo.setAttribute("alt", "Logo");
navlogo.setAttribute("width", "30");
navlogo.setAttribute("height", "24");
navHeader.appendChild(navlogo)

// Create the button for mobile navigation
var button = document.createElement("button");
button.classList.add("navbar-toggler");
button.setAttribute("type", "button");
button.setAttribute("data-bs-toggle", "collapse");
button.setAttribute("data-bs-target", "#navbarSupportedContent");
button.setAttribute("aria-controls", "navbarSupportedContent");
button.setAttribute("aria-expanded", "false");
button.setAttribute("aria-label", "Toggle navigation");
button.innerHTML = '<span class="navbar-toggler-icon"></span>';
container.appendChild(button);

// Create a list of navigation links
var navList = document.createElement("div");
navList.classList.add("collapse", "navbar-collapse");
navList.setAttribute("id", "navbarSupportedContent");
container.appendChild(navList);

// Create an un-ordered list
var navUl = document.createElement("ul");
navUl.classList.add("navbar-nav", "me-auto", "mb-2", "mb-lg-0");
navList.appendChild(navUl);

// First navigation item (About)
var navItem1 = document.createElement("li");
navItem1.classList.add("nav-item");
navUl.appendChild(navItem1);

var link_about = document.createElement("a");
link_about.classList.add("nav-link", "active");
link_about.setAttribute("aria-current", "page");
link_about.setAttribute("href", "about.html");
link_about.innerHTML = 'About';
navItem1.appendChild(link_about);

// Second navigation item (DIGS: a dropdown menu)
var navItem2 = document.createElement("li");
navItem2.classList.add("nav-item", "dropdown");
navUl.appendChild(navItem2);

var link_projects = document.createElement("a");
link_projects.classList.add("nav-link", "dropdown-toggle");
link_projects.setAttribute("href", "#");
link_projects.setAttribute("role", "button");
link_projects.setAttribute("data-bs-toggle", "dropdown");
link_projects.setAttribute("aria-expanded", "false");
link_projects.innerHTML = 'Projects';
navItem2.appendChild(link_projects);

var projectsMenu = document.createElement("ul");
projectsMenu.classList.add("dropdown-menu");
navItem2.appendChild(projectsMenu);

// Create three objects with names and links for the dropdown menu
var archaeology = {
    name: "Archaeology",
    link: "archaeology.html"
};

var paleography = {
    name: "Paleography",
    link: "paleography.html"
};

var textualStudies = {
    name: "Textual Studies",
    link: "text.html"
};

const myProjects = [archaeology, paleography, textualStudies];


for (project in myProjects){
    var newLi = document.createElement("li");
    projectsMenu.appendChild(newLi);
    var newA = document.createElement("a");
    newA.classList.add("dropdown-item");
    newA.setAttribute("href", myProjects[project].link);
    newA.innerHTML = myProjects[project].name;
    newLi.appendChild(newA);
};

// Third navigation item (DIGS: a dropdown menu)
var navItem3 = document.createElement("li");
navItem3.classList.add("nav-item", "dropdown");
navUl.appendChild(navItem3);

var link_DIGS = document.createElement("a");
link_DIGS.classList.add("nav-link", "dropdown-toggle");
link_DIGS.setAttribute("href", "#");
link_DIGS.setAttribute("role", "button");
link_DIGS.setAttribute("data-bs-toggle", "dropdown");
link_DIGS.setAttribute("aria-expanded", "false");
link_DIGS.innerHTML = 'DIGS2023';
navItem3.appendChild(link_DIGS);

var DIGSMenu = document.createElement("ul");
DIGSMenu.classList.add("dropdown-menu");
navItem3.appendChild(DIGSMenu);

var digitalChalkboard = {
    name: "Week 5 Digital Chalkboard (Array)",
    link: "DigitalChalkboard_Week5.html",
};

var technicalPresentation = {
    name: "Week 6 Technical Presentation (Chart.js)",
    link: "TechnicalPresentation_Week6.html",
};

var JsSandbox = {
    name: "JavaScript Sandbox",
    link: "JsSandbox.html"
};

var JQuerySandbox = {
    name: "JQuery Sandbox",
    link: "JQindex.html"
};

const myDIGS = [
    digitalChalkboard, 
    technicalPresentation,
    JsSandbox,
    JQuerySandbox
];

for (i in myDIGS){
    var newLi = document.createElement("li");
    DIGSMenu.appendChild(newLi);
    var newA = document.createElement("a");
    newA.classList.add("dropdown-item");
    newA.setAttribute("href", myDIGS[i].link);
    newA.innerHTML = myDIGS[i].name;
    newLi.appendChild(newA);
};

// Fourth navigation item (Poems)
var navItem4 = document.createElement("li");
navItem4.classList.add("nav-item");
navUl.appendChild(navItem4);

var link_poems = document.createElement("a");
link_poems.classList.add("nav-link");
link_poems.setAttribute("href", "poems.html");
link_poems.innerHTML = 'Poems';
navItem4.appendChild(link_poems);

// Fifth navigation item: A search link (WikiApi)
var navItem5 = document.createElement("div");
navItem5.classList.add("ml-auto");
navList.appendChild(navItem5);

var searchLink = document.createElement("a");
searchLink.setAttribute("href", "wikiAPI.html");
navItem5.appendChild(searchLink);

var searchButton = document.createElement("button");
searchButton.classList.add("btn", "btn-dark");
searchButton.setAttribute("type", "button");
searchButton.innerHTML = 'SearchWiki';
searchLink.appendChild(searchButton);

// Append the nav to the #nav-placeholder div 
document.getElementById("nav-placeholder").appendChild(navBar)