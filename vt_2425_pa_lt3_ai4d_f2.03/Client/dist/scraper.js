"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function scrapeTexts() {
    return __awaiter(this, void 0, void 0, function* () {
        // Filter that filters text
        const HTMLSelector = "h1, h2, h3, p:not(ul p):not(li p):not(a)";
        const elements = document.querySelectorAll(HTMLSelector);
        const saveWebsiteData = "http://localhost:3037/saveWebsiteData";
        const excludedElements = ["header", "footer", "sidebar", "advertisement", "recommended"];
        const filteredTexts = Array.from(elements)
            .filter((el) => {
            const isExcluded = excludedElements.some((selector) => el.closest(selector));
            const hasExcluded = el.closest(".TwoColumns__SideContent");
            return !isExcluded && !hasExcluded;
        })
            .map((el) => {
            if (el instanceof HTMLElement) {
                return el.innerText.trim();
            }
            return "";
        })
            .join("\n\n");
        const imageSelector = document.querySelectorAll("img:not(ul img):not(li img)");
        const imageUrls = Array.from(imageSelector)
            .filter((el) => el.tagName === "IMG")
            .map((img) => img.src);
        for (const url of imageUrls) {
            try {
                yield downloadImage(url);
            }
            catch (error) {
                console.error(`Error while downloading image from ${url}: `, error);
            }
        }
        const dataToSend = {
            url: window.location.href,
            text: filteredTexts,
            images: imageUrls
        };
        console.log("Sending data to server:", dataToSend);
        localStorage.setItem("data", filteredTexts);
        localStorage.setItem("url", window.location.href);
        fetch(saveWebsiteData, {
            method: "POST", // Specify the HTTP method
            headers: {
                "Content-Type": "application/json" // Tell the server we're sending JSON data
            },
            body: JSON.stringify(dataToSend) // Send data as JSON string
        })
            .then((response) => {
            if (response.status === 409) {
                const error = new Error("Entry already exists");
                error.code = response.status;
                throw error;
            }
            if (!response.ok) {
                const error = new Error("Network response was not ok");
                error.code = response.status;
                throw error;
            }
            return response.json(); // Parse the JSON response from the server
        })
            .then((data) => {
            console.log("Response from POST:", data); // Log the server's response
        })
            .catch((error) => {
            console.error("Error posting data:", error);
        });
        // Sends data to background script
        chrome.runtime.sendMessage({
            action: "sendData",
            text: filteredTexts,
            URL: window.location.href,
            images: imageUrls
        });
    });
}
scrapeTexts();
