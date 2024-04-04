export interface IndexAttributes {
  description: string;
  title: string;
}

export interface ImageData {
  id: number;
  attributes: {
    name: string;
    alternativeText?: string;
    caption?: string;
    width: number;
    height: number;
    formats: {
      large: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path?: string;
        size: number;
        width: number;
        height: number;
        provider_metadata: {
          public_id: string;
          resource_type: string;
        };
      };
      small: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path?: string;
        size: number;
        width: number;
        height: number;
        provider_metadata: {
          public_id: string;
          resource_type: string;
        };
      };
      medium: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path?: string;
        size: number;
        width: number;
        height: number;
        provider_metadata: {
          public_id: string;
          resource_type: string;
        };
      };
      thumbnail: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path?: string;
        size: number;
        width: number;
        height: number;
        provider_metadata: {
          public_id: string;
          resource_type: string;
        };
      };
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: string;
    provider: string;
    provider_metadata: {
      public_id: string;
      resource_type: string;
    };
    createdAt: string;
    updatedAt: string;
  };
}

export interface CategoryData {
  id: number;
  attributes: {
    name: string;
    value: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface TechnologyData {
  id: number;
  attributes: {
    name: string;
    value: string;
    slug: string;
    description: string;
    Title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface Attributes {
  title: string;
  slug: string;
  description: string;
  blurb: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  category: {
    data: CategoryData;
  };
  technologies: {
    data: TechnologyData[];
  };
  image: { data: ImageData };
}

export interface BaseData<T> {
  data: Array<T>;
}

export interface Wrapper<T> {
  props: { [key: string]: BaseData<T> };
}

export * from './posts';
export * from './projects';
