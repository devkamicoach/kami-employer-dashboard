import ModuleLayout from 'components/Modules/ModuleLayout';
import ModuleList from 'components/Modules/ModuleList';

const ICON_PATH = '/images/topic-logos';
const Modules = () => {
  const { currentModules, recommendedModules } = getModules();
  return (
    <ModuleLayout
      currentModules={<ModuleList heading="Your current modules" modules={currentModules} />}
      recommendedModules={
        <ModuleList
          heading="Recommended modules"
          subheading="These are recommendations based on your insights and current employee demographics."
          modules={recommendedModules}
        />
      }
    />
  );
};

export default Modules;

function getModules() {
  const currentModules = [
    {
      title: 'Mental Wellness',
      icon: `${ICON_PATH}/mental-wellness.svg`,
      isTop: true,
    },
    {
      title: 'Sleep',
      icon: `${ICON_PATH}/sleep.svg`,
      isTop: true,
    },
    {
      title: 'Family Planning',
      icon: `${ICON_PATH}/family-planning.svg`,
      isTop: true,
    },
    {
      title: 'Birth',
      icon: `${ICON_PATH}/birth.svg`,
    },
    {
      title: 'Well-being',
      icon: `${ICON_PATH}/well-being.svg`,
    },
    {
      title: 'Pregnancy',
      icon: `${ICON_PATH}/pregnancy.svg`,
    },
  ];

  const recommendedModules = [
    {
      title: 'Relationships',
      icon: `${ICON_PATH}/pregnancy.svg`,
    },
    {
      title: 'Menopause or Manopause',
      icon: `${ICON_PATH}/pregnancy.svg`,
    },
    {
      title: 'Family',
      icon: `${ICON_PATH}/pregnancy.svg`,
    },
    {
      title: 'Parental Leave & Back to Work',
      icon: `${ICON_PATH}/pregnancy.svg`,
    },
  ];

  return { currentModules, recommendedModules };
}
