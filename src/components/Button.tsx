import type { ReactNode } from "react";
import classNames from "classnames";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  action?: React.MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  className?: string;
}

// TODO: add primary/secondary using cva
export const Button = ({
  action,
  children,
  className = undefined,
  ...props
}: ButtonProps): JSX.Element => (
  <button
    type="button"
    className={classNames(
      className ||
        "rounded w-fit inline-flex items-center cursor-pointer text-white bg-primaryBrand hover:bg-highlight px-4 py-2 font-semibold mt-6 md:mt-0"
    )}
    onClick={action}
    {...props}
  >
    {children}
  </button>
);
