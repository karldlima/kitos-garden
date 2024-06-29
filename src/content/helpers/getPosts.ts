import { getEntry } from './provider';
import { BaseData, Post, PostIndex, Wrapper } from '../types';

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
export const getPost = async (params: PostParams): Promise<Wrapper<Post>> => {
  const responseData = await getEntry<BaseData<Post>>(
    `/posts?filters[slug][$eq]=${params.slug}&populate=*`,
  );
  return {
    props: {
      post: responseData,
    },
  };
};
