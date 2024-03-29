import Head from 'next/head';

import { getProjectIndex } from '@/content/helpers';
import { getOrderedProjects } from '@/content/utils';
import { Title, DisplayCard } from '@/components';

export interface PageProps {
  projectPageData: any;
}

export default function ProjectIndexPage({ projectPageData }: PageProps) {
  const projects = projectPageData?.data?.attributes?.projects?.data;
  const { title, description } = projectPageData?.data?.attributes;
  const orderedProjects = getOrderedProjects(projects);
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Software Projects" />
      </Head>
      <Title title={title} subtitle={description} />
      <div className="columns-1 w-8/12 gap-y-12 mx-auto md:columns-2 xl:w-6/12 2xl:w-5/12">
        {/* TODO: useMediaQuery hook to use original projects array in mobile view */}
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

export async function getStaticProps(): Promise<{ props: PageProps }> {
  // TODO: typing for projects data
  const projectIndex: any = await getProjectIndex();
  return {
    props: {
      projectPageData: projectIndex,
    },
  };
}
