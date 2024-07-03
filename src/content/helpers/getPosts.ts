import { getEntry } from './provider';
import { BaseData, NotFound, Post, PostIndex, Wrapper } from '../types';

export const getPostIndex = async (): Promise<PostIndex> => {
  return await getEntry<PostIndex>('/post-page', {
    fields: ['title', 'description'],
    populate: {
      posts: {
        fields: ['title', 'slug', 'date', 'blurb', 'updatedAt'],
        populate: ['image', 'technologies', 'category'],
      },
    },
  });
};

export interface PostParams {
  slug: string;
}
export const getPost = async (
  params: PostParams,
): Promise<Wrapper<Post> | NotFound> => {
  try {
    const responseData = await getEntry<BaseData<Post>>(
      `/posts?filters[slug][$eq]=${params.slug}&populate=*`,
    );
    return {
      props: {
        post: responseData,
      },
    };
  } catch (err) {
    console.error(`on Post: ${err}`);
    return {
      notFound: true,
    };
  }
};
