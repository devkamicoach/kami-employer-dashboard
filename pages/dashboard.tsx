import DashboardLayout from 'components/PageComponents/Dashboard/DashboardLayout';
import Heading from 'components/PageComponents/Dashboard/Heading';
import Messages from 'components/PageComponents/Dashboard/Messages';

import { Box, Button, TextField, Typography } from '@mui/material';
import PulseCheck from 'components/PulseCheck/PulseCheck';
import TopTopics from 'components/TopTopics/TopTopics';
import QuickReport from 'components/PageComponents/Dashboard/QuickReport';
import PopularProgrammes from 'components/PageComponents/Dashboard/PopularProgrammes';
import PopupSidebar from 'components/Sidebar/PopupSidebar';
import KamiCard from 'components/Cards/KamiCard';
import { useSidebar, SidebarProvider } from 'context/SidebarContext';
import { FunctionComponent } from 'react';

import type {
  ProgrammeInsightCardTypes,
  QuickInsightCardTypes,
  PulseTypes,
  TopicTypes,
  KamiCardTypes,
} from 'types/dashboard';

type DashboardContentTypes = {
  messages: Array<any>;
  pulses: Array<PulseTypes>;
  topics: Array<TopicTypes>;
  reports: Array<QuickInsightCardTypes>;
  insights: Array<ProgrammeInsightCardTypes>;
  checkList: Array<KamiCardTypes>;
};

const DashboardContent: FunctionComponent<DashboardContentTypes> = ({
  messages,
  pulses,
  topics,
  reports,
  insights,
  checkList,
}) => {
  const content = useSidebar() as any;
  return (
    <Box className="flex ml-20">
      <DashboardLayout
        heading={<Heading user="Joyce" />}
        messages={<Messages messages={messages} />}
        pulses={<PulseCheck pulses={pulses} />}
        topics={<TopTopics topics={topics} />}
        report={<QuickReport reports={reports} />}
        programmes={<PopularProgrammes insights={insights} />}
      />
      <PopupSidebar
        heading="Announcements"
        content={
          <Box className="flex flex-col gap-4">
            <Typography component="h2" className="text-2xl">
              Onboarding Checklist
            </Typography>
            <Typography component="p" className="text-sm">
              2 out of 4 items completed
            </Typography>
            {checkList.map(({ title, description, checked, actions }, index) => (
              <KamiCard
                key={index}
                title={title}
                description={description}
                checked={checked}
                actions={actions}
                isCheckbox={true}
              />
            ))}
          </Box>
        }
        open={content?.open}
      />
    </Box>
  );
};

const Dashboard = () => {
  const { messages, pulseChecks, topics, reports, insights, checkList } = getData();

  return (
    <SidebarProvider open={true}>
      <DashboardContent
        messages={messages}
        pulses={pulseChecks}
        topics={topics}
        reports={reports}
        insights={insights}
        checkList={checkList}
      />
    </SidebarProvider>
  );
};

export default Dashboard;

function getData() {
  const ICON_PATH = '/images';

  const messages = [
    {
      icon: '/images/check-in-icon.svg',
      heading: 'Send a public announcement',
      message:
        'Send a company wide announcement or quick pulse check with a custom message to all your employees on Kinhub',
      actionButton: (
        <Button variant="contained" className="normal-case bg-kami-gray w-full hover:bg-gray-500">
          Send an announcement
        </Button>
      ),
    },
    {
      icon: '/images/announcement-icon.svg',
      heading: 'Send a private check-in',
      message: 'Send a private announcement or check-in to individual or specific employees on Kinhub',
      actionButton: (
        <Button variant="contained" className="normal-case bg-kami-gray w-full hover:bg-gray-500">
          Send a private check-in
        </Button>
      ),
    },
  ];

  const pulseChecks = [
    {
      icon: `${ICON_PATH}/pulse-logos/happy.svg`,
      title: '84 responses',
      responses: '32',
      from: 'Commercials Team',
    },
    {
      icon: `${ICON_PATH}/pulse-logos/sad.svg`,
      title: '51 responses',
      responses: '19',
      from: 'Engineering Team',
    },
    {
      icon: `${ICON_PATH}/pulse-logos/vhappy.svg`,
      title: '11 responses',
      responses: '4',
      from: 'Design Team',
    },
  ];

  const topics = [
    {
      icon: `${ICON_PATH}/topic-logos/mental-wellness.svg`,
      title: 'Mental Wellness',
      impressions: '3,230',
    },
    {
      icon: `${ICON_PATH}/topic-logos/sleep.svg`,
      title: 'Sleep',
      impressions: '2,710',
    },
    {
      icon: `${ICON_PATH}/topic-logos/well-being.svg`,
      title: 'Well-being',
      impressions: '1,100',
    },
  ];

  const reports = [
    {
      title: 'User Sessions',
      value: '6.2k',
      percentage: '+ 62.12% from last week',
    },
    {
      title: 'Article Views',
      value: '4.5k',
      percentage: '- 1.89% from last week',
    },
    {
      title: 'Content Rating',
      value: '4.7/5',
      percentage: '+ 23.68% from last week',
    },
    {
      title: 'New Users',
      value: '+52',
      percentage: '+ 3.15% from last week',
    },
  ];

  const insights = [
    {
      title: 'Managing your Mental Health as a Parent',
      topics: ['Parenting', 'Mental Wellbeing'],
      rate: 50,
    },
    {
      title: 'Maintaining Healthy Relationships',
      topics: ['Family', 'Relationships'],
      rate: 67,
    },
  ];
  const checkList = [
    {
      title: 'Log in to Kinhub',
      description:
        "You've logged in, so you've automatically crossed out this item on your checklist. Welcome to Kinhub, we're happy to have you.",
      checked: true,
    },
    {
      title: 'Join our wellbeing webinar',
      description: 'Part of our partnership are wellbeing webinars that focus on the core modules of your organiation.',
      checked: true,
    },
    {
      title: 'Onboard users to your 600 seats!',
      description:
        'You have 600 seats allocated for users in your organization. You can manage these seats and created accounts on your Users Management page.',
      actions: (
        <Button variant="contained" className="bg-kami-green rounded-full w-full">
          Go to Users Management Page
        </Button>
      ),
    },
    {
      title: 'Sign up for the Kinhub Newsletter',
      description: 'Be the first to hear about new content, module, partnerships, or product updates from Newsletters.',
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
  return { messages, pulseChecks, topics, reports, insights, checkList };
}
