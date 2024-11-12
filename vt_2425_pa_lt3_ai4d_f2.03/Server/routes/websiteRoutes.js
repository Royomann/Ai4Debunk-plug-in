const express = require('express');
const { getWebsiteData, saveWebsiteData } = require('../services/websiteService');
const router = express.Router();

// GET route to fetch data
router.post('/getData', async (req, res) => {
    try {
        const data = await getWebsiteData(req.body);
        if (data) {
            console.log(data);
            res.status(200).json(data);
        } else {
            res.status(503).json({ message: 'No data found' });
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Database query failed' });
    }
});

// POST route to add data
router.post('/saveWebsiteData', async (req, res) => {

    const { url, text } = req.body;

    if (!url || !text) {
        return res.status(400).json({ error: 'Both url and text fields are required.' });
    }
    try {
        const result = await saveWebsiteData(url, text);
        res.status(200).json(result);
    } catch (error) {
        console.error('Error saving data:', error.message);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;