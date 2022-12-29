import { Box, Typography } from '@mui/material';

const Chip = ({ title }) => {
  return (
    <Box className="bg-[#3590F3] bg-opacity-10 p-2 rounded-md">
      <Typography className="text-[#3590F3] text-sm">{title}</Typography>
    </Box>
  );
};

export default Chip;
