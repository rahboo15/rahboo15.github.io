// JavaScript Document
// Script to inject the Header and Footer on each page and update the title

// Function to create header String
function createHeader () {
	headerStr = '<header>' +
            '<div class="container">' +
                '<img id="mainpic" src="img/foodpiccropped_thin.jpg">' +
            '</div>' +
        	'<div class="sitebanner">' +
            	'<div class="flag">' +
                	'<h1>What\'s This Dish?</h1>' +
                '</div>' +
                '<div class="flagtip"></div>' +
                '<nav class="sitemenu">' +
                    '<ul>' +
                        '<li><a id="foodbloglink" href="foodblog.html">FOOD<span class="mobile_hidden"> DISHES</span></a></li>' +
                        '<li><a id="techbloglink" href="index.html">TECH<span class="mobile_hidden"> DISHES</span></a></li>' +
                        '<li><a id="aboutbloglink" href="about.html">ABOUT</a></li>' +
                    '</ul>' +
                '</nav>' +
            '</div>' +
        '</header>';
	return headerStr;
}

// Function to create footer String
function createFooter () {
	footerStr = '<footer>' +
       		'<h2>What\'s This Dish?</h2>' +
            '<p><a href="foodblog.html">Food Dishes</a> | <a href="index.html">Tech Dishes</a> | <a href="about.html">About</a></p>' +
        '</footer>';
	return footerStr;
}

// Function to add HTML Strings to the body of a document
function addStrToBody (str) {
	htmlBody = document.getElementById('body');
	htmlBody.innerHTML += str;	
}

// Function to set active elements of the page including the change to the title
function getActivePage () {
	pathArr = document.URL.split("/");
	fileName = pathArr[pathArr.length - 1].split(".")[0];
	return fileName;
}

function setActiveComponents (pageName){
	if (pageName === "index"){
		document.getElementById("techbloglink").className = "current";
		document.title = "Tech Dishes";
	}else if (pageName === "foodblog"){
		document.getElementById("foodbloglink").className = "current";
		document.title = "Food Dishes";
	}else {
		document.getElementById("aboutbloglink").className = "current";
		document.title = "About";
	}
}

// Function to inject the header and footer 
function injectHeaderFooter () {
	headerStr = createHeader();
	addStrToBody(headerStr);
	footerStr = createFooter();
	addStrToBody(footerStr);
	pageName = getActivePage();
	setActiveComponents(pageName);
}

injectHeaderFooter();

