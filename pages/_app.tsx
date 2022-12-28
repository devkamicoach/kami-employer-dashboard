import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ReactNode, useMemo, ReactElement } from 'react';
import { CssBaseline } from '@mui/material';
import type { NextPage } from 'next';

import Layout from 'components/Layout/Layout';

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout;
}

const LayoutDefault = (page: ReactNode) => {
  const router = useRouter();
  const hideNavigation = useMemo(() => {
    // Hides the navigation bars for the main page. (Can be changed)
    return router.pathname === '/';
  }, [router]);

  return (
    <Layout hideNavigation={hideNavigation}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {page}
    </Layout>
  );
};

function MyApp({ Component, pageProps }: MyAppProps) {
  const getLayout = Component.getLayout ?? LayoutDefault;
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
