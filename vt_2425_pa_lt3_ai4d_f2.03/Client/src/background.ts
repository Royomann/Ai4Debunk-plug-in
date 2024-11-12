chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	if (message.action === "sendData") {
		console.log("Received Data");
		console.log("Scraped URL:\n" + message.URL);
		console.log("Scraped Text:\n" + message.text);
		if (message.images && message.images.length > 0) {
			console.log("Scraped Image:");
			message.images.forEach((imageURL: any, index: any) => {
				console.log("Image ${index}:  + ${imageURL}");
				// Down here it downloads the image
                // chrome.downloads.download({
                //         URL: imageURL})
			});
		}
		chrome.storage.local.set({scrapedText: message.text}, function () {
			console.log("The scraped text is safed in chrome.storage");
		});
		chrome.storage.local.set({scrapedURL: message.URL}, function () {
			console.log("The scraped URL is safed in chrome.storage");
		});
		sendResponse({status: "success"});
	}
	return true;
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	if (message.action === "getData") {
		chrome.storage.local.set({text: message.text}, function () {});
		chrome.storage.local.set({URL: message.URL}, function () {});
		chrome.storage.local.set({note: message.note}, function () {});
		sendResponse({status: "success"});
	}
	return true;
});
