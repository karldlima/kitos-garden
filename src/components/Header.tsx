"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import classNames from "classnames";

import { headerData } from "@/data/index";
import { HeroIcon, ButtonLink } from "@/components/index";

export const Header = (): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const router = useRouter();

  return (
    <header className="z-50 bg-primary border-b-2 sticky top-0">
      <nav className="flex items-center justify-between flex-wrap md:p-4">
        <Link
          className="flex items-center flex-shrink-0 text-white mr-6 md:mr-72"
          href="/"
        >
          <Image
            className="h-16 w-auto md:flex-1"
            src={"/assets/icons/k-icon.jpeg"}
            alt={"kitos garden icon"}
            width={500}
            height={500}
            priority="high"
          />
        </Link>
        <div className="block md:hidden">
          {/* TODO: use Button component */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center px-3 py-2 rounded text-primary"
          >
            <svg
              className={classNames(
                "fill-current h-5 w-5",
                mobileMenuOpen ? "hidden" : "block"
              )}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={classNames(
                "fill-current h-5 w-5",
                mobileMenuOpen ? "block" : "hidden"
              )}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={classNames(
            "absolute top-nav w-full opacity-90 block flex-grow pb-5 pl-5 bg-primary md:static md:p-0 md:flex md:items-center md:w-auto",
            mobileMenuOpen ? "block" : "hidden"
          )}
        >
          <div className="text-sm md:flex-grow space-x-0 md:space-x-10">
            {headerData?.map(({ link, uid }) => {
              return (
                <div
                  className="flex leading-6 text-primary items-center mt-6 md:mt-0 md:inline-block"
                  key={uid}
                >
                  <HeroIcon
                    icon={link.icon}
                    className="w-5 h-5 text-primaryBrand md:hidden"
                  />
                  <Link
                    key={uid}
                    href={link.url}
                    className={classNames(
                      router.pathname === link.url
                        ? "navigation__link--active"
                        : "",
                      "ml-3 navigation__link"
                    )}
                  >
                    {link.text}
                  </Link>
                </div>
              );
            })}
          </div>
          <ButtonLink url="/contact">Contact</ButtonLink>
        </div>
      </nav>
    </header>
  );
};
