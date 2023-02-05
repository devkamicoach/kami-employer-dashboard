import SettingsLayout from 'components/PageComponents/Settings/SettingsLayout';
import Details from '../components/PageComponents/Settings/Details';
import Plans from 'components/PageComponents/Settings/Plans';
import Subscriptions from 'components/PageComponents/Settings/Subscriptions';
import Seats from 'components/PageComponents/Settings/Seats';
const Settings = () => {
  const details = [
    {
      label: 'Name',
      input: 'Joyce Walker',
    },
    {
      label: 'Email',
      input: 'joyce@optimumhealth.co.uk',
    },
    {
      label: 'Company Name',
      input: 'Optimum Health',
    },
    {
      label: 'Industry',
      input: 'Optimum Health',
    },
    {
      label: 'Role',
      input: 'Optimum Health',
    },
  ];

  const plans = {
    name: 'Optimum Health',
    plan: 'Standard Plan',
    card: {
      title: 'Grow with our Productivity Plans',
      line1: 'Add more modules to your plan',
      line2: 'More tokens for your employees',
      line3: 'More tokens for your employees',
    },
  };
  return (
    <SettingsLayout
      details={<Details details={details} />}
      plans={
        <Plans
          name={plans.name}
          plan={plans.plan}
          title={plans.card.title}
          line1={plans.card.line1}
          line2={plans.card.line2}
          line3={plans.card.line3}
        />
      }
      seats={<Seats />}
      subscriptions={<Subscriptions />}
    />
  );
};

export default Settings;
