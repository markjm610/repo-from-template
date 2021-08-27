const Conversation = require("./conversation");
const User = require("./user");
const Message = require("./message");

// associations

// Conversation and users many to many
// Messages have to be read by specific users

Conversation.belongsToMany(User, { through: 'UserConversation' });
Message.belongsTo(Conversation);
Conversation.hasMany(Message);

module.exports = {
  User,
  Conversation,
  Message
};
