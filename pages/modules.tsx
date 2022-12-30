import { Box, Button, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import ModuleLayout from 'components/Modules/ModuleLayout';
import ModuleList from 'components/Modules/ModuleList';
import PopupSidebar from 'components/Sidebar/PopupSidebar';
import { FunctionComponent } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import type { ModuleSideBarContentTypes } from 'types/modules';
import { useModule } from 'context/ModuleContext';

const ICON_PATH = '/images/topic-logos';

const ModuleSideBarContent: FunctionComponent<ModuleSideBarContentTypes> = ({
  title,
  description,
  testimonial,
  price,
  details,
}) => {
  return (
    <Box className="flex flex-col gap-5">
      <Typography component="p" className="text-sm">
        {description}
      </Typography>
      <Box className="bg-[#E7E7E7] p-5 rounded-md ">{testimonial}</Box>
      <Box className="bg-[#E7E7E7] p-5 rounded-md">
        <Typography>{title}</Typography>
        <Typography component="h3" className="text-4xl">
          {price}
        </Typography>
        <List>
          {details?.map((detail, index) => (
            <ListItem disablePadding key={index}>
              <ListItemIcon className="min-w-[30px]">
                <CheckCircleIcon className="text-[#8DC380]" fontSize="small" />
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={<Typography className="font-body text-sm">{detail}</Typography>}
              />
            </ListItem>
          ))}
        </List>
        <Box className="flex flex-col gap-2">
          <Button variant="contained" className="bg-kami-gray">
            Inquire
          </Button>
          <Button variant="contained" className="bg-kami-gray">
            Add to your plan
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const Modules = () => {
  const { currentModules, recommendedModules } = getModules();
  const content = useModule();
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

export default Modules;

function getSideBarContent() {
  return {
    description:
      'For both men and women in their 40s and 50s, the changes in hormone levels can have profound effects on their wellbeing and ability to function in a way that can be alarming and overwhelming to them. At Kinhub, we know that this significant life transition needs the right support to enable both men and women to feel empowered.',
    testimonial: '92% said resources from this module made them feel supported',
    price: '30',
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
