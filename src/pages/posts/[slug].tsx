"use client";
import { GetStaticProps } from "next";

import { getEntry } from "../../content/provider";

export interface PageProps {
  post: any;
}

export default function SinglePostPage({ post }: PageProps) {
  return <div>Single Post</div>;
}

export async function getStaticPaths() {
  const posts: any = await getEntry("/post-page", {
    populate: ["posts"],
  });

  const paths = posts?.data?.attributes?.posts?.data?.map(
    (post: { attributes: { slug: string } }) => ({
      params: { slug: post.attributes.slug },
    })
  );

  return { paths, fallback: false };
}

export async function getStaticProps({ params }): GetStaticProps<PageProps> {
  const responseData: any = await getEntry(
    `/posts?filters[slug][$eq]=${params.slug}`
  );
  return {
    props: {
      post: responseData,
    },
  };
}
