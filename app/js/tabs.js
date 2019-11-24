const tabButtons = $('.button'),
	tabPanels = $('.tab-panel');

function showTabPanel(event) {
	const target = $(event.target),
		panelId = target.attr('aria-controls');

	toggleActivePanel(panelId);
}

function keepSelectedTabPanel() {
	const alreadySelectdTabPanel = getSelectedTab();

	if (alreadySelectdTabPanel === null) return;

	toggleActivePanel(alreadySelectdTabPanel);
}

function toggleActivePanel(element) {
	const activePanel = $('.active');

	activePanel.removeClass('active');
	$('#' + element).addClass('active');

	rememberSelectedTab(element)
}

function rememberSelectedTab(element) {
	localStorage.setItem('selectedTab', element);
}

function getSelectedTab() {
	return localStorage.getItem('selectedTab');
}

tabButtons.on('click', showTabPanel);
$(window).on('load', keepSelectedTabPanel);