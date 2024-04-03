import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { parseISO, format } from 'date-fns';

import { ButtonLink } from './ButtonLink';

interface DisplayCard {
  title: string;
  image: any;
  date?: string;
  blurb?: string;
  slug?: string;
  technologies?: any; // TODO
}

interface DisplayCardProps {
  cardData: DisplayCard;
  keyWords?: string;
}

export const DisplayCard = ({
  cardData,
  keyWords,
}: DisplayCardProps): JSX.Element => {
  const router = useRouter();

  const { title, image, date, blurb, slug } = cardData ?? {};
  const newPath = `${router.asPath}/${slug}`;
  return (
    <div className="max-w-sm max-h-sm md:max-h-[624px] bg-primary rounded-lg shadow">
      <Link href={newPath}>
        <Image
          className="rounded-t-lg w-96 h-56 transition-all duration-[0.8s] ease-[ease] hover:opacity-75 hover:bg-black"
          src={image?.data?.attributes?.formats?.small?.url}
          alt={`display image - ${title}`}
          width={360}
          height={240}
        />
      </Link>
      <div className="p-3 md:p-5">
        {!!date && (
          <p className="text-xs text-primary">
            {format(parseISO(date), 'MMM d, yyyy')}
          </p>
        )}
        <Link href={newPath}>
          <h2 className="text-3xl mb-2 font-bold tracking-tight text-primary md:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="text-xl mb-3 text-primary md:text-base">{blurb}</p>
        {!!keyWords && <p className="mb-3 text-primaryBrand">{keyWords}</p>}
        <ButtonLink variant="secondary" href={newPath}>
          Read more
          <span className="sr-only">about {title}</span>
        </ButtonLink>
      </div>
    </div>
  );
};
DisplayCard.displayName = 'DisplayCard';
