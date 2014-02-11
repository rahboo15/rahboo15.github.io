// JavaScript Document
// Script to provide a timeout on the page for a session

// length for session timeout
var timeoutLength = 10000;

// Function to redirect to another site
function redirect () {
	window.location.assign('https://www.google.com');
}

// Function to create elements needed for an alert
function createAlert () {
	background = document.createElement('div');
	background.id = 'session_alert';
	background.className = 'alert-background';
	popup = document.createElement('div');
	popup.className = 'alert-popup';
	message = document.createElement('p');
	message.innerText = 'Your session has expired.  Would you like to continue?';
	btnYes = document.createElement('button');
	btnYes.innerText = 'Yes';
	btnYes.type = 'button';
	btnYes.addEventListener('click', timeout);
	btnYes.tabIndex = 1;
	btnNo = document.createElement('button');
	btnNo.innerText = 'No';
	btnNo.type = 'button';
	btnNo.addEventListener('click', redirect);
	btnNo.tabIndex = 2;
	popup.appendChild(message);
	popup.appendChild(btnYes);
	popup.appendChild(btnNo);
	background.appendChild(popup);
	return background;
}

// Function to add elements to the body of a document
function addElementToBody (element) {
	htmlBody = document.getElementById('body');
	htmlBody.appendChild(background);	
}

// Function to initialize the timeout countdown 
function timeout () {
	sessionAlert = document.getElementById('session_alert');
	if (sessionAlert){
		sessionAlert.remove();
	}
	setTimeout (function () {
		alertElements = createAlert();
		addElementToBody(alertElements);
	}, timeoutLength);
}

timeout();
