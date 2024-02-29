import { GetStaticProps } from "next";

import { getPostIndex } from "@/content/helpers/index";

export interface PageProps {
  postPageData: any;
}

export default function PostIndexPage({ postPageData }: PageProps) {
  return <div className="h-[60rem]">Post Page</div>;
}

export async function getStaticProps(): GetStaticProps<PageProps> {
  const postIndex: any = await getPostIndex();
  return {
    props: {
      postPageData: postIndex,
    },
  };
}
