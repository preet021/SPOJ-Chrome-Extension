document.addEventListener('DOMContentLoaded', function () {
	chrome.tabs.query(
		{currentWindow: true, active: true},
		function (tabs) {
			chrome.tabs.sendMessage(tabs[0].id, Object.keys(tabs[0]))
		}
	)
}, false);