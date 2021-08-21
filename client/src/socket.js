import io from "socket.io-client";
import store from "./store";
import {
  setNewMessage,
  removeOfflineUser,
  addOnlineUser,
  receiveReadMessages,
} from "./store/conversations";

const socket = io(window.location.origin);

socket.on("connect", () => {
  console.log("connected to server");

  socket.on("add-online-user", (id) => {
    store.dispatch(addOnlineUser(id));
  });

  socket.on("remove-offline-user", (id) => {
    store.dispatch(removeOfflineUser(id));
  });

  socket.on("new-message", (data) => {
    const { activeConversation, conversations }  = store.getState();

    if (activeConversation === data.username) {
      socket.emit("read-messages", {
        conversationId: conversations.find(conversation => conversation.otherUser.username === activeConversation).id,
        lastReadMessageId: data.message.id,
      });
    }

    store.dispatch(setNewMessage(data.message, data.sender, activeConversation, data.username));
  });

  socket.on("read-messages", (data) => {
    store.dispatch(receiveReadMessages(data.conversationId, data.lastReadMessageId));
  });

});

export default socket;