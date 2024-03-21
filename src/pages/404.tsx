import Head from 'next/head';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="404 Page" />
      </Head>
      <div className="min-h-screen mx-auto my-8 md:my-16">
        <h1 className="text-center">
          I probably haven&apos;t made this page yet
        </h1>
      </div>
    </>
  );
}
