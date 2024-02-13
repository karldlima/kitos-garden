"use client";
import { GetStaticProps } from "next";

import { getEntry } from "../../content/provider";

export interface PageProps {
  postPageData: any;
}

export default function PostIndexPage({ postPageData }: PageProps) {
  return <div>Post Page</div>;
}

export async function getStaticProps(): GetStaticProps<PageProps> {
  const responseData: any = await getEntry("/post-page", {
    populate: ["posts"],
  });
  return {
    props: {
      postPageData: responseData,
    },
  };
}

// TODO: pagination for posts
