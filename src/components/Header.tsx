'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { headerData } from '@/data';
import { HeroIcon, ButtonLink, cn, Button } from '@/components';

export const Header = (): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const router = useRouter();

  return (
    <header className="z-50 bg-primary border-b-2 sticky top-0">
      <nav
        role="navigation"
        aria-label="Main Navigation"
        className="flex items-center justify-between flex-wrap md:p-4"
      >
        <Link
          className="flex items-center flex-shrink-0 text-white mr-6 md:mr-72"
          href="/"
        >
          <Image
            aria-hidden="true"
            className="h-16 w-auto md:flex-1"
            src={'/assets/icons/k-icon.jpeg'}
            alt={'kitos garden icon'}
            width={500}
            height={500}
            priority={true}
          />
        </Link>
        <div className="block md:hidden">
          <Button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            variant="icon"
          >
            <svg
              aria-label="Expand"
              className={cn(
                'fill-current h-5 w-5',
                mobileMenuOpen ? 'hidden' : 'block',
              )}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              aria-label="Close"
              className={cn(
                'fill-current h-5 w-5',
                mobileMenuOpen ? 'block' : 'hidden',
              )}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </Button>
        </div>
        <div
          className={cn(
            'absolute top-nav w-full opacity-90 block flex-grow pb-5 pl-5 bg-primary md:static md:p-0 md:flex md:items-center md:w-auto',
            mobileMenuOpen ? 'block' : 'hidden',
          )}
        >
          <div
            role="menubar"
            aria-label="Main Navigation"
            className="text-sm md:flex-grow space-x-0 md:space-x-10"
          >
            {headerData?.map(({ link, uid }) => {
              return (
                <div
                  className="flex leading-6 text-primary items-center mt-6 md:mt-0 md:inline-block"
                  key={uid}
                  role="menuitem"
                >
                  {link?.icon && (
                    <>
                      <span className="sr-only">{link.text}</span>
                      <HeroIcon
                        icon={link.icon}
                        className="w-5 h-5 text-primaryBrand md:hidden"
                      />
                    </>
                  )}
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    key={uid}
                    href={link.url}
                    className={cn(
                      'ml-3 font-avenir antialiased text-lg hover:text-highlight',
                      {
                        'text-highlight': router.pathname === link.url,
                      },
                    )}
                  >
                    {link.text}
                  </Link>
                </div>
              );
            })}
          </div>
          <ButtonLink href="/contact">Contact</ButtonLink>
        </div>
      </nav>
    </header>
  );
};
Header.displayName = 'Header';
