// JQuery Portion of the Project

/* Selection by Tag & Manipulation
* Selector using tags and using .wrapAll() to Manipulate the page to implement accordion */
$('article section').wrapAll('<div id="accordion"></div>')

/* Selection by Id & by Tag & Manipulation
* Selecting using #id and section tag to get the children of each section within the accordion
*  Then each group of children is Manipulated using .wrapAll() to make the accordion function correctly */
$('#accordion > section').each(function (index){
	$(this).children(':not(:first-child)').wrapAll('<div class="section-content"></div>')
})

/* Selection by Class & Manipulation
* Select using the .section-content class
* Then apply .css to the previous sibling to make the accordion headers show as clickable */
$('.section-content').prev().css("cursor", "pointer")

/* JQuery UI call
* Apply the .accordion Widget with options */
$('#accordion').accordion({
	//Change the header directive to use headers within the section
	header: '> section > h2',
	
	//Allow all sections to be collapsed at once
	collapsible: true,
	
	//Set the height to depend on the content of each section
	heightStyle: "content",
	
	//Set the accordion default to collapsed
	active: false
})

/* acoordionactivate Event call
* Bind an event listener to whenever the accordion is activated (whenever a section is opened) */
$("#accordion").on("accordionactivate", function( event, ui ) {
	//check to make sure the accordion is opening (when closing, length = 0)
	if(ui.newHeader.length){
		//Animate a scroll to the section header that was just opened over .5 seconds
		$('html, body').animate({
				scrollTop: ui.newHeader.offset().top - 100
		}, 500);
	}
})