import { Add } from '@mui/icons-material';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { FunctionComponent } from 'react';

type GroupsType = {
  groupList: Array<{
    name: string;
    number: number;
  }>;
};

const Groups: FunctionComponent<GroupsType> = ({ groupList }) => {
  return (
    <Box className="my-5">
      <Box className="flex gap-3">
        {groupList.map(({ name, number }, index) => (
          <Card className="basis-full max-w-[250px]" key={index}>
            <CardContent>
              <Typography className="mb-3">{name}</Typography>
              <Typography className="text-2xl font-bold text-kami-blue">{number}</Typography>
            </CardContent>
          </Card>
        ))}
        <Card className="basis-full max-w-[250px] bg-[#F2EFEB]">
          <CardContent className="flex flex-col justify-center items-center h-full p-0">
            <Add className="text-[#666665]" />
            <Typography className="text-lg font-bold text-[#666665]">Create a new group</Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Groups;
