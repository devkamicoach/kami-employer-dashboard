import DashboardLayout from 'components/Dashboard/DashboardLayout';
import Heading from 'components/Dashboard/Heading';
import Messages from 'components/Dashboard/Messages';

import { Box, Button, TextField, Typography } from '@mui/material';
import TopTopics from 'components/TopTopics/TopTopics';
import QuickReport from 'components/Dashboard/QuickReport';
import PopularProgrammes from 'components/Dashboard/PopularProgrammes';
import PopupSidebar from 'components/Sidebar/PopupSidebar';
import CheckboxCard from 'components/Cards/CheckboxCard';

const Dashboard = () => {
  const { messages, topics, reports, insights, checkList } = getData();
  return (
    <Box className="flex">
      <DashboardLayout
        heading={<Heading company="Optimum Health, LTD" user="Erika" />}
        messages={<Messages messages={messages} />}
        topics={<TopTopics topics={topics} />}
        report={<QuickReport reports={reports} />}
        programmes={<PopularProgrammes insights={insights} />}
      />
      <PopupSidebar
        heading="Onboarding Checklist"
        content={
          <Box className="flex flex-col gap-4">
            <Typography component="p" className="text-sm">
              2 out of 4 items completed
            </Typography>
            {checkList.map(({ title, description, checked, actions }, index) => (
              <CheckboxCard key={index} title={title} description={description} checked={checked} actions={actions} />
            ))}
          </Box>
        }
      />
    </Box>
  );
};

export default Dashboard;

function getData() {
  const ICON_PATH = '/images/topic-logos';

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

  const topics = [
    {
      icon: `${ICON_PATH}/mental-wellness.svg`,
      title: 'Mental Wellness',
      impressions: '3,230',
    },
    {
      icon: `${ICON_PATH}/sleep.svg`,
      title: 'Sleep',
      impressions: '2,710',
    },
    {
      icon: `${ICON_PATH}/well-being.svg`,
      title: 'Well-being',
      impressions: '1,100',
    },
  ];

  const reports = [
    {
      title: 'User Sessions',
      value: '4.5k',
      percentage: '33.45%',
    },
    {
      title: 'Avg. Sessions',
      value: '04:23',
      percentage: '3.15%',
    },
    {
      title: 'User Sessions',
      value: '4.5k',
      percentage: '33.45%',
    },
    {
      title: 'Avg. Sessions',
      value: '04:23',
      percentage: '3.15%',
    },
  ];

  const insights = [
    {
      title: 'Managing your Mental Health as a Parent',
      topics: ['Parenting', 'Mental Wellbeing'],
      rate: 50,
    },
    {
      title: 'Maintaining Your Relationships',
      topics: ['Family', 'Work-Life', 'Relationships'],
      rate: 67,
    },
  ];

  const checkList = [
    {
      title: 'Log in to Kami',
      description:
        "You've logged in, so you've automatically crossed out this item on your checklist. Welcome to Kami, we're happy to have you.",
      checked: true,
    },
    {
      title: 'Join our wellbeing webinar',
      description: 'Part of our partnership are wellbeing webinars that focus on the core modules of your organiation.',
      checked: true,
    },
    {
      title: 'Provide login credentials to your users',
      description:
        'You have 50 seats allocated for users in your organization. You can manage these seats and created accounts on your Users Management page.',
      actions: (
        <Button variant="contained" className="bg-kami-green rounded-full w-full">
          Go to Users Management Page
        </Button>
      ),
    },
    {
      title: 'Sign up for our Kami Newsletter',
      description: 'Be the first to hear about new content, module, partnerships, or product updates from Kami.',
      actions: (
        <Box className="flex w-full gap-2">
          <TextField id="outlined-basic" label="Input your email here!" className="basis-3/4" variant="outlined" />
          <Button variant="contained" className="bg-kami-green basis-1/4">
            Send
          </Button>
        </Box>
      ),
    },
  ];
  return { messages, topics, reports, insights, checkList };
}
