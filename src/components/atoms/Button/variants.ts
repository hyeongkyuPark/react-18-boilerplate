import { cva } from 'class-variance-authority';
import { cn } from '@styles/lib';

export const defaultButtonClassName =
  'w-fit rounded-md flex items-center justify-center gap-[4px]';

export const buttonColorSet = {
  primary: cn(
    // defaul
    'text-gray13 bg-primary3 border border-primary3',
    // hover
    'hover:bg-primary2 hover:border-primary2',
    // 모바일 hover 제거
    'sm:hover:text-gray13 sm:hover:bg-primary3 sm:hover:border-primary3',
    // press
    'active:bg-primary1 active:border-primary1',
    // disabled
    'disabled:text-gray8 disabled:bg-gray12 disabled:border-gray12 disabled:cursor-not-allowed',
  ),
  primaryGhost: cn(
    // defaul
    'bg-transparent text-primary3 border border-primary3',
    // hover
    'hover:text-primary2 hover:border-primary2',
    // 모바일 hover 제거
    'sm:hover:bg-transparent sm:hover:text-primary3 sm:hover:border sm:hover:border-primary3',
    // press
    'active:text-primary1 active:border-primary1',
    // disabled
    'disabled:text-gray8 disabled:border-gray10',
  ),
  lightPrimary: cn(
    // defaul
    'text-primary3 bg-primary9 border border-primary9',
    // hover
    'hover:text-primary2 hover:bg-primary8 hover:border-primary8',
    // 모바일 hover 제거
    'sm:hover:text-primary3 sm:hover:bg-primary9 sm:hover:border-primary9',
    // press
    'active:text-primary1 active:bg-primary7 active:border-primary7',
    // disabled
    'disabled:text-gray8 disabled:bg-gray12 disabled:border-gray12 disabled:cursor-not-allowed',
  ),
  gray: cn(
    // defaul
    'text-gray2 bg-gray11 border border-gray11',
    // hover
    'hover:bg-gray10 hover:border-gray10',
    // 모바일 hover 제거
    'sm:hover:text-gray2 sm:hover:bg-gray11 sm:hover:border-gray11',
    // press
    'active:bg-gray9 active:border-gray9',
    // disabled
    'disabled:text-gray8 disabled:bg-gray12 disabled:border-gray12 disabled:cursor-not-allowed',
  ),
  grayGhost: cn(
    // defaul
    'bg-transparent text-gray2 border border-gray9',
    // hover
    'hover:border-gray7',
    // 모바일 hover 제거
    'sm:hover:bg-transparent sm:hover:border sm:hover:border-gray9',
    // press
    'active:border-gray5',
    // disabled
    'disabled:text-gray8 disabled:border-gray10 disabled:cursor-not-allowed',
  ),
  plane: cn(
    // defaul
    'text-gray2 bg-transparent border border-transparent',
    // hover
    'hover:bg-gray11 hover:border-gray11',
    // 모바일 hover 제거
    'sm:hover:bg-transparent sm:hover:border-transparent',
    // press
    'active:bg-gray9 active:border-gray9',
    // disabled
    'disabled:text-gray8 disabled:bg-transparent disabled:border-transparent disabled:cursor-not-allowed',
  ),
  planeGhost: cn(
    // defaul
    'bg-gray13 bg-opacity-0 text-gray13 border border-gray13',
    // hover
    'hover:bg-opacity-5',
    // 모바일 hover 제거
    'sm:hover:bg-opacity-0',
    // press
    'active:bg-opacity-10',
    // disabled
    'disabled:text-gray7 disabled:bg-transparent disabled:border-transparent disabled:cursor-not-allowed',
  ),
};

export const buttonVariant = cva(defaultButtonClassName, {
  variants: {
    size: {
      56: 'px-[28px] py-[16px] text-button1 [&>.icon]:w-[24px] [&>.icon]:h-[24px]',
      48: 'px-[24px] py-[14px] text-button2 [&>.icon]:w-[20px] [&>.icon]:h-[20px]',
      40: 'px-[20px] py-[11px] text-button2 [&>.icon]:w-[18px] [&>.icon]:h-[18px]',
      32: 'px-[16px] py-[8px] text-button3 [&>.icon]:w-[16px] [&>.icon]:h-[16px]',
      28: 'px-[12px] py-[7px] text-button4 [&>.icon]:w-[14px] [&>.icon]:h-[14px]',
    },
    buttonColor: {
      ...buttonColorSet,
    },
    isRound: {
      true: 'rounded-full',
      false: '',
    },
    isFull: {
      true: 'w-full',
      false: '',
    },
  },
  defaultVariants: {
    buttonColor: 'primary',
    isRound: false,
    isFull: false,
    size: 40,
  },
});
