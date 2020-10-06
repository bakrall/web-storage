const cookieButton = $('.notification-button');
const cookieNotification = $('.notification-container');

function checkCookie() {
	//this regex returns `null` in case cookie is not present
	const hasCookie = /policyResponse=(\w.*;?)/.exec(document.cookie);

	if(hasCookie) {
		switch(hasCookie[1]) {
			case 'true':
				hideCookieNotification();
				return;
			case 'false':
				showCookieNotification();
				return;
		}
	} else {
		showCookieNotification();
	}
}

function hideCookieNotification() {
	$('body').removeClass('without-cookie-confirmed');
}

function showCookieNotification() {
	$('body').addClass('without-cookie-confirmed');
}

function bindUIEvents() {
  	cookieButton.click(function() {
  		getConsent();
  	});
}

function init() {
	bindUIEvents();
	checkCookie();
}

init();
