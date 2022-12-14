import Engagements from "components/PageComponents/Insights/Engagements";
import InisghtsLayout from "components/PageComponents/Insights/InisghtsLayout"
import UserInsights from "components/PageComponents/Insights/UserInsights";
import TopTopics from "components/TopTopics/TopTopics"

const Insights = () => {
  const { topics, insights, quickInsights, teams } = getData();
  return (
    <InisghtsLayout
      insights={<UserInsights insights={insights} quickInsights={quickInsights} />}
      engagements={<Engagements teams={teams} />}
      topics={<TopTopics topics={topics} />} />
  )
}

export default Insights

function getData() {
  const ICON_PATH = '/images/topic-logos';

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

  const insights = [
    {
      rate: 86.5,
      description: "86.5% members from your Data and Growth teams felt “Stress” at least 5 times in the last month based on check ins."
    },
    {
      rate: 54,
      description: "Procurement and Editorial team are your loyal Kami users with a 54% 3-day retention rate! Wow!"
    }
  ];

  const quickInsights = [
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

  const teams = [
    {
      name: "Procurement Team",
      impressions: 13230
    },
    {
      name: "Editorial Team",
      impressions: 2710
    },
    {
      name: "Administration Team",
      impressions: 1100
    },
    {
      name: "Marketing Team",
      impressions: 1100
    },
    {
      name: "Data & Growth",
      impressions: 4000
    },
    {
      name: "Design Team",
      impressions: 2500
    }
  ]

  return { topics, insights, quickInsights, teams }
}