import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";

import { getEntry } from "../content/provider";

export interface PageProps {
  homeData: any;
}

export default function Page({ homeData }: PageProps) {
  return (
    <div className="mb-16 md:mb-20">
      <section className="bg-secondary">
        <div className="grid ml-auto xl:gap-0 md:grid-cols-12">
          <div className="order-2 mr-auto px-10 py-12 md:order-1 md:pb-0 md:px-12 md:pt-14 xl:px-16 xl:pt-18 md:col-span-5">
            <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-xl lg:text-2xl xl:text-6xl text-white">
              Kia Ora, I'm Karl
            </h1>
            <p className="max-w-2xl mb-6 font-light text-secondary text-lg md:mb-8 md:text-base lg:text-xl">
              I'm a Frontend Software Developer and this is my blog/project
              portfolio/digital garden of random software development tips and
              thoughts
            </p>
            <Link
              href="#about-me"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white"
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
            </Link>
          </div>
          <div className="order-1 w-fit h-fit md:mt-0 md:col-span-7 md:flex md:order-2">
            <Image
              className="md:min-w-[580px] md:min-h-[356px]"
              src="/assets/hero/cafe.png"
              alt="mockup"
              width={2000}
              height={2000}
              priority="high"
            />
          </div>
        </div>
      </section>
      <section id="about-me" className="bg-primary">
        <p className="mt-14 w-4/5 mx-auto leading-6 md:w-3/5 md:mt-28">
          I'm Karl. A software developer that enjoys creating reliable customer
          facing solutions for growth focused business'. Here's a little about
          me and what I do for work:
        </p>
        <h3 className="mt-6 w-4/5 md:mt-10 md:w-3/5 mx-auto">About Me</h3>
        <p className="mt-2 w-4/5 md:mt-4 md:w-3/5 mx-auto leading-6">
          Fuelled by curiosity, I found my way to Melbourne, blending my knack
          for problem-solving with a software engineering career. With 6+ years
          of experience, I'm primarily focused on using React/Redux, JavaScript,
          testing libraries and analytics to build scalable solutions for
          products and brands in various domains such as Telecom, Consulting
          Services, Banking and Car Rental.
        </p>
        <h3 className="mt-6 w-4/5 md:mt-10 md:w-3/5 mx-auto">
          Beyond the Screen
        </h3>
        <p className="mt-2 w-4/5 md:mt-4 md:w-3/5 mx-auto leading-6">
          Having immigrated to New Zealand in the early 2000s, my upbringing in
          India and subsequent life in NZ have instilled in me a profound
          adaptability to change. Growing up between cultures, embracing an open
          mind, I love connecting with people from all walks of life and thrive
          on the diversity of the human experience.
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
