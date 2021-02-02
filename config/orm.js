const connection = require("../config/connection.js");

const orm = {
    //function to select all data
    selectAll: function (tableName, cb) {
        const queryString = "SELECT * FROM ?? ;";
        connection.query(queryString, [tableName], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // fuction to insert data
    insertOne: function (table, cols, vals, cb) {
        console.log(cols);
        const queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, cols, vals], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // function to update data
    updateOne: function (table, cols, vals, id, cb) {
        const queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
        connection.query(queryString, [table, cols, vals, id], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm; 