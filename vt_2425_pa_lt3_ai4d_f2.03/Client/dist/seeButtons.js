"use strict";
function toggleButtons(show) {
    const hiddenText = document.getElementById("hiddenText");
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    if (show) {
        yesButton.style.display = "block";
        noButton.style.display = "block";
        hiddenText.style.display = "block";
    }
    else {
        yesButton.style.display = "none";
        noButton.style.display = "none";
        hiddenText.style.display = "none";
    }
}
function openTab() {
    window.open("/Client/html/scrapedTextTab.html", "blank");
}
const scrapeButton = document.getElementById("scrapeButton");
scrapeButton.addEventListener("click", () => {
    toggleButtons(true);
});
const menuButtons = document.getElementById("yesButton");
menuButtons.addEventListener("click", () => {
    openTab();
});
const noButtons = document.getElementById("noButton");
noButtons.addEventListener("click", () => {
    toggleButtons(false);
});
