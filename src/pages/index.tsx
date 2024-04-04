import Image from 'next/image';
import Link from 'next/link';

import Head from 'next/head';
import { HeroIcon } from '@/components';
import { getEntry } from '../content/provider';

const jsonLd = {
  '@context': 'https://schema.org/',
  '@type': 'WebSite',
  name: 'gardenofkarl',
  url: process.env.NEXT_PUBLIC_SITE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: '{search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export interface PageProps {
  homeData: {
    data: {
      id: number;
      attributes: {
        title: string;
        subtitle: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        hero: {
          data: null;
        };
      };
    };
  };
}

export default function Page({ homeData }: PageProps) {
  const { title, subtitle } = homeData?.data?.attributes;
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Portfolio and Blog" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <div>
        <section className="bg-secondary">
          <div className="grid ml-auto xl:gap-0 md:grid-cols-12">
            <div className="order-2 mr-auto px-10 py-12 md:order-1 md:pb-0 md:px-12 md:pt-18 xl:px-16 xl:pt-22 md:col-span-5">
              <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-3xl lg:text-4xl xl:text-6xl text-white">
                {title}
              </h1>
              <p className="max-w-2xl mb-6 font-light text-secondary text-lg md:mb-8 md:text-base lg:text-xl">
                {subtitle}
              </p>
              <Link
                href="#about-me"
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded text-white"
              >
                A bit about me
                <HeroIcon
                  icon="arrow-right"
                  className="w-5 h-5 ml-2 text-white"
                />
              </Link>
            </div>
            <div className="order-1 w-fit h-fit md:mt-0 md:col-span-7 md:flex md:order-2">
              <Image
                className="md:min-w-[580px] md:min-h-[356px]"
                src="/assets/hero/cafe.png"
                alt="Karl in cafe"
                width={2000}
                height={2000}
                priority={true}
              />
            </div>
          </div>
        </section>
        <section id="about-me" className="bg-primary">
          <p className="mt-14 w-4/5 mx-auto leading-6 md:w-3/5 md:mt-28">
            I&apos;m Karl. A software developer that enjoys creating reliable
            customer facing solutions for growth focused business&apos;.
            Here&apos;s a little about me and what I do for work:
          </p>
          <h3 className="mt-6 w-4/5 md:mt-10 md:w-3/5 mx-auto">About Me</h3>
          <p className="mt-2 w-4/5 md:mt-4 md:w-3/5 mx-auto leading-6">
            Fueled by curiosity, I ventured to Melbourne, merging my
            problem-solving skills with a career in software engineering. With
            over 6 years of experience, I specialize in React/Redux, JavaScript,
            testing libraries, and analytics, crafting scalable solutions for
            diverse industries like Telecom, Consulting, Banking, and Car
            Rental.
          </p>
          <p className="mt-2 w-4/5 md:mt-4 md:w-3/5 mx-auto leading-6">
            I&apos;m interested in responsive website development, efficient
            monorepo implementation, performance optimization, accessibility
            compliance, end-to-end testing, maintenance, support, and search
            engine optimization for small to medium business&apos; and larger
            companies.
          </p>
          <h3 className="mt-6 w-4/5 md:mt-10 md:w-3/5 mx-auto">
            Beyond the Screen
          </h3>
          <p className="mt-2 w-4/5 md:mt-4 md:w-3/5 mx-auto leading-6">
            Having immigrated to New Zealand in the early 2000s, my upbringing
            in Asia and subsequent life in NZ have instilled in me a profound
            adaptability to change. Growing up between cultures, embracing an
            open mind, I love connecting with people from all walks of life and
            thrive on the diversity of the human experience.
          </p>
          <p className="mt-2 w-4/5 md:mt-4 md:w-3/5 mx-auto leading-6">
            If you have any further questions regarding my services, feel free
            to{' '}
            <Link href="/contact" className="text-highlight">
              contact me
            </Link>
            . Cheers!
          </p>
        </section>
      </div>
    </>
  );
}

export async function getStaticProps(): Promise<{ props: PageProps }> {
  const responseData: PageProps['homeData'] = await getEntry('/home', {
    populate: ['hero'],
  });
  return {
    props: {
      homeData: responseData,
    },
  };
}
