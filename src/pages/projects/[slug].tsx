import { GetStaticProps } from "next";
import Link from "next/link";
import Image from "next/image";
import Markdown from "react-markdown";

import { getProjectIndex, getProject } from "@/content/helpers/index";
import { getTechnologies } from "@/content/utils/index";

export interface PageProps {
  project: any;
}

export default function SingleProjectPage({ project }: PageProps) {
  const { title, description, image, technologies, link } =
    project?.data?.[0]?.attributes ?? {};
  const techRefined = getTechnologies(technologies?.data).join(" • ");
  const imageUrl =
    image?.data?.attributes?.formats?.large?.url ??
    image?.data?.attributes?.formats?.medium?.url;
  return (
    <>
      <section className="text-center my-8 md:my-16">
        <h1 className="mb-3 max-w-80 mx-auto">{title}</h1>
      </section>
      <section className="flex flex-col mx-auto w-8/12 md:w-6/12 min-h-screen">
        <Image
          className="w-[564px] h-fit self-center mb-8"
          src={imageUrl}
          alt={title}
          width={800}
          height={800}
        />
        <p className="mb-10">
          <Markdown>{description}</Markdown>
        </p>
        <p className="flex text-primaryBrand mb-4 gap-4">
          {link?.map((l) => (
            <Link
              key={l?.id}
              href={l?.url ?? "#"}
              target="_blank"
              rel="noopener"
              className="text-black dark:text-primaryBrand hover:text-highlight ml-3"
            >
              <span className="sr-only">{l?.linkType}</span>
              <Image
                className="h-6"
                src={`/assets/icons/${l?.linkType}.svg`}
                alt={`${l?.linkType} icon`}
                width={25}
                height={50}
                priority={true}
              />
            </Link>
          ))}
        </p>
        <p className="text-xl text-primaryBrand">{techRefined}</p>
      </section>
    </>
  );
}

export async function getStaticPaths() {
  const projects: any = await getProjectIndex();

  const paths = projects?.data?.attributes?.projects?.data?.map(
    (project: { attributes: { slug: string } }) => ({
      params: { slug: project.attributes.slug },
    })
  );
  return { paths, fallback: false };
}

export async function getStaticProps({ params }): GetStaticProps<PageProps> {
  return await getProject(params);
}
