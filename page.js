const cookieButton = $('.notification-button'),
	cookieNotification = $('.notification-container');
let cookiePresent;

function getAllCookies() {
	const cookies = document.cookie.split('; ');

	return cookies.reduce(getCookiesNamesAndValues, {});
}

function getCookiesNamesAndValues(acc, cur) {
	const cookieParts = cur.split('='),
		key = cookieParts[0],
		value = cookieParts[1];

	acc[key] = value;
	
	return acc;
}

function createCookie() {
	let now = new Date();
	now.setFullYear(now.getFullYear() + 1);
	document.cookie='needs_acceptance=acceptance_cookie;expires=' + now.toUTCString();

	hideCookieNotification();
}

function checkCookieExistence() {
	const presentCookies = getAllCookies();

	for (let cookieName in presentCookies) {
		if (cookieName === 'needs_acceptance') {
			cookiePresent = true;
		}
	}

	if (!cookiePresent) {
		showCookieNotification();
	}
}

function hideCookieNotification() {
	$('body').removeClass('with-cookie-notification');
}

function showCookieNotification() {
	$('body').addClass('with-cookie-notification');
}

function bindUIEvents() {
  	cookieButton.click(function() {
  		createCookie();
  	});
}

function init() {
	bindUIEvents();
	checkCookieExistence();
}

init();
