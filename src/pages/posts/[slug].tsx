import Image from 'next/image';
import { format } from 'date-fns';
import Markdown from 'react-markdown';

import { getPostIndex, getPost, PostParams } from '@/content/helpers/index';
import { getTechnologies } from '@/content/utils/index';

export interface PageProps {
  post: any;
}

export default function SinglePostPage({ post }: PageProps) {
  const { title, category, description, image, date, technologies } =
    post?.data?.[0]?.attributes ?? {};
  const techRefined = getTechnologies(technologies?.data).join(' • ');
  const imageUrl =
    image?.data?.attributes?.formats?.large?.url ??
    image?.data?.attributes?.formats?.medium?.url;
  return (
    <>
      <section className="text-center my-8 md:my-16">
        <h3 className="mb-3 text-primaryBrand">
          {category?.data?.attributes?.name}
        </h3>
        <h1 className="mb-3 max-w-80 mx-auto">{title}</h1>
      </section>
      <section className="flex flex-col mx-auto w-8/12 md:w-6/12 min-h-screen">
        <Image
          className="w-[564px] h-fit self-center mb-8"
          src={imageUrl}
          alt={title}
          width={800}
          height={800}
        />
        <p className="mb-10">
          <Markdown>{description}</Markdown>
        </p>
        <p className="text-primary mb-4">
          {format(new Date(date), 'MMMM d, yyyy')}
        </p>
        <p className="text-xl text-primaryBrand">{techRefined}</p>
      </section>
    </>
  );
}

export async function getStaticPaths() {
  const posts: any = await getPostIndex();

  const paths = posts?.data?.attributes?.posts?.data?.map(
    (post: { attributes: { slug: string } }) => ({
      params: { slug: post.attributes.slug },
    }),
  );

  return { paths, fallback: false };
}

export async function getStaticProps({
  params,
}: {
  params: PostParams;
}): Promise<PageProps> {
  return await getPost(params);
}
