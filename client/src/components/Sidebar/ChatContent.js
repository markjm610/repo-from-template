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
    color: "#9CADC8",
    letterSpacing: -0.17,
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
  const classes = useStyles();

  const { conversation } = props;
  const { latestMessageText, otherUser, numberOfUnreadMessages } = conversation;

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
      <Box className={classes.unreadMessagesContainer}>
        <Chip size="small" label={numberOfUnreadMessages} className={classes.unreadMessages}/>
      </Box>
    </Box>
  );
};

export default ChatContent;
