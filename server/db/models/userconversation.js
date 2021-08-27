const Sequelize = require("sequelize");
const db = require("../db");

const UserConversation = db.define("userconversation", {
    lastReadTime: {
        type: Sequelize.DATE,
        allowNull: false,
    },
});

module.exports = UserConversation;