"use client";
import { GetStaticProps } from "next";

import { getEntry } from "../../content/provider";

export interface PageProps {
  project: any;
}

export default function SingleProjectPage({ project }: PageProps) {
  return <div>Single Project</div>;
}

export async function getStaticPaths() {
  const projects: any = await getEntry("/project-page", {
    populate: ["projects"],
  });

  const paths = projects?.data?.attributes?.projects?.data?.map(
    (project: { attributes: { slug: string } }) => ({
      params: { slug: project.attributes.slug },
    })
  );

  return { paths, fallback: false };
}

export async function getStaticProps({ params }): GetStaticProps<PageProps> {
  const responseData: any = await getEntry(
    `/projects?filters[slug][$eq]=${params.slug}`
  );
  return {
    props: {
      project: responseData,
    },
  };
}
