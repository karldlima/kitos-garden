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

export interface PostParams {
  slug: string;
}
export const getPost = async (params: PostParams): Promise<any> => {
  const responseData = await getEntry(
    `/posts?filters[slug][$eq]=${params.slug}&populate=*`
  );
  return {
    props: {
      post: responseData,
    },
  };
};
