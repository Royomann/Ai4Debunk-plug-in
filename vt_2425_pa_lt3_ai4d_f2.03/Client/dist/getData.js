"use strict";
const reliability = document.getElementById("reliability");
reliability.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        var _a;
        const activeTab = tabs[0];
        chrome.scripting.executeScript({
            target: { tabId: (_a = activeTab.id) !== null && _a !== void 0 ? _a : 0 },
            files: ['./client/dist/websiteData.js']
        });
        window.open("/Client/html/websiteData.html", "blank");
    });
});
