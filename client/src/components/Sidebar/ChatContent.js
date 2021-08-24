import React from "react";
import { Box, Typography, Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 20,
    flexGrow: 1,
  },
  username: {
    fontWeight: "bold",
    letterSpacing: -0.2,
  },
  previewText: {
    fontSize: 12,
    letterSpacing: -0.17,
    color: numberOfUnreadMessages => numberOfUnreadMessages === 0 && "#9CADC8",
    fontWeight: numberOfUnreadMessages => numberOfUnreadMessages !== 0 && "bold",
  },
  unreadMessages: {
    backgroundColor: '#3A8DFF',
    color: "#FFFFFF",
  },
  unreadMessagesContainer: {
    marginRight: 17,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const ChatContent = (props) => {
  const { conversation } = props;
  const { latestMessageText, otherUser, numberOfUnreadMessages } = conversation;
  const classes = useStyles(numberOfUnreadMessages);

  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        <Typography className={classes.previewText}>
          {latestMessageText}
        </Typography>
      </Box>
      {numberOfUnreadMessages !== 0 && (
        <Box className={classes.unreadMessagesContainer}>
          <Chip size="small" label={numberOfUnreadMessages} className={classes.unreadMessages} />
        </Box>
      )}
    </Box>
  );
};

export default ChatContent;
