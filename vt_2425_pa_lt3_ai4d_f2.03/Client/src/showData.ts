chrome.storage.local.get(["url", "text", "note"], function(result) {
    const url = result.url;
    const text = result.text;
    const note = result.note;
    const urlContainer = document.getElementById("url") as HTMLSpanElement;
    const textContainer = document.getElementById("text") as HTMLSpanElement;
    const noteContainer = document.getElementById("communityNote") as HTMLSpanElement;
    if (!url){
        urlContainer.innerText = "Geen pagina gevonden in de database";
    } else {
        urlContainer.innerText = url;
        textContainer.innerText = text;
        noteContainer.innerText = note;
    }
});