import type { AppProps } from 'next/app';
import RootLayout from './layout';

import '@/design-system/index.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
