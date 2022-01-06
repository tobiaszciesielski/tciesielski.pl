import React, { useEffect } from 'react';

import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { Layout } from '../components/Layout';
import { pageView } from '../lib/ga';

import '../styles/index.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      console.log('Route changed');
      pageView(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
