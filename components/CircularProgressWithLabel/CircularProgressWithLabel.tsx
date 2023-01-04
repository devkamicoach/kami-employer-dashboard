import { Typography, Box, CircularProgress, CircularProgressProps } from '@mui/material';
import cn from "classnames"

type ColorTypes = {
  green: string;
  red: string;
}

// type CircularProgressWithLabelTypes = {
//   value: number;
//   color?: keyof ColorTypes;
//   ...props: CircularProgressProps;
// }

const CircularProgressWithLabel = (props: CircularProgressProps & { value: number } & { customColor?: keyof ColorTypes | undefined }) => {

  const colors: ColorTypes = {
    green: "text-kami-green",
    red: "text-[#CF2F2F]",
  }

  const currColor = colors[props.customColor ?? "green"]

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" className={cn("relative z-10", currColor)} size={100} {...props} />
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
        <Typography variant="caption" className={cn("text-2xl", currColor)}>{`${props.value}%`}</Typography>
      </Box>
    </Box>
  );
};

export default CircularProgressWithLabel;
