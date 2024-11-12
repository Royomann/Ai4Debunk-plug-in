const express = require('express'); // Import express framework
const cors = require('cors'); // Import CORS
const sequelize = require('./database.js'); // Import and use Sequelize (ORM)
const websiteRoutes = require('./routes/websiteRoutes'); // Ensure the path is correct

const app = express(); // Initialize Express application
const port = process.env.PORT || 3037; // Server port thats being used

// Middleware to parse JSON bodies
app.use(express.json({ limit: '10mb' })); // JSON format and size
app.use(cors());

// Use website routes
app.use(websiteRoutes);

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
    });
}).catch(err => {
    console.error('Unable to sync database:', err);
});