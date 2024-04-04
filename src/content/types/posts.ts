import { Attributes, BaseData, IndexAttributes } from '.';

interface PostIndexAttributes extends IndexAttributes {
  posts: BaseData<Post>;
}

export interface PostIndex {
  data: {
    id: number;
    attributes: PostIndexAttributes;
  };
}

interface PostAttributes extends Attributes {
  date: string;
}

export interface Post {
  id: number;
  attributes: PostAttributes;
}
