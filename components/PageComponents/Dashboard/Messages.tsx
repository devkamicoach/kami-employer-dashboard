import { Grid } from '@mui/material';
import MessageCard from 'components/Cards/MessageCard';
import { FunctionComponent } from 'react';

type MessagesTypes = {
  messages: Array<any>;
};

const Messages: FunctionComponent<MessagesTypes> = ({ messages }) => {
  return (
    <Grid container className="gap-2 justify-between">
      {messages.map((message: any, index) => {
        return (
          <Grid key={index} md={5.8} item>
            <MessageCard
              heading={message.heading}
              icon={message.icon}
              message={message.message}
              actionButton={message?.actionButton}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Messages;
