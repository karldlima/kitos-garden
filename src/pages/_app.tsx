import type { AppProps } from 'next/app';
import Head from 'next/head';
import RootLayout from './layout';

import '@/design-system/index.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="author" content="Karl D'Lima" />
      </Head>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  );
}
