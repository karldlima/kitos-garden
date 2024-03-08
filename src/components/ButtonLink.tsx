import type { ReactNode } from "react";
import NextLink from "next/link";
import classNames from "classnames";

interface LinkProps {
  children: ReactNode;
  url: string;
  blank?: boolean;
  active?: boolean;
  className?: string;
}

export const ButtonLink = ({
  children,
  url,
  blank = false,
  active = false,
  className = undefined,
}: LinkProps): JSX.Element => (
  <NextLink
    className={classNames(
      className ||
        "rounded w-fit inline-flex items-center cursor-pointer text-white bg-primaryBrand hover:bg-highlight px-4 py-2 font-semibold mt-6 md:mt-0 "
    )}
    href={url}
    target={blank ? "_blank" : "_self"}
  >
    {children}
  </NextLink>
);
ButtonLink.displayName = "ButtonLink";
