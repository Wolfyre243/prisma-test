const { query } = require('../services/db');
const fs = require('fs');
const path = require('path');

// Obtain the .sql file
const filePath = path.join(__dirname, 'init.sql');

// Read the file and extract the contents
const SQLSTATEMENT = fs.readFileSync(filePath, 'utf-8');

query(SQLSTATEMENT, (error, results, fields) => {
  if (error) {
    console.error("Error creating tables:", error);
  } else {
    console.log("Tables refreshed successfully");
  }
  process.exit();
});