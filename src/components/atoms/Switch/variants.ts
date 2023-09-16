import { cva } from 'class-variance-authority';
import { cn } from '@styles/lib';

export const defaultSwitchClassName = cn(
  // default
  'group flex items-center bg-gray10 rounded-full p-[2px] data-[state=checked]:bg-primary3 relative',
  // icons
  '[&>.switch-icons]:flex [&>.switch-icons]:absolute [&>.switch-icons]:top-0 [&>.switch-icons]:left-0 [&>.switch-icons]:right-0 [&>.switch-icons]:bottom-0 [&>.switch-icons]:w-full',
  // icon
  '[&>.switch-icons>span]:flex [&>.switch-icons>span]:flex-shirink-0 [&>.switch-icons>span]:items-center [&>.switch-icons>span]:justify-center [&>.switch-icons>span]:w-[50%]',
);
export const defaultSwitchTriggerClassName = cn(
  // default
  'relative bg-gray13 rounded-full transition-transform',
);

export const switchVariant = cva(defaultSwitchClassName, {
  variants: {
    activeColor: {
      primary1: 'data-[state=checked]:bg-primary1',
      primary2: 'data-[state=checked]:bg-primary2',
      primary3: 'data-[state=checked]:bg-primary3',
      primary4: 'data-[state=checked]:bg-primary4',
      primary5: 'data-[state=checked]:bg-primary5',
      primary6: 'data-[state=checked]:bg-primary6',
      primary7: 'data-[state=checked]:bg-primary7',
      primary8: 'data-[state=checked]:bg-primary8',
      primary9: 'data-[state=checked]:bg-primary9',
      primary10: 'data-[state=checked]:bg-primary10',
      secondary1: 'data-[state=checked]:bg-secondary1',
      secondary2: 'data-[state=checked]:bg-secondary2',
      secondary3: 'data-[state=checked]:bg-secondary3',
      secondary4: 'data-[state=checked]:bg-secondary4',
      secondary5: 'data-[state=checked]:bg-secondary5',
      secondary6: 'data-[state=checked]:bg-secondary6',
      secondary7: 'data-[state=checked]:bg-secondary7',
      secondary8: 'data-[state=checked]:bg-secondary8',
      secondary9: 'data-[state=checked]:bg-secondary9',
      secondarySub1: 'data-[state=checked]:bg-secondarySub1',
      secondarySub2: 'data-[state=checked]:bg-secondarySub2',
      secondarySub3: 'data-[state=checked]:bg-secondarySub3',
      secondarySub4: 'data-[state=checked]:bg-secondarySub4',
      secondarySub5: 'data-[state=checked]:bg-secondarySub5',
      gray1: 'data-[state=checked]:bg-gray1',
      gray2: 'data-[state=checked]:bg-gray2',
      gray3: 'data-[state=checked]:bg-gray3',
      gray4: 'data-[state=checked]:bg-gray4',
      gray5: 'data-[state=checked]:bg-gray5',
      gray6: 'data-[state=checked]:bg-gray6',
      gray7: 'data-[state=checked]:bg-gray7',
      gray8: 'data-[state=checked]:bg-gray8',
      gray9: 'data-[state=checked]:bg-gray9',
      gray10: 'data-[state=checked]:bg-gray10',
      gray11: 'data-[state=checked]:bg-gray11',
      gray12: 'data-[state=checked]:bg-gray12',
      gray13: 'data-[state=checked]:bg-gray13',
      red1: 'data-[state=checked]:bg-red1',
      red2: 'data-[state=checked]:bg-red2',
      red3: 'data-[state=checked]:bg-red3',
      red4: 'data-[state=checked]:bg-red4',
      red5: 'data-[state=checked]:bg-red5',
      red6: 'data-[state=checked]:bg-red6',
      red7: 'data-[state=checked]:bg-red7',
      orange1: 'data-[state=checked]:bg-orange1',
      orange2: 'data-[state=checked]:bg-orange2',
      orange3: 'data-[state=checked]:bg-orange3',
      orange4: 'data-[state=checked]:bg-orange4',
      orange5: 'data-[state=checked]:bg-orange5',
      orange6: 'data-[state=checked]:bg-orange6',
      orange7: 'data-[state=checked]:bg-orange7',
      yellow1: 'data-[state=checked]:bg-yellow1',
      yellow2: 'data-[state=checked]:bg-yellow2',
      yellow3: 'data-[state=checked]:bg-yellow3',
      yellow4: 'data-[state=checked]:bg-yellow4',
      yellow5: 'data-[state=checked]:bg-yellow5',
      yellow6: 'data-[state=checked]:bg-yellow6',
      yellow7: 'data-[state=checked]:bg-yellow7',
      green1: 'data-[state=checked]:bg-green1',
      green2: 'data-[state=checked]:bg-green2',
      green3: 'data-[state=checked]:bg-green3',
      green4: 'data-[state=checked]:bg-green4',
      green5: 'data-[state=checked]:bg-green5',
      green6: 'data-[state=checked]:bg-green6',
      green7: 'data-[state=checked]:bg-green7',
      sky1: 'data-[state=checked]:bg-sky1',
      sky2: 'data-[state=checked]:bg-sky2',
      sky3: 'data-[state=checked]:bg-sky3',
      sky4: 'data-[state=checked]:bg-sky4',
      sky5: 'data-[state=checked]:bg-sky5',
      sky6: 'data-[state=checked]:bg-sky6',
      sky7: 'data-[state=checked]:bg-sky7',
      teal1: 'data-[state=checked]:bg-teal1',
      teal2: 'data-[state=checked]:bg-teal2',
      teal3: 'data-[state=checked]:bg-teal3',
      teal4: 'data-[state=checked]:bg-teal4',
      teal5: 'data-[state=checked]:bg-teal5',
      teal6: 'data-[state=checked]:bg-teal6',
      blue1: 'data-[state=checked]:bg-blue1',
      blue2: 'data-[state=checked]:bg-blue2',
      blue3: 'data-[state=checked]:bg-blue3',
      blue4: 'data-[state=checked]:bg-blue4',
      blue5: 'data-[state=checked]:bg-blue5',
      blue6: 'data-[state=checked]:bg-blue6',
      blue7: 'data-[state=checked]:bg-blue7',
      purple1: 'data-[state=checked]:bg-purple1',
      purple2: 'data-[state=checked]:bg-purple2',
      purple3: 'data-[state=checked]:bg-purple3',
      purple4: 'data-[state=checked]:bg-purple4',
      purple5: 'data-[state=checked]:bg-purple5',
      purple6: 'data-[state=checked]:bg-purple6',
      purple7: 'data-[state=checked]:bg-purple7',
      pink1: 'data-[state=checked]:bg-pink1',
      pink2: 'data-[state=checked]:bg-pink2',
      pink3: 'data-[state=checked]:bg-pink3',
      pink4: 'data-[state=checked]:bg-pink4',
      pink5: 'data-[state=checked]:bg-pink5',
      pink6: 'data-[state=checked]:bg-pink6',
      pink7: 'data-[state=checked]:bg-pink7',
    },
    size: {
      40: cn(
        // default
        'w-[60px] h-[34px]',
        // icon
        '[&>.switch-icons>span>svg]:w-[20px] [&>.switch-icons>span>svg]:h-[20px]',
      ),
      30: cn(
        // default
        'w-[50px] h-[30px]',
        // icon
        '[&>.switch-icons>span>svg]:w-[14px] [&>.switch-icons>span>svg]:h-[14px]',
      ),
      24: cn(
        // default
        'w-[40px] h-[24px]',
        // icon
        '[&>.switch-icons>span>svg]:w-[12px] [&>.switch-icons>span>svg]:h-[12px]',
      ),
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
      false: '',
    },
  },
  defaultVariants: {
    size: 30,
    activeColor: 'primary3',
    disabled: false,
  },
});

export const switchTriggerVariant = cva(defaultSwitchTriggerClassName, {
  variants: {
    size: {
      40: cn(
        // default
        'w-[30px] h-[30px]',
        // checked
        'group-data-[state=checked]:translate-x-[26px]',
      ),
      30: cn(
        // default
        'w-[26px] h-[26px]',
        // checked
        'group-data-[state=checked]:translate-x-[20px]',
      ),
      24: cn(
        // default
        'w-[20px] h-[20px]',
        // checked
        'group-data-[state=checked]:translate-x-[16px]',
      ),
    },
  },
  defaultVariants: {
    size: 30,
  },
});
