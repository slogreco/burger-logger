const orm = require("../config/orm.js");

const burger = {
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    create: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (cols, vals, id, cb) {
        orm.updateOne("burgers", cols, vals, id, function (res) {
            cb(res);
        });
    },
};

module.exports = burger