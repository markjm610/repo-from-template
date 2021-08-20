export const addMessageToStore = (state, payload) => {
  const { message, sender } = payload;
  
  // if sender isn't null, that means the message needs to be put in a brand new convo
  if (sender !== null) {
    const newConvo = {
      id: message.conversationId,
      otherUser: sender,
      messages: [message],
    };
    newConvo.latestMessageText = message.text;
    return [newConvo, ...state];
  }
  
  return state.map((convo) => {
    if (convo.id === message.conversationId) {
      const newConvo = { ...convo };
      newConvo.messages = [...convo.messages];
      newConvo.messages.push(message);
      newConvo.latestMessageText = message.text;
      return newConvo;
    } else {
      return convo;
    }
  });
};

export const addOnlineUserToStore = (state, id) => {
  return state.map((convo) => {
    if (convo.otherUser.id === id) {
      const convoCopy = { ...convo };
      convoCopy.otherUser.online = true;
      return convoCopy;
    } else {
      return convo;
    }
  });
};

export const removeOfflineUserFromStore = (state, id) => {
  return state.map((convo) => {
    if (convo.otherUser.id === id) {
      const convoCopy = { ...convo };
      convoCopy.otherUser.online = false;
      return convoCopy;
    } else {
      return convo;
    }
  });
};

export const addSearchedUsersToStore = (state, users) => {
  const currentUsers = {};

  // make table of current users so we can lookup faster
  state.forEach((convo) => {
    currentUsers[convo.otherUser.id] = true;
  });

  const newState = [...state];
  users.forEach((user) => {
    // only create a fake convo if we don't already have a convo with this user
    if (!currentUsers[user.id]) {
      let fakeConvo = { otherUser: user, messages: [], numberOfUnreadMessages: 0 };
      newState.push(fakeConvo);
    }
  });

  return newState;
};

export const addNewConvoToStore = (state, recipientId, message) => {
  return state.map((convo) => {
    if (convo.otherUser.id === recipientId) {
      const newConvo = { ...convo };
      newConvo.id = message.conversationId;
      newConvo.messages = [...convo.messages];
      newConvo.messages.push(message);
      newConvo.latestMessageText = message.text;
      return newConvo;
    } else {
      return convo;
    }
  });
};

export const markAsReadInStore = (state, conversationId, userId) => {
  return state.map((convo) => {
    if (convo.id === conversationId) {
      const newConvo = { ...convo };
      newConvo.messages = [...convo.messages];
      newConvo.messages.forEach((message) => {
        if (message.senderId !== userId) {
          message.read = true;
        }
      })
      newConvo.numberOfUnreadMessages = 0;
      return newConvo
    } else {
      return convo;
    }
  });
};

export const receiveAsReadInStore = (state, conversationId, lastReadMessageId) => {
  console.log('receiveAsReadInStore')
  console.log('conversationId', conversationId)
  console.log('lastReadMessageId', lastReadMessageId)

  return state.map((convo) => {
    if (convo.id === conversationId) {
      const newConvo = { ...convo };
      newConvo.messages = [...convo.messages];
      console.log('convo.id === conversationId')
      for (const message of newConvo.messages) {
        if (!message.read) {
          console.log('!message.read')
          message.read = true;
        }
        if (message.id === lastReadMessageId) {
          console.log('message.id === lastReadMessageId')
          break;
        }
      }
      console.log('messages', newConvo.messages)
      return newConvo;
    } else {
      return convo;
    }
  });
};