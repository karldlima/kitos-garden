import { getEntry } from "../provider";

export const getPostIndex = async (): Promise<any> => {
  return await getEntry("/post-page", {
    populate: ["posts"],
  });
};

export const getPost = async (params): Promise<any> => {
  const responseData = await getEntry(
    `/posts?filters[slug][$eq]=${params.slug}`
  );
  return {
    props: {
      post: responseData,
    },
  };
};
