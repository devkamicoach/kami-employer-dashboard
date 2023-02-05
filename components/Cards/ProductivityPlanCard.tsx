import { Box, Card, CardContent, Typography } from '@mui/material';
import { FunctionComponent } from 'react';
import Image from 'next/image';
import { ProductivityPlanCardTypes } from 'types/settings';

const ProductivityPlanCard: FunctionComponent<ProductivityPlanCardTypes> = ({ title, line1, line2, line3 }) => {
  const icon = '/images/tickmark.svg';
  return (
    <Card className="bg-[#F2EFEB] rounded-md" sx={{ boxShadow: 'none' }}>
      <CardContent className="ml-5 mr-10">
        <Box className="flex items-center gap-2 pb-3 ">
          <Typography component="h4" className="transform-all font-bold font-body text-lg">
            {title}
          </Typography>
        </Box>
        <Box className="flex flex-row justify-between py-2">
          <Image src={icon} width="25" height="25" objectFit="cover" alt="icon" />
          <Typography component="p">{line1}</Typography>
        </Box>
        <Box className="flex flex-row justify-between py-2">
          <Image src={icon} width="25" height="25" objectFit="cover" alt="icon" />
          <Typography component="p">{line2}</Typography>
        </Box>
        <Box className="flex flex-row justify-between py-2">
          <Image src={icon} width="25" height="25" objectFit="cover" alt="icon" />
          <Typography component="p">{line3}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductivityPlanCard;
