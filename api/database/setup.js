const fs = require('fs');
const db = require('./connect');  // Adjust this path if necessary

const sql = fs.readFileSync(__dirname + '/setup.sql').toString();

db.query(sql)
  .then(() => {
    db.end();
    console.log('Setup complete');
  })
  .catch(error => console.error('Error executing SQL:', error));

