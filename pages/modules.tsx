import { Box, Button, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import ModuleLayout from 'components/Modules/ModuleLayout';
import ModuleList from 'components/Modules/ModuleList';
import PopupSidebar from 'components/Sidebar/PopupSidebar';
import { FunctionComponent } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ICON_PATH = '/images/topic-logos';

type ModuleSideBarContentTypes = {
  title: string;
  description: string;
  testimonial: string;
  price: string;
  details: Array<string>;
};

const ModuleSideBarContent: FunctionComponent<ModuleSideBarContentTypes> = ({
  title,
  description,
  testimonial,
  price,
  details,
}) => {
  return (
    <Box className="flex flex-col gap-5">
      <Typography component="p">{description}</Typography>
      <Box className="bg-[#E7E7E7] p-5 rounded-md ">{testimonial}</Box>
      <Box className="bg-[#E7E7E7] p-5 rounded-md">
        <Typography>{title}</Typography>
        <Typography component="h3" className="text-4xl">
          {price}
        </Typography>
        <List>
          {details.map((detail, index) => (
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
  const { description, details, price, testimonial } = getSideBarContent();
  // const [open, setOpen] = useState(true);

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
        heading="Menopause or Manopause"
        subheading="NEWEST MODULE"
        content={
          <ModuleSideBarContent
            title="Menopause"
            description={description}
            details={details}
            price={price}
            testimonial={testimonial}
          />
        }
        open={true}
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
