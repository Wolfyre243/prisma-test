//------------------------------IMPORT---------------------------------
// Import dependencies
const express= require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const helmet = require("helmet");

// Import routers
const mainRouter = require('./routes/mainRoutes');

const { cookieOptions } = require('./configs/authConfig');
const { sanitizeResponse } = require('./middlewares/sanitizers');

//----------------------------SET UP APP--------------------------------
// Create server
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Bring in main routes
app.use('/', mainRouter);

app.get('/', (req, res) => {
  res.send("Server is online!")
});

// Export server
module.exports = app;