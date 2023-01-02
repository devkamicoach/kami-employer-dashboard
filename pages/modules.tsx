import ModuleLayout from 'components/PageComponents/Modules/ModuleLayout';
import ModuleList from 'components/PageComponents/Modules/ModuleList';
import PopupSidebar from 'components/Sidebar/PopupSidebar';
import { useSidebar, SidebarProvider } from 'context/SidebarContext';
import ModuleSideBarContent from 'components/PageComponents/Modules/ModuleSidebarContent';
import type { ModuleCardTypes } from 'types/modules';
import { FunctionComponent } from 'react';

const ICON_PATH = '/images/topic-logos';

type ModuleContentTypes = {
  currentModules: Array<ModuleCardTypes>;
  recommendedModules: Array<ModuleCardTypes>;
};

const ModuleContent: FunctionComponent<ModuleContentTypes> = ({ currentModules, recommendedModules }) => {
  const content = useSidebar() as any;
  return (
    <>
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
      <PopupSidebar
        heading={content?.title}
        subheading="NEWEST MODULE"
        content={
          <ModuleSideBarContent
            title={content?.title}
            description={content?.description}
            details={content?.details}
            price={content?.price}
            testimonial={content?.testimonial}
          />
        }
        open={content?.open}
      />
    </>
  );
};

const Modules = () => {
  const { currentModules, recommendedModules } = getModules();

  return (
    <SidebarProvider>
      <ModuleContent currentModules={currentModules} recommendedModules={recommendedModules} />
    </SidebarProvider>
  );
};

export default Modules;

function getSideBarContent() {
  return {
    description:
      'For both men and women in their 40s and 50s, the changes in hormone levels can have profound effects on their wellbeing and ability to function in a way that can be alarming and overwhelming to them. At Kinhub, we know that this significant life transition needs the right support to enable both men and women to feel empowered.',
    testimonial: '92% said resources from this module made them feel supported',
    price: 30,
    details: [
      'Responsive Chat',
      'Curated content and resources',
      'Unlimited consultant sessions*',
      'Around the clock Q&A',
      'Bespoke coaching programmes',
      '2 masterclasses/year',
    ],
  };
}

function getModules() {
  const currentModules = [
    {
      title: 'Mental Wellness',
      icon: `${ICON_PATH}/mental-wellness.svg`,
      isTop: true,
      content: getSideBarContent(),
    },
    {
      title: 'Sleep',
      icon: `${ICON_PATH}/sleep.svg`,
      isTop: true,
      content: getSideBarContent(),
    },
    {
      title: 'Family Planning',
      icon: `${ICON_PATH}/family-planning.svg`,
      isTop: true,
      content: getSideBarContent(),
    },
    {
      title: 'Birth',
      icon: `${ICON_PATH}/birth.svg`,
      content: getSideBarContent(),
    },
    {
      title: 'Well-being',
      icon: `${ICON_PATH}/well-being.svg`,
      content: getSideBarContent(),
    },
    {
      title: 'Pregnancy',
      icon: `${ICON_PATH}/pregnancy.svg`,
      content: getSideBarContent(),
    },
  ];

  const recommendedModules = [
    {
      title: 'Relationships',
      icon: `${ICON_PATH}/pregnancy.svg`,
      content: getSideBarContent(),
    },
    {
      title: 'Menopause or Manopause',
      icon: `${ICON_PATH}/pregnancy.svg`,
      content: getSideBarContent(),
    },
    {
      title: 'Family',
      icon: `${ICON_PATH}/pregnancy.svg`,
      content: getSideBarContent(),
    },
    {
      title: 'Parental Leave & Back to Work',
      icon: `${ICON_PATH}/pregnancy.svg`,
      content: getSideBarContent(),
    },
  ];

  return { currentModules, recommendedModules };
}
