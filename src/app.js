//------------------------------IMPORT---------------------------------
// Import dependencies
const express= require('express');
const createHttpError = require('http-errors');

const modulesRoute = require('./routes/moduleRoutes');

//----------------------------SET UP APP--------------------------------
// Create server
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Bring in main routes
app.use('/modules', modulesRoute);

app.use(function (req, res, next) {
    return next(createHttpError(404, `Unknown Resource ${req.method} ${req.originalUrl}`));
});

// eslint-disable-next-line no-unused-vars
app.use(function (err, req, res, next) {
    return res.status(err.status || 500).json({ error: err.message || 'Unknown Server Error!' });
});

// Export server
module.exports = app;