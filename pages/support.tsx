import ArticleList from 'components/PageComponents/Support/ArticleList';
import SupportLayout from 'components/PageComponents/Support/SupportLayout';
import PopupSidebar from 'components/Sidebar/PopupSidebar';
import { SidebarProvider, useSidebar } from '../context/SidebarContext';
import type { ArticleCardTypes } from 'types/support';
import { FunctionComponent } from 'react';
import KamiCard from 'components/Cards/KamiCard';
import { Box } from '@mui/material';

type SupportContentTypes = {
  articles: Array<ArticleCardTypes>;
};

const SupportContent: FunctionComponent<SupportContentTypes> = ({ articles }) => {
  const content = useSidebar() as any;
  const supportItems = [
    {
      title: 'Build a bespoke programme',
      description: 'We work with you to create a programme that is fully aligned to your overall vision and strategy.',
    },
    {
      title: 'Plan a workshop or seminar with Kami',
      description:
        'Help your workforce thrive, at home and at work with module-specific workshops to build a culture of wellbeing.',
    },
    {
      title: 'Sign up for our HR roundtables',
      description:
        'HR Roundtable membership includes weekly virtual HR roundtables, topic-specific virtual HR roundtables, and one-on-one coaching.',
    },
  ];
  return (
    <>
      <SupportLayout articles={<ArticleList articles={articles} />} />
      <PopupSidebar
        heading="Collaborate with us"
        content={
          <Box className="flex flex-col mt-4 gap-4">
            {supportItems.map(({ title, description }, index) => (
              <KamiCard key={index} title={title} description={description} />
            ))}
          </Box>
        }
        open={content?.open}
      />
    </>
  );
};

const Support = () => {
  const articles = getArticles();
  return (
    <SidebarProvider open={true}>
      <SupportContent articles={articles} />
    </SidebarProvider>
  );
};

export default Support;

function getArticles() {
  return [
    {
      authorName: 'Kami',
      authorImg: '/images/kami-icon.webp',
      articleImg: '/images/sample.jpeg',
      title: 'Supporting Managers: the 101',
      summary:
        'Many management departments use challenges and rewards as a way to encourage employees to work hard and meet their productivity goals.',
      topics: ['Work', 'Well-being'],
    },
    {
      authorName: 'Kami',
      authorImg: '/images/kami-icon.webp',
      articleImg: '/images/sample.jpeg',
      title: 'So you’re an HR Lead. What now?',
      summary:
        'Human resource managers are vital leaders in their organizations, overseeing employee recruitment, staff training and development...',
      topics: ['People', 'Human Resources'],
    },
    {
      authorName: 'Kami',
      authorImg: '/images/kami-icon.webp',
      articleImg: '/images/sample.jpeg',
      title: 'Understated leadership in People and Culture Management',
      summary:
        'The People & Culture Manager is responsible to provide leadership and direction to promote a positive work...',
      topics: ['Leadership', 'People'],
    },
    {
      authorName: 'Kami',
      authorImg: '/images/kami-icon.webp',
      articleImg: '/images/sample.jpeg',
      title: 'Understated leadership in People and Culture Management',
      summary:
        'The People & Culture Manager is responsible to provide leadership and direction to promote a positive work...',
      topics: ['Leadership', 'People'],
    },
    {
      authorName: 'Kami',
      authorImg: '/images/kami-icon.webp',
      articleImg: '/images/sample.jpeg',
      title: '10 Ways to Maintain Culture',
      summary:
        "Remote work culture is an unconditional feeling of connection co-workers experience when they're bonded by similar priorities, interests, and",
      topics: ['Remote Work', 'Workplace'],
    },
    {
      authorName: 'Kami',
      authorImg: '/images/kami-icon.webp',
      articleImg: '/images/sample.jpeg',
      title: 'Supporting Managers: the 101',
      summary:
        'Many management departments use challenges and rewards as a way to encourage employees to work hard and meet their productivity goals.',
      topics: ['Work', 'Well-being'],
    },
  ];
}
