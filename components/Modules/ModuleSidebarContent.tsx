import { Box, Button, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { FunctionComponent } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import type { ModuleSideBarContentTypes } from 'types/modules';

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

export default ModuleSideBarContent;
