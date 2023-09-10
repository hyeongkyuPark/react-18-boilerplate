import { cva } from 'class-variance-authority';
import { cn } from '@styles/lib';

export const defaultCheckboxClassName = cn(
  'group',
  // default
  'flex items-center justify-center text-transparent rounded-[6px] border border-gray9 transition-colors',
  // checked(check type)
  'data-[state=checked]:border-primary3 data-[state=checked]:bg-primary3 data-[state=checked]:text-gray13',
  // checked(circle type)
  'data-[type=circle]:data-[state=checked]:text-primary3 data-[type=circle]:data-[state=checked]:bg-gray13',
  // disabled
  'disabled:bg-gray10 disabled:cursor-not-allowed disabled:data-[state=checked]:text-gray8 disabled:data-[state=checked]:border-gray9 disabled:data-[state=checked]:bg-gray10',
);
export const defaultCheckboxIndicatorClassName = cn('flex cursor-pointer');
export const defaultCheckboxLabelClassName = cn('');

export const checkboxVariant = cva(defaultCheckboxClassName, {
  variants: {
    size: {
      24: 'w-[24px] h-[24px]',
      20: 'w-[20px] h-[20px]',
    },
    isRound: {
      true: '!rounded-full',
      false: '',
    },
    onlyIcon: {
      true: 'border-none data-[state=indeterminate]:text-gray8 data-[state=checked]:text-primary3 data-[state=checked]:bg-transparent disabled:!bg-transparent disabled:!text-gray10',
      false: '',
    },
  },
  defaultVariants: {
    isRound: false,
    size: 24,
    onlyIcon: false,
  },
});

export const checkboxIndicatorVariant = cva(defaultCheckboxIndicatorClassName, {
  variants: {
    size: {
      24: 'w-[14px] h-[10px] group-data-[type=circle]:w-[12px] group-data-[type=circle]:h-[12px]',
      20: 'w-[10px] h-[8px]',
    },
  },
  defaultVariants: {
    size: 24,
  },
});

export const checkboxLabelVariant = cva(defaultCheckboxIndicatorClassName, {
  variants: {
    size: {
      24: 'text-b4',
      20: 'text-b5',
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
