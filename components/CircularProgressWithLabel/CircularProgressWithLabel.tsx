import { Typography, Box, CircularProgress, CircularProgressProps } from '@mui/material';

const CircularProgressWithLabel = (props: CircularProgressProps & { value: number }) => {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" className="text-kami-green relative z-10" size={100} {...props} />
      <CircularProgress variant="determinate" value={100} className="text-gray-200 absolute right-0 z-0" size={100} />

      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" className="text-kami-green text-2xl">{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
};

export default CircularProgressWithLabel;
