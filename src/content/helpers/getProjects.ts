import { getEntry } from '../provider';
import { Project, ProjectIndex, Wrapper } from '../types';

export const getProjectIndex = async (): Promise<ProjectIndex> => {
  return await getEntry('/project-page', {
    fields: ['title', 'description'],
    populate: {
      projects: {
        fields: ['title', 'slug', 'date', 'blurb', 'updatedAt'],
        populate: ['image', 'technologies'],
      },
    },
  });
};

export interface ProjectParams {
  slug: string;
}
export const getProject = async (
  params: ProjectParams,
): Promise<Wrapper<Project>> => {
  const responseData = await getEntry(
    `/projects?filters[slug][$eq]=${params.slug}&populate=*`,
  );
  return {
    props: {
      project: responseData,
    },
  };
};
