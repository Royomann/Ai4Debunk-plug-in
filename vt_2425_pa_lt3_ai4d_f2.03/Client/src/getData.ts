const reliability = document.getElementById("reliability") as HTMLElement;
reliability.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const activeTab = tabs[0];
        chrome.scripting.executeScript({
            target: { tabId: activeTab.id ?? 0 },
            files: ['./client/dist/websiteData.js']
        });
        window.open("/Client/html/websiteData.html", "blank");
    });
});