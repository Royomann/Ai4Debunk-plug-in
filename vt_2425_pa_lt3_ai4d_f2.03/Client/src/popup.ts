document.addEventListener("DOMContentLoaded", function () {
	const button = document.getElementById("scrapeButton");

	if (localStorage.getItem("theme") === "light") {
		document.body.classList.add("light-mode");
		document.body.classList.remove("dark-mode");
	} else {
		document.body.classList.add("dark-mode");
		document.body.classList.remove("light-mode");
	}
	const savedFontSize = localStorage.getItem("fontSize");
	if (savedFontSize) {
		document.body.style.fontSize = `${savedFontSize}px`;
	} else {
		document.body.style.fontSize = "16";
	}
	if (button) {
		button.addEventListener("click", () => {
			// Injecteer het content script in de actieve tab
			chrome.tabs.query({active: true, currentWindow: true}).then((tabs) => {
				const activeTab = tabs[0];
				chrome.scripting.executeScript({
					target: {tabId: activeTab.id ?? 0},
					files: ["./client/dist/scraper.js", "./client/dist/downloadImage.js"] // Het content script dat de tekst scraped
				});
				button.style.pointerEvents = "none";
				button.style.opacity = "0.5";
				button.textContent = "Page has been scraped";
			});
		});
	}
});

const seeSettingsButton = document.getElementById("settingsButton");
if (seeSettingsButton) {
	console.log("Settings button found");
	seeSettingsButton.addEventListener("click", () => {
		window.location.href = "/Client/html/personalisation.html";
	});
}
