"use strict";
// Function to fetch data from the server and display it
function fetchAndDisplayScrapedData() {
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
    }
    else {
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
    }
    chrome.storage.local.get(["scrapedURL", "scrapedText"], function (message) {
        const scrapedURL = message.scrapedURL;
        const scrapedText = message.scrapedText;
        const urlContainer = document.getElementById("url");
        const textContainer = document.getElementById("scrapedText");
        if (scrapedText && scrapedURL) {
            urlContainer.innerText = scrapedURL;
            textContainer.innerText = scrapedText;
        }
        else {
            urlContainer.innerText = "Geen URL gevonden!";
            textContainer.innerText = "Geen tekst gevonden!";
        }
    });
}
// Call the function to fetch and display data on page load
document.addEventListener("DOMContentLoaded", fetchAndDisplayScrapedData);
