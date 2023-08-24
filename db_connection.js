// Import the required modules
var prop = require('./db_properties');
var mysql = require('mysql2');


// Export a module with a single method
module.exports = {
    getConnection: () => {
        // Create a MySQL database connection using properties from db_properties
        return mysql.createConnection(prop);
        
    }
}
