"use client";
import { GetStaticProps } from "next";

import { getEntry } from "../../content/provider";

export interface PageProps {
  projectPageData: any;
}

export default function PostIndexPage({ projectPageData }: PageProps) {
  return <div>Project Page</div>;
}

export async function getStaticProps(): GetStaticProps<PageProps> {
  const responseData: any = await getEntry("/project-page", {
    populate: ["projects"],
  });
  return {
    props: {
      projectPageData: responseData,
    },
  };
}

// TODO: pagination for projects
