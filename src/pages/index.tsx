import { GetStaticProps } from "next";
import Image from "next/image";

import { getEntry } from "../content/provider";

export interface PageProps {
  homeData: any;
}

export default function Page({ homeData }: PageProps) {
  return (
    <div className="mb-20">
      <section className="bg-white dark:bg-secondary">
        {/* TODO: review all tw stylings */}
        <div className="grid max-w-screen-xl ml-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
          <div className="mr-auto px-16 py-14 place-self-center lg:col-span-5">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Kia Ora, I'm Karl
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              I'm a Frontend Software Developer and this is my blog/project
              portfolio/digital garden of random software development tips and
              thoughts
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              A bit about me
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div className="hidden w-fit h-fit lg:mt-0 lg:col-span-7 lg:flex">
            <Image
              src="/assets/hero/cafe.png"
              alt="mockup"
              width={2000}
              height={2000}
              priority="high"
            />
          </div>
        </div>
      </section>
      <section className="bg-primary">
        <p className="mt-28 w-3/5 mx-auto leading-6">
          I'm Karl. A software developer that enjoys creating reliable customer
          facing solutions for growth focused business'. Here's a little about
          me and what I do for work:
        </p>
        <h3 className="mt-10 w-3/5 mx-auto">About Me</h3>
        <p className="mt-4 w-3/5 mx-auto leading-6">
          Fuelled by curiosity and an open mind, I found my way to Melbourne,
          blending my knack for problem-solving with a software engineering
          career. With 6+ years of experience, I'm primarily focused on using
          React/Redux, JavaScript, testing libraries and analytics to build
          scalable reliable customer facing solutions for products and brands in
          various domains such as Telecom, Consulting Services, Banking and Car
          Rental.
        </p>
        <h3 className="mt-10 w-3/5 mx-auto">Beyond the Screen</h3>
        <p className="mt-4 w-3/5 mx-auto">
          Imigrating to New Zealand in the early 2000s, I enjoy chasing
          adrenaline through
        </p>
      </section>
    </div>
  );
}

export async function getStaticProps(): GetStaticProps<PageProps> {
  const responseData: any = await getEntry("/home", {
    populate: ["hero"],
  });
  return {
    props: {
      homeData: responseData,
    },
  };
}
