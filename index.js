//-----------------------------------IMPORT-----------------------------------
// Import .env variables
require('dotenv').config();

// Import App from src directory
const app = require('./src/app');

//---------------------------------ENTRY POINT--------------------------------
// Start server
app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
});


