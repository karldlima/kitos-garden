import { getPostIndex } from '@/content/helpers/index';
import { Title, DisplayCard } from '@/components/index';

// TODO: page props
export interface PageProps {
  postPageData: any;
}

export default function PostIndexPage({ postPageData }: PageProps) {
  const posts = postPageData?.data?.attributes?.posts?.data;
  const { title, description } = postPageData?.data?.attributes;
  return (
    <>
      <Title title={title} subtitle={description} />
      <div className="columns-1 w-8/12 gap-y-12 mx-auto md:columns-2 md:w-8/12 lg:columns-3 lg:w-8/12 xl:w-7/12">
        {/* TODO: postPageData mapping */}
        {/* @ts-ignore */}
        {posts?.map(({ attributes, id }) => (
          <div
            className="inline-block w-full mb-4 box-border p-1 max-w-sm"
            key={id}
          >
            <DisplayCard cardData={attributes} />
          </div>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps(): Promise<{ props: PageProps }> {
  // TODO: typing for posts data
  const postIndex: any = await getPostIndex();
  return {
    props: {
      postPageData: postIndex,
    },
  };
}
