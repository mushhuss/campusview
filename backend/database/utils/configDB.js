/*==================================================
/database/utils/configDB.js

It declares and exports the variables for database name, username, and password.
==================================================*/
// Declare the variables for database name, username, and password.
require('dotenv').config(); // Add this line at the top of your configDB.js

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPwd = process.env.DB_PASSWORD; // Note: If needed, change this password to match the password created for PostgreSQL database on the local machine.

// Export the variables 
module.exports = {
  dbName,
  dbUser,
  dbPwd
};
