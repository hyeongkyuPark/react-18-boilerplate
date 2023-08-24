import { cva } from 'class-variance-authority';
import { cn } from 'lib/utils';

export const defaultClearButtonClassName = cn(
  // default
  'flex flex-shrink-0 w-[24px] h-[24px] cursor-pointer group-data-[disabled=true]:cursor-not-allowed',
  // animation
  'opacity-0 group-data-[exist=true]:opacity-100 transition-all',
);
export const defaultInputClassName = cn(
  // default
  'group flex items-center gap-[10px] pl-[16px] py-[12px] rounded-md border border-gray9 text-b4',
  // 내부 input 스타일 제거
  '[&>input]:border-none [&>input]:outline-none [&>input]:flex-1 [&>input]:placeholder-gray7',
  // value !== ''
  'data-[exist=true]:border-gray2',
  // focused
  'data-[exist=true]:focus-within:border-primary3 focus-within:border-primary3 focus-within:border-[2px] focus-within:-m-[1px] focus-within:shadow-[0px_0px_0px_3px] focus-within:shadow-primary10',
  // disabled
  'data-[disabled=true]:bg-gray11 data-[disabled=true]:border-gray11 [&>input:disabled]:text-gray8 [&>input:disabled]:placeholder-gray8',
  // error
  'data-[invalid=true]:focus-within:border-red3 data-[invalid=true]:focus-within:shadow-red7 data-[invalid=true]:border-red3',
);

export const inputVariant = cva(defaultInputClassName, {
  variants: {
    hasClear: {
      true: 'pr-[13px]',
      false: 'pr-[16px]',
    },
    isRound: {
      true: 'rounded-full',
      false: '',
    },
  },
  defaultVariants: {
    hasClear: true,
    isRound: false,
  },
});
