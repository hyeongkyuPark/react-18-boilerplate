import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'lib/utils';
import React from 'react';

const atomVariants = cva('text-red3', {
  variants: {
    size: {
      sm: 'text-b4',
      md: 'text-d1',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export default function AtomTest(props: VariantProps<typeof atomVariants>) {
  const { size } = props;

  return <div className={cn(atomVariants({ size }))}>test</div>;
}
