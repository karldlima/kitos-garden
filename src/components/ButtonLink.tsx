import { AnchorHTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';

import { cn } from './utils';

const buttonLinkVariants = cva(
  'inline-flex rounded items-center text-white cursor-pointer',
  {
    variants: {
      variant: {
        primary:
          'w-fit px-4 py-2 bg-primaryBrand font-semibold mt-6 hover:bg-highlight md:mt-0',
        secondary:
          'justify-center px-5 py-3 mr-3 text-base font-medium text-center bg-secondary hover:bg-gray-800',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

export interface ButtonLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonLinkVariants> {
  href: string;
  ref?: React.Ref<HTMLAnchorElement>;
}

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ variant, children, ...props }, ref): JSX.Element => {
    return (
      <Link
        className={cn(buttonLinkVariants({ variant }))}
        ref={ref}
        {...props}
      >
        {children}
      </Link>
    );
  },
);
ButtonLink.displayName = 'ButtonLink';
