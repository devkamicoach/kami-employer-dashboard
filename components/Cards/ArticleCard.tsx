import { Box, Card, CardContent, CardMedia, Chip, Typography } from '@mui/material';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import type { ArticleCardTypes } from 'types/support';

const ArticleCard: FunctionComponent<ArticleCardTypes> = ({
  authorName,
  authorImg,
  articleImg,
  title,
  summary,
  topics,
}) => {
  return (
    <Card className="max-w-[350px] h-full">
      <CardMedia sx={{ height: 175 }} component="img" src={articleImg} />
      <CardContent>
        <Box className="flex items-center gap-2 pb-3">
          <Box className="relative rounded-full" width={20} height={20}>
            <Image src={authorImg} layout="fill" className="rounded-full" objectFit="cover" alt="icon" />
          </Box>
          <Typography component="h4" className="font-body text-kami-green">
            {authorName}
          </Typography>
        </Box>
        <Typography component="h3" className="font-body text-lg font-bold">
          {title}
        </Typography>
        <Typography component="p" className="text-sm my-3">
          {summary}
        </Typography>
        <Box className="flex gap-3 flex-wrap">
          {topics.map((topic, index) => (
            <Chip key={index} label={topic} className="bg-[#ECFAF9] text-kami-green" />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
