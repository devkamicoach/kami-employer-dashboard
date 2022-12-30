import { Box, Card, CardContent, Typography } from '@mui/material';
import Chip from 'components/Chip/Chip';
import { useModuleDispatch } from 'context/ModuleContext';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import type { ModuleCardTypes } from 'types/modules';

const ModuleCard: FunctionComponent<ModuleCardTypes> = ({ title, icon, isTop = false, content }) => {
  const dispatch = useModuleDispatch();
  return (
    <Card
      className="max-w-[175px] h-full"
      onClick={() => {
        dispatch({ type: 'open', content: { title, ...content } });
      }}
    >
      <CardContent className="flex flex-col items-center gap-2">
        <Box width={80} height={80} className="bg-gray-100 flex justify-center items-center rounded-full relative">
          <Image src={icon} alt="Icon" width={40} height={40} />
        </Box>
        <Typography className="text-center">{title}</Typography>
        {isTop && <Chip title="Top module" color="green" />}
      </CardContent>
    </Card>
  );
};

export default ModuleCard;
