import { getEntry } from "../provider";

export const getProjectIndex = async (): Promise<any> => {
  return await getEntry("/project-page", {
    fields: ["title", "description"],
    populate: {
      projects: { fields: ["title", "slug", "description", "date", "blurb"] },
    },
  });
};

export const getProject = async (params): Promise<any> => {
  const responseData = await getEntry(
    `/projects?filters[slug][$eq]=${params.slug}`
  );
  return {
    props: {
      project: responseData,
    },
  };
};
