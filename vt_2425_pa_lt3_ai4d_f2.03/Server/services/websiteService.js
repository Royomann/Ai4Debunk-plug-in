const websiteData = require('../models/websiteDataModel'); // Adjust path as needed

const getWebsiteData = async (url) => {
    try {
        const data = await websiteData.findOne({ where: { url: url.url } }); //find the data of one page depending on URL
        if (data) {
            return { message: "entry has been found", entry: data }
        }
        else {
            return { message: "No entry with this URL has been found", status: 503 }
        }
    }
    catch (error) {
        console.log(error);
        return new Error('Database operation failed');
    }
};

const saveWebsiteData = async (url, text) => {
    try {
        // Check if the URL already exists in the database
        const entry = await websiteData.findOne({ where: { url } });

        if (entry) { // true / false
            // If the URL exists, check if the text is different
            if (entry.text !== text) {
                // If the text is different, update it and the `updatedAt` timestamp
                entry.text = text;
                await entry.save(); // This automatically updates `updatedAt`
                console.log('Entry updated');
                return { message: 'Entry updated', entry: entry };
            } else {
                // If the text is the same, return a message saying the entry already exists
                console.log('Entry already exists with the same url and text');
                return { message: 'Entry already exists with the same data', entry: entry };
            }
        } else {
            // If the URL doesn't exist, create a new entry
            const newEntry = await websiteData.create({ url, text });
            console.log('New entry created');
            return { message: 'New entry created', entry: newEntry };
        }
    } catch (error) {
        throw new Error('Database operation failed');
    }
};

module.exports = {
    getWebsiteData,
    saveWebsiteData,
};