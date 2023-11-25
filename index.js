const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const options = require('./data'); // Import options from the data folder
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to SQLite database
const db = new sqlite3.Database(`./${process.env.DB_NAME}`);

// Create a table for user submissions
db.run(`CREATE TABLE IF NOT EXISTS user_submissions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  fullname TEXT,
  selectedOption TEXT,
  agreeToTerms INTEGER
)`);

// Create a table for select options
db.run(`CREATE TABLE IF NOT EXISTS select_options (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  optionName TEXT UNIQUE
)`);

// Function to validate user input
function validateInput(fullname, selectedOption, agreeToTerms) {
  if (!fullname || !selectedOption || !agreeToTerms) {
    return false;
  }
  // You can add more specific validation logic here if needed
  return true;
}

// Initialization function to pre-add select options to the database
function initializeOptions() {
  // Create the select_options table if it doesn't exist
  db.run(`CREATE TABLE IF NOT EXISTS select_options (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    optionName TEXT UNIQUE
  )`, (err) => {
    if (err) {
      console.error('Error creating select_options table:', err);
      return;
    }

    // Insert each option into the select_options table if not already present
    options.forEach((option) => {
      db.run('INSERT OR IGNORE INTO select_options (optionName) VALUES (?)', [option], (err) => {
        if (err) {
          console.error('Error inserting option:', err);
        }
      });
    });
  });
}

// Function to fetch all select options from the database
function fetchOptionsFromDatabase(callback) {
  db.all('SELECT optionName FROM select_options', (err, rows) => {
    if (err) {
      console.error('Error fetching options:', err);
      callback([]);
    } else {
      const options = rows.map(row => row.optionName);
      callback(options);
    }
  });
}

// Add route to fetch select options from the database
app.get('/fetch-options', (req, res) => {
  fetchOptionsFromDatabase((options) => {
    res.status(200).json(options);
  });
});

// Add route to insert select options into the database
app.post('/add-options', (req, res) => {
  const { options } = req.body;

  if (options && Array.isArray(options) && options.length > 0) {
    // Insert each option into the select_options table
    options.forEach((option) => {
      db.run('INSERT INTO select_options (optionName) VALUES (?)', [option], (err) => {
        if (err) {
          console.error('Error inserting option:', err);
        }
      });
    });

    res.status(200).json({ message: 'Options added successfully!' });
  } else {
    res.status(400).json({ message: 'Invalid options data.' });
  }
});

// Add route to submit user form data
app.post('/submit-form', (req, res) => {
  const { fullname, selectedOption, agreeToTerms } = req.body;

  // Validate user input
  if (validateInput(fullname, selectedOption, agreeToTerms)) {
    // Insert user submission into the user_submissions table
    db.run('INSERT INTO user_submissions (fullname, selectedOption, agreeToTerms) VALUES (?, ?, ?)',
      [fullname, selectedOption, agreeToTerms ? 1 : 0],
      (err) => {
        if (err) {
          res.status(500).json({ message: 'Internal server error' });
        } else {
          res.status(200).json({ message: 'Form submitted successfully!' });
        }
      }
    );
  } else {
    res.status(400).json({ message: 'Please fill in all required fields.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
