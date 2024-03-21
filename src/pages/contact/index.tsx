import Head from 'next/head';
import { ContactForm } from '@/components/Forms/index';
import { Title } from '@/components/index';

export default function ContactIndexPage() {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Contact Page" />
      </Head>
      <Title title="Contact Me" />
      <div className="grid w-3/5 gap-10 md:grid-cols-12 mx-auto">
        <div className="leading-6 pr-6 md:col-span-7">
          <p>
            If you have any queries about responsive website development,
            performance optimization, accessibility compliance, E2E testing,
            maintenance and support, or SEO for your digital product, reach out
            and let&apos;s have a conversation about how we can help add value
            to your business.
          </p>
          <a
            href="https://www.linkedin.com/in/karldlima/"
            target="_blank"
            rel="noopener"
            className="text-black dark:text-black hover:text-highlight mt-6 flex gap-3 align-center"
          >
            <span className="sr-only">LinkedIn</span>
            <svg
              fill="currentColor"
              enable-background="new 0 0 100 100"
              viewBox="0 0 100 100"
              className="h-6 w-6"
            >
              <g id="_x31_0.Linkedin">
                <path d="m90 90v-29.3c0-14.4-3.1-25.4-19.9-25.4-8.1 0-13.5 4.4-15.7 8.6h-.2v-7.3h-15.9v53.4h16.6v-26.5c0-7 1.3-13.7 9.9-13.7 8.5 0 8.6 7.9 8.6 14.1v26h16.6z"></path>{' '}
                <path d="m11.3 36.6h16.6v53.4h-16.6z"></path>{' '}
                <path d="m19.6 10c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.7 9.6 9.7 9.6-4.4 9.6-9.7-4.3-9.6-9.6-9.6z"></path>
              </g>
            </svg>
            <p className="pt-1">My LinkedIn</p>
          </a>
        </div>
        <div className="md:col-span-5">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
