const pagePreferencesButton = $(".page-preferences .button"),
	pagePreferencesOptions = $(".page-preferences .options"),
	choices = $(".choice");

let background,
	fontsize;

pagePreferencesButton.on('click', toggleOptions);
choices.on('click', function() {
		checkPreferences.call(this);
		sendDataToBackend.call(this);
	});

function toggleOptions(event) {
	pagePreferencesOptions.toggleClass('active');
}

function checkPreferences() {
	background = $(this).attr('name') === 'background' ? $(this).val() : background,
	fontsize = $(this).attr('name') === 'fontsize' ? $(this).val() : fontsize;

	setPageAccordingToPreferences(background, fontsize);
}

function setPageAccordingToPreferences(background = 'white', fontsize = 'standard') {
	background === 'white' ? $('body').removeClass('dark') : $('body').addClass('dark');
	fontsize === 'standard' ? $('html').removeClass('big-letters') : $('html').addClass('big-letters');

	localStorage.setItem('background', background);
	localStorage.setItem('fontsize', fontsize);
}

function sendDataToBackend() {
	const formData = $('#page-preferences-form').serializeArray(),
		postData = formData.reduce((obj, input) => { 
			obj[input.name] = input.value; 
			return obj; 
		}, {});

	$.ajax({
	    url: 'http://localhost:3000/preferences',
	    type: "POST",
	    dataType: 'json',
	    data: JSON.stringify(postData),
	    contentType: 'multipart/form-data',
	    success: function( data, textStatus, jQxhr ){
	        $('#response').html(data);
	    },
	    error: function( jqXhr, textStatus, errorThrown ){
	        console.log(errorThrown);
	    }
	})
}

function init() {
	background = localStorage.getItem('background') ? localStorage.getItem('background') : undefined;
	fontsize = localStorage.getItem('fontsize') ? localStorage.getItem('fontsize') : undefined;

	if (background || fontsize) {
		setPageAccordingToPreferences(background, fontsize);
	}
}

init();