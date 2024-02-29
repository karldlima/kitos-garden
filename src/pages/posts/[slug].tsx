import { GetStaticProps } from "next";

import { getPostIndex, getPost } from "@/content/helpers/index";

export interface PageProps {
  post: any;
}

export default function SinglePostPage({ post }: PageProps) {
  return <div>Single Post</div>;
}

export async function getStaticPaths() {
  const posts: any = await getPostIndex();

  const paths = posts?.data?.attributes?.posts?.data?.map(
    (post: { attributes: { slug: string } }) => ({
      params: { slug: post.attributes.slug },
    })
  );

  return { paths, fallback: false };
}

export async function getStaticProps({ params }): GetStaticProps<PageProps> {
  return await getPost(params);
}
