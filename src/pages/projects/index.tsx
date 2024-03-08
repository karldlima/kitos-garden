import { GetStaticProps } from "next";

import { getProjectIndex } from "@/content/helpers/index";
import { getOrderedProjects } from "@/content/utils/index";
import { Title, DisplayCard } from "@/components/index";

export interface PageProps {
  projectPageData: any;
}

export default function ProjectIndexPage({ projectPageData }: PageProps) {
  const projects = projectPageData?.data?.attributes?.projects?.data;
  const { title, description } = projectPageData?.data?.attributes;
  const orderedProjects = getOrderedProjects(projects);
  return (
    <>
      <Title title={title} subtitle={description} />
      <div className="columns-1 w-6/12 gap-y-12 mx-auto md:columns-2 xl:w-6/12 2xl:w-4/12">
        {orderedProjects?.map(({ attributes, id }) => (
          <div
            className="inline-block w-full mb-4 box-border p-1 max-w-sm"
            key={id}
          >
            <DisplayCard cardData={attributes} />
          </div>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps(): GetStaticProps<PageProps> {
  // TODO: typing for projects data
  const projectIndex: any = await getProjectIndex();
  return {
    props: {
      projectPageData: projectIndex,
    },
  };
}
