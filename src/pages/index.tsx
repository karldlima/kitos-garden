import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";

import { HeroIcon } from "@/components/index";
import { getEntry } from "../content/provider";

export interface PageProps {
  homeData: any;
}

export default function Page({ homeData }: PageProps) {
  const { title, subtitle } = homeData?.data?.attributes;
  return (
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
            {/* TODO: use ButtonLink and implement cva for customized display */}
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
        <p className="mt-2 w-4/5 md:mt-4 md:w-3/5 mx-auto leading-6">
          I specialize in providing the following for small to medium business'
          and larger companies: Responsive website development, monorepo
          implementation, performance optimization, accessibility compliance,
          end-to-end testing, maintenance and support, search engine
          optimization.
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
        <p className="mt-2 w-4/5 md:mt-4 md:w-3/5 mx-auto leading-6">
          If you have any further questions regarding my services, feel free to{" "}
          <Link href="/contact" className="text-highlight">
            contact me
          </Link>
          . Cheers!
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
