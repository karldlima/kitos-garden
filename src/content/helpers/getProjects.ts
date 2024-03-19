import { getEntry } from "../provider";

// TODO: typing
export const getProjectIndex = async (): Promise<any> => {
  return await getEntry("/project-page", {
    fields: ["title", "description"],
    populate: {
      projects: {
        fields: ["title", "slug", "date", "blurb"],
        populate: ["image", "technologies"],
      },
    },
  });
};

export interface ProjectParams {
  slug: string;
}
export const getProject = async (params: ProjectParams): Promise<any> => {
  const responseData = await getEntry(
    `/projects?filters[slug][$eq]=${params.slug}&populate=*`
  );
  return {
    props: {
      project: responseData,
    },
  };
};
