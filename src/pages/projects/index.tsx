"use client";
import { GetStaticProps } from "next";

import { getProjectIndex } from "@/content/helpers/index";

export interface PageProps {
  projectPageData: any;
}

export default function PostIndexPage({ projectPageData }: PageProps) {
  return <div>Project Page</div>;
}

export async function getStaticProps(): GetStaticProps<PageProps> {
  const responseData: any = await getProjectIndex();
  return {
    props: {
      projectPageData: responseData,
    },
  };
}

// TODO: pagination for projects
