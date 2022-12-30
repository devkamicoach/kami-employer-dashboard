import { Box, Typography } from '@mui/material';
import { FunctionComponent } from 'react';
import cn from 'classnames';

type ColorsType = {
  blue: string;
  green: string;
};

type ChipTypes = {
  title: string;
  color?: keyof ColorsType;
};

const Chip: FunctionComponent<ChipTypes> = ({ title, color = 'blue' }) => {
  const bgColors: ColorsType = {
    blue: 'bg-[#3590F3]',
    green: 'bg-[#64BA91]',
  };
  const textColors: ColorsType = {
    blue: 'text-[#3590F3]',
    green: 'text-[#64BA91]',
  };

  return (
    <Box className={cn('bg-opacity-10 p-2 rounded-md', bgColors[color])}>
      <Typography className={cn('text-sm text-center', textColors[color])}>{title}</Typography>
    </Box>
  );
};

export default Chip;
