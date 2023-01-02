import { Grid, Typography } from '@mui/material';
import { FunctionComponent } from 'react';
import type { ArticleCardTypes } from 'types/support';
import ArticleCard from 'components/Cards/ArticleCard';

type ArticleListTypes = {
  articles: Array<ArticleCardTypes>;
};

const ArticleList: FunctionComponent<ArticleListTypes> = ({ articles }) => {
  return (
    <>
      <Typography component="h2" className="text-2xl">
        Helping you help others
      </Typography>
      <Typography component="p" className="mb-5">
        Resources on Workplace Wellbeing
      </Typography>
      <Grid container className="gap-y-8 gap-x-4">
        {articles.map(({ authorImg, articleImg, authorName, summary, title, topics }, index) => (
          <Grid key={index} lg={3} item>
            <ArticleCard
              authorImg={authorImg}
              authorName={authorName}
              articleImg={articleImg}
              summary={summary}
              title={title}
              topics={topics}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ArticleList;
