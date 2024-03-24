chrome.extension.sendMessage({}, function(response) {
        let numChecksAfterReady = 0
        let hasLoadedBackgroundImage = false
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
                        numChecksAfterReady++
                        if (numChecksAfterReady > 100 || hasLoadedBackgroundImage) {
                          clearInterval(readyStateCheckInterval);
                        }

			// ----------------------------------------------------------
			// This part of the script triggers when page is done loading
			let trello_root_element = document.getElementById('trello-root');
                        if (!!trello_root_element.style.backgroundImage) {
                          hasLoadedBackgroundImage = true
                        }
			trello_root_element.style.backgroundImage = null;
			trello_root_element.style.backgroundColor = "rgb(137, 96, 158)";
			// ----------------------------------------------------------

		}
	}, 10);
});
