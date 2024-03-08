import { getEntry } from "../provider";

// TODO: typing
export const getPostIndex = async (): Promise<any> => {
  return await getEntry("/post-page", {
    fields: ["title", "description"],
    populate: {
      posts: {
        fields: ["title", "slug", "date", "blurb"],
        populate: ["image", "technologies", "category"],
      },
    },
  });
};

export const getPost = async (params): Promise<any> => {
  const responseData = await getEntry(
    `/posts?filters[slug][$eq]=${params.slug}&populate=*`
  );
  return {
    props: {
      post: responseData,
    },
  };
};
