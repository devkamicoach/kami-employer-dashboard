import { Box, Typography } from '@mui/material';
import { FunctionComponent } from 'react';
import cn from 'classnames';

type ColorsType = {
  blue: string;
  green: string;
  gray: string;
};

type ChipTypes = {
  title: string;
  color?: keyof ColorsType;
};

const Chip: FunctionComponent<ChipTypes> = ({ title, color = 'gray' }) => {
  const bgColors: ColorsType = {
    blue: 'bg-[#3590F3]',
    green: 'bg-[#64BA91]',
    gray: 'bg-[#F2EFEB]',
  };
  const textColors: ColorsType = {
    blue: 'text-[#3590F3]',
    green: 'text-[#64BA91]',
    gray: 'text-[#7A7A7A]',
  };

  return (
    <Box className={cn('px-3 py-2 rounded-full', bgColors[color])}>
      <Typography className={cn('text-sm text-center', textColors[color])}>{title}</Typography>
    </Box>
  );
};

export default Chip;
