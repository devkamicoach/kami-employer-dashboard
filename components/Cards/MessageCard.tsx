import { Card, CardContent, Box, Typography, CardActions } from '@mui/material';
import Image from 'next/image';
import { FunctionComponent, ReactNode } from 'react';
import cn from 'classnames';

type MessageCardTypes = {
  icon: string;
  message: string;
  heading: string;
  actionButton?: ReactNode;
};

const MessageCard: FunctionComponent<MessageCardTypes> = ({ icon, message, heading, actionButton }) => {
  return (
    <Card className="bg-[#F2EFEB] p-3" sx={{ boxShadow: 'none' }}>
      <CardContent>
        <Box className="flex items-center gap-2 pb-3">
          <Box className="relative rounded-full" width={25} height={25}>
            <Image
              src={icon}
              layout="fill"
              className={cn(!actionButton ? 'rounded-full' : '')}
              objectFit="cover"
              alt="icon"
            />
          </Box>
          <Typography component="h3" className="font-body font-bold">
            {heading}
          </Typography>
        </Box>
        <Typography component="p">{message}</Typography>
      </CardContent>
      {actionButton && <CardActions>{actionButton}</CardActions>}
    </Card>
  );
};

export default MessageCard;
