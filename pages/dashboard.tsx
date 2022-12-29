import DashboardLayout from 'components/Dashboard/DashboardLayout';
import Heading from 'components/Dashboard/Heading';
import Messages from 'components/Dashboard/Messages';

import { Button } from '@mui/material';
import TopTopics from 'components/TopTopics/TopTopics';
import MentalWellness from 'components/Icons/Topics/MentalWellness';
import Sleep from 'components/Icons/Topics/Sleep';
import Wellbeing from 'components/Icons/Topics/Wellbeing';
import QuickReport from 'components/Dashboard/QuickReport';
import PopularProgrammes from 'components/Dashboard/PopularProgrammes';

const Dashboard = () => {
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
      icon: <MentalWellness width={25} height={25} />,
      title: 'Mental Wellness',
      impressions: '3,230',
    },
    {
      icon: <Sleep width={25} height={25} />,
      title: 'Sleep',
      impressions: '2,710',
    },
    {
      icon: <Wellbeing width={25} height={25} />,
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

  return (
    <DashboardLayout
      heading={<Heading company="Optimum Health, LTD" user="Erika" />}
      messages={<Messages messages={messages} />}
      topics={<TopTopics topics={topics} />}
      report={<QuickReport reports={reports} />}
      programmes={<PopularProgrammes insights={insights} />}
    />
  );
};

export default Dashboard;
