import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import { footerData } from '@/data/footerData';

export const Footer = (): JSX.Element => {
  const router = useRouter();

  return (
    <footer
      role="contentinfo"
      className="bg-primary"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-4 md:px-8 md:pt-6">
        <div className="grid lg:grid-cols-12 gap-4">
          <div className="col-span-6 flex items-center">
            <Link className="w-fit" href="/">
              <Image
                aria-hidden="true"
                className="h-24 w-auto md:flex-1"
                src={'/assets/icons/k-icon.jpeg'}
                alt={'kitos garden icon'}
                width={500}
                height={500}
                priority={true}
              />
            </Link>
            <h4 className="pl-6 w-4/5">
              Building reliable customer facing solutions for products and
              brands
            </h4>
          </div>
          <div className="my-auto col-span-3 pl-6">
            <div className="grid gap-1 md:grid-cols-2">
              {footerData.map(({ uid, link }) => (
                <div
                  className="leading-6 text-primary items-center mt-3 md:mt-0 md:inline-block"
                  key={uid}
                >
                  <Link
                    key={uid}
                    href={link.url}
                    className={classNames(
                      router.pathname === link.url
                        ? 'navigation__link--active'
                        : '',
                      'navigation__link',
                    )}
                  >
                    {link.text}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-3 my-auto flex justify-end pr-6">
            <Link
              href="https://github.com/karldlima"
              target="_blank"
              rel="noopener"
              className="text-black dark:text-black hover:text-highlight ml-3"
            >
              <span className="sr-only">GitHub</span>
              <Image
                className="h-6"
                src={'/assets/icons/github.svg'}
                alt={'github icon'}
                width={25}
                height={50}
                priority={true}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/karldlima/"
              target="_blank"
              rel="noopener"
              className="text-black dark:text-black hover:text-highlight ml-3"
            >
              <span className="sr-only">LinkedIn</span>
              <Image
                className="h-6"
                src={'/assets/icons/linkedin.svg'}
                alt={'linkedin icon'}
                width={25}
                height={50}
                priority={true}
              />
            </Link>
          </div>
        </div>
        <div className="mt-4 border-t border-blue-500/30 pt-4 lg:mt-6 flex items-center justify-between gap-y-5">
          <div
            className="leading-5 text-primary"
            dangerouslySetInnerHTML={{
              __html: "© 2024 Karl's Garden.",
            }}
          />
          <div
            className="leading-5 text-primary"
            dangerouslySetInnerHTML={{ __html: 'Melbourne based' }}
          />
        </div>
      </div>
    </footer>
  );
};
Footer.displayName = 'Footer';
