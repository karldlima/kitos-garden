import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import classNames from "classnames";

import { footerData } from "@/data/footerData";

export const Footer = (): JSX.Element => {
  const router = useRouter();

  return (
    <footer className="bg-primary" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-4 md:px-8 md:pt-6">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="col-span-6 flex flex-col">
            <Link href="/">
              <Image
                className="h-24 w-auto md:flex-1"
                src={"/assets/icons/k-icon.jpeg"}
                alt={"kitos garden icon"}
                width={500}
                height={500}
                priority="high"
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
                  className="leading-6 text-primary items-center mt-6 md:mt-0 md:inline-block"
                  key={uid}
                >
                  <Link
                    key={uid}
                    href={link.url}
                    className={classNames(
                      router.pathname === link.url
                        ? "navigation__link--active"
                        : "",
                      "navigation__link"
                    )}
                  >
                    {link.text}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-3 my-auto flex justify-end pr-6">
            <a
              href="https://github.com/karldlima"
              target="_blank"
              rel="noopener"
              className="text-black dark:text-black hover:text-highlight ml-3"
            >
              <span className="sr-only">GitHub</span>
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/karldlima/"
              target="_blank"
              rel="noopener"
              className="text-black dark:text-black hover:text-highlight ml-3"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                fill="currentColor"
                enable-background="new 0 0 100 100"
                viewBox="0 0 100 100"
                className="h-6 w-6"
              >
                <g id="_x31_0.Linkedin">
                  <path d="m90 90v-29.3c0-14.4-3.1-25.4-19.9-25.4-8.1 0-13.5 4.4-15.7 8.6h-.2v-7.3h-15.9v53.4h16.6v-26.5c0-7 1.3-13.7 9.9-13.7 8.5 0 8.6 7.9 8.6 14.1v26h16.6z"></path>{" "}
                  <path d="m11.3 36.6h16.6v53.4h-16.6z"></path>{" "}
                  <path d="m19.6 10c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.7 9.6 9.7 9.6-4.4 9.6-9.7-4.3-9.6-9.6-9.6z"></path>
                </g>
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-4 border-t border-blue-500/30 pt-8 lg:mt-6 flex items-center justify-between self-end gap-y-5">
          <div
            className="leading-5"
            dangerouslySetInnerHTML={{ __html: "copyright" }}
          />
          <div
            className="leading-5"
            dangerouslySetInnerHTML={{ __html: "alt" }}
          />
        </div>
      </div>
    </footer>
  );
};
