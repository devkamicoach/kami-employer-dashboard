import ArticleList from 'components/PageComponents/Support/ArticleList';
import SupportLayout from 'components/PageComponents/Support/SupportLayout';

const Support = () => {
  const articles = getArticles();
  return <SupportLayout articles={<ArticleList articles={articles} />} />;
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
