import { GetStaticProps } from "next";

import { getProjectIndex } from "@/content/helpers/index";

export interface PageProps {
  projectPageData: any;
}

export default function ProjectIndexPage({ projectPageData }: PageProps) {
  return <div>Project Page</div>;
}

export async function getStaticProps(): GetStaticProps<PageProps> {
  const projectIndex: any = await getProjectIndex();
  return {
    props: {
      projectPageData: projectIndex,
    },
  };
}
