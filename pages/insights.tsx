import Engagements from 'components/PageComponents/Insights/Engagements';
import InisghtsLayout from 'components/PageComponents/Insights/InisghtsLayout';
import UserInsights from 'components/PageComponents/Insights/UserInsights';
import TopTopics from 'components/TopTopics/TopTopics';
import PopularProgrammes from 'components/PageComponents/Insights/PopularProgrammes';
const Insights = () => {
  const { pulseChecks, topics, quickInsights, teams, programmes } = getData();
  return (
    <InisghtsLayout
      insights={<UserInsights quickInsights={quickInsights} />}
      engagements={<Engagements teams={teams} />}
      pulses={<TopTopics topics={pulseChecks} />}
      topics={<TopTopics topics={topics} />}
      programmes={<PopularProgrammes insights={programmes} />}
    />
  );
};

export default Insights;

function getData() {
  const ICON_PATH = '/images';

  const pulseChecks = [
    {
      icon: `${ICON_PATH}/pulse-logos/happy.svg`,
      title: '84 responses',
      impressions: '32',
      from: 'Commercials Team',
    },
    {
      icon: `${ICON_PATH}/pulse-logos/sad.svg`,
      title: '51 responses',
      impressions: '19',
      from: 'Engineering Team',
    },
    {
      icon: `${ICON_PATH}/pulse-logos/vhappy.svg`,
      title: '11 responses',
      impressions: '4',
      from: 'Design Team',
    },
  ];

  const topics = [
    {
      icon: `${ICON_PATH}/topic-logos/mental-wellness.svg`,
      title: 'Mental Wellness',
      impressions: '3,230',
      from: 'active impressions',
    },
    {
      icon: `${ICON_PATH}/topic-logos/sleep.svg`,
      title: 'Sleep',
      impressions: '2,710',
      from: 'active impressions',
    },
    {
      icon: `${ICON_PATH}/topic-logos/well-being.svg`,
      title: 'Well-being',
      impressions: '1,100',
      from: 'active impressions',
    },
  ];

  // const insights = [
  //   {
  //     rate: 86.5,
  //     description:
  //       '86.5% members from your Data and Growth teams felt “Stress” at least 5 times in the last month based on check ins.',
  //   },
  //   {
  //     rate: 54,
  //     description: 'Procurement and Editorial team are your loyal Kami users with a 54% 3-day retention rate! Wow!',
  //   },
  // ];

  const quickInsights = [
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
    {
      title: 'Daily Active Users',
      value: '72',
      percentage: '+ 4.01% from last week',
    },
    {
      title: 'Programme Completion',
      value: '+29',
      percentage: '- 2.21% from last week',
    },
  ];

  const teams = [
    {
      name: 'Procurement Team',
      impressions: 13230,
    },
    {
      name: 'Editorial Team',
      impressions: 2710,
    },
    {
      name: 'Administration Team',
      impressions: 1100,
    },
    {
      name: 'Marketing Team',
      impressions: 1100,
    },
    {
      name: 'Data & Growth',
      impressions: 4000,
    },
    {
      name: 'Design Team',
      impressions: 2500,
    },
  ];

  const programmes = [
    {
      title: 'Managing Mental Health as a Parent',
      topics: ['Parenting'],
      rate: 50,
    },
    {
      title: 'Maintaining Healthy Relationships',
      topics: ['Family', 'Relationships'],
      rate: 67,
    },
    {
      title: 'Maintaining Healthy Relationships',
      topics: ['Family', 'Relationships'],
      rate: 67,
    },
  ];
  return { pulseChecks, topics, quickInsights, teams, programmes };
}
