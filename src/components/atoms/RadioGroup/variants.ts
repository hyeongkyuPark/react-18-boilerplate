import { cva } from 'class-variance-authority';
import { cn } from '@styles/lib';

export const defaultRadioGroupClassName = cn('flex flex-wrap');

export const defaultRadioGroupItemClassName = cn(
  // default
  'flex items-center border border-gray9 data-[state=checked]:border-primary3 rounded-full transition-colors',
  // label
  '[&~label]:cursor-pointer',
  // indicator
  '[&>.indicator]:flex [&>.indicator]:items-center [&>.indicator]:justify-center [&>.indicator]:w-full [&>.indicator]:h-full',
  // indicator::after
  '[&>.indicator::after]:w-[11px] [&>.indicator::after]:h-[11px] [&>.indicator::after]:rounded-full [&>.indicator::after]:content-[""] [&>.indicator::after]:bg-primary3 transition-colors',
);

export const radioGroupVariant = cva(defaultRadioGroupClassName, {
  variants: {
    direction: {
      row: 'flex-row',
      column: 'flex-col',
    },
    size: {
      24: cn(
        // default
        'gap-[20px]',
      ),
      20: cn(
        // default
        'gap-[12px]',
      ),
    },
  },
  defaultVariants: {
    direction: 'row',
    size: 24,
  },
});

export const radioGroupItemVariant = cva(defaultRadioGroupItemClassName, {
  variants: {
    size: {
      24: cn(
        // default
        'w-[24px] h-[24px]',
        // lael
        '[&~label]:text-b4',
      ),
      20: cn(
        // default
        'w-[20px] h-[20px]',
        // label
        '[&~label]:text-b5',
      ),
    },
    disabled: {
      true: 'cursor-not-allowed',
      false: '',
    },
  },
  defaultVariants: {
    size: 24,
    disabled: false,
  },
});
