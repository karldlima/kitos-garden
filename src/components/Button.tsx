import { forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from './utils';

const buttonVariants = cva('rounded py-2 items-center', {
  variants: {
    variant: {
      primary:
        'w-fit inline-flex cursor-pointer text-white bg-primaryBrand px-4 font-semibold mt-6 hover:bg-highlight md:mt-0',
      icon: 'flex px-3 text-primary',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  ref?: React.Ref<HTMLButtonElement>;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, children, ...props }, ref): JSX.Element => {
    return (
      <button className={cn(buttonVariants({ variant }))} ref={ref} {...props}>
        {children}
      </button>
    );
  },
);
Button.displayName = 'Button';
