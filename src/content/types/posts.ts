import { Attributes } from '.';

interface PostAttributes extends Attributes {
  date: string;
}

export interface Post {
  id: number;
  attributes: PostAttributes;
}
