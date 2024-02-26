import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import headerData from "@/data/headerData";

export const Header = (): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b-2 sticky top-0">
      <nav className="flex items-center justify-between flex-wrap p-6">
        <Link
          className="flex items-center flex-shrink-0 text-white mr-6 md:mr-72"
          href="/"
        >
          <Image
            className="h-12 w-auto md:flex-1"
            src={"/assets/icons/k-icon.jpeg"}
            alt={"kitos garden icon"}
            width={500}
            height={500}
          />
        </Link>
        <div className="block md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-3 w-3 ${
                mobileMenuOpen ? "hidden" : "block"
              }`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-3 w-3 ${
                mobileMenuOpen ? "block" : "hidden"
              }`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow pl-2.5 md:pl-0 md:flex md:items-center md:w-auto ${
            mobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-sm md:flex-grow space-x-0 md:space-x-10">
            {headerData?.map(({ link, uid }) => {
              return (
                <Link
                  key={uid}
                  href={link.url}
                  className="block leading-6 text-gray-900 navigation-link mt-6 md:mt-0 md:inline-block"
                >
                  {link.text}
                </Link>
              );
            })}
          </div>
          <div>
            <button className="inline-flex items-center primary-button mt-6 md:mt-0">
              Contact
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
