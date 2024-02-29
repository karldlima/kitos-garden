import { GetStaticProps } from "next";

import { getProjectIndex, getProject } from "@/content/helpers/index";

export interface PageProps {
  project: any;
}

export default function SingleProjectPage({ project }: PageProps) {
  return <div>Single Project</div>;
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
