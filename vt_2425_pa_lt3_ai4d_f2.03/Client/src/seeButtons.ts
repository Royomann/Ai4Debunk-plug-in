function toggleButtons(show : boolean) {
    const hiddenText = document.getElementById("hiddenText") as HTMLElement;
    const yesButton = document.getElementById("yesButton") as HTMLButtonElement;
    const noButton = document.getElementById("noButton") as HTMLButtonElement;

    if (show) {
        yesButton.style.display = "block";
        noButton.style.display = "block";
        hiddenText.style.display = "block";
    }else{
        yesButton.style.display = "none";
        noButton.style.display = "none";
        hiddenText.style.display = "none";
    }
     
}

function openTab(){
    window.open("/Client/html/scrapedTextTab.html", "blank");
}

const scrapeButton = document.getElementById("scrapeButton") as HTMLButtonElement;
    scrapeButton.addEventListener("click", () => {
     toggleButtons(true);
});

const menuButtons = document.getElementById("yesButton") as HTMLButtonElement;
	menuButtons.addEventListener("click", () => {
        openTab();
});

const noButtons = document.getElementById("noButton") as HTMLButtonElement;
    noButtons.addEventListener("click", () => {
     toggleButtons(false);
});