import { Button, Grid } from '@mui/material';
import MessageCard from 'components/Cards/MessageCard';

const Messages = () => {
  const messages = [
    {
      icon: '/images/kami-icon.webp',
      heading: 'Message from kami',
      message:
        "We're thrilled to announce that we are adding the following new modules to our core platform experience: Menopause, Financial Wellbeing, and Back to Work Coaching. You may access this directly in your Modules page. Read more... ",
    },
    {
      icon: '/images/check-in-icon.svg',
      heading: 'Check in with your employees',
      message: 'Send a quick pulse check with a custom message to all your employees with Kami ',
      actionButton: (
        <Button variant="contained" className="bg-kami-gray w-full hover:bg-gray-500">
          Send pulse check
        </Button>
      ),
    },
  ];
  return (
    <Grid container className="gap-2">
      {messages.map((message: any, index) => {
        return (
          <Grid key={index} md={5} item>
            <MessageCard
              heading={message.heading}
              icon={message.icon}
              message={message.message}
              actionButton={message?.actionButton}
            />{' '}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Messages;
