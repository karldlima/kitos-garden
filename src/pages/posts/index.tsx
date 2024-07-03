import Head from 'next/head';

import { getPostIndex } from '@/content/helpers';
import { getTechnologies } from '@/content/utils';
import { Title, DisplayCard } from '@/components';
import { NotFound, PostIndex } from '@/content/types';

export interface PageProps {
  props: {
    postPageData: PostIndex;
  };
}

export default function PostIndexPage({ postPageData }: PageProps['props']) {
  const posts = postPageData?.data?.attributes?.posts?.data;
  const { title, description } = postPageData?.data?.attributes ?? {};
  return (
    <>
      <Head>
        <title>Posts</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Software Posts" />
      </Head>
      <Title title={title} subtitle={description} />
      <div className="columns-1 w-8/12 gap-y-12 mx-auto md:columns-2 md:w-8/12 lg:columns-3 lg:w-8/12 xl:w-7/12">
        {posts?.map(({ attributes, id }) => (
          <div
            className="inline-block w-full mb-4 box-border p-1 max-w-sm"
            key={id}
          >
            <DisplayCard
              cardData={attributes}
              keyWords={getTechnologies(attributes?.technologies?.data).join(
                ' • ',
              )}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps(): Promise<PageProps | NotFound> {
  try {
    const postIndex: PostIndex = await getPostIndex();
    return {
      props: {
        postPageData: postIndex,
      },
    };
  } catch (err) {
    console.error(`on Posts index: ${err}`);
    return {
      notFound: true,
    };
  }
}
