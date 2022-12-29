import DashboardLayout from 'components/Dashboard/DashboardLayout';
import Heading from 'components/Dashboard/Heading';
import Messages from 'components/Dashboard/Messages';

import { Button } from '@mui/material';

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
  return (
    <DashboardLayout
      heading={<Heading company="Optimum Health, LTD" user="Erika" />}
      messages={<Messages messages={messages} />}
      programmes={<div>programmes</div>}
      report={<div>report</div>}
      topics={<div>topics</div>}
    />
  );
};

export default Dashboard;
