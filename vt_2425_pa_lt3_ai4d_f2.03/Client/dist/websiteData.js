"use strict";
const getWebsiteData = "http://localhost:3037/getData";
function showData() {
    const dataToSend = { URL: window.location.href };
    fetch(getWebsiteData, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Tell the server we're sending JSON data
        },
        body: JSON.stringify(dataToSend)
    })
        .then(response => {
        if (response.status === 404) {
            const error = new Error('Entry was not found');
            ;
            error.code = response.status;
            throw error;
        }
        if (!response.ok) {
            const error = new Error('Network response was not ok');
            ;
            error.code = response.status;
            throw error;
        }
        return response.json(); // Parse the JSON response from the server
    })
        .then(data => {
        console.log('Response from GET:', data); // Log the server's response
        chrome.runtime.sendMessage({
            action: "getData",
            URL: data.entry.URL,
            text: data.entry.text,
            note: data.entry.community_note
        });
    })
        .catch((error) => {
        console.error('Error posting data:', error);
    });
}
showData();
