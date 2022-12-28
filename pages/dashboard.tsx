import DashboardLayout from 'components/Dashboard/DashboardLayout';
import Heading from 'components/Dashboard/Heading';
import Messages from 'components/Dashboard/Messages';

const Dashboard = () => {
  return (
    <DashboardLayout
      heading={<Heading company="Optimum Health, LTD" user="Erika" />}
      messages={<Messages />}
      programmes={<div>programmes</div>}
      report={<div>report</div>}
      topics={<div>topics</div>}
    />
  );
};

export default Dashboard;
