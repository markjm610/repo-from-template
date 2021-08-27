const Conversation = require("./conversation");
const User = require("./user");
const Message = require("./message");

// associations

Conversation.belongsToMany(User, { through: 'UserConversation' });
Message.belongsTo(Conversation);
Conversation.hasMany(Message);

module.exports = {
  User,
  Conversation,
  Message
};
