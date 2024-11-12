"use strict";
chrome.storage.local.get(["url", "text", "note"], function (result) {
    const url = result.url;
    const text = result.text;
    const note = result.note;
    const urlContainer = document.getElementById("url");
    const textContainer = document.getElementById("text");
    const noteContainer = document.getElementById("communityNote");
    if (!url) {
        urlContainer.innerText = "Geen pagina gevonden in de database";
    }
    else {
        urlContainer.innerText = url;
        textContainer.innerText = text;
        noteContainer.innerText = note;
    }
});
