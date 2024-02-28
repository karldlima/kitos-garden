import type { ReactNode } from "react";
import classNames from "classnames";

export interface ButtonProps {
  action: React.MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  className?: string;
}

export const Button = ({
  action,
  children,
  className = undefined,
}: ButtonProps): JSX.Element => (
  <button
    type="button"
    className={classNames(
      className ||
        "font-medium rounded bg-gray-100 hover:bg-gray-200 px-4 py-2 flex w-fit ",
      " inline-flex items-center primary-button bg-primary mt-6 md:mt-0 "
    )}
    onClick={action}
  >
    {children}
  </button>
);
