import { type RadioGroupProps as RadioGroupUiProps } from '@radix-ui/react-radio-group';
import { type VariantProps } from 'class-variance-authority';
import { type radioGroupVariant, type radioGroupItemVariant } from './variants';

export interface RadioGroupOption {
  label: string;
  value: string;
}

export interface RadioGroupProps
  extends RadioGroupUiProps,
    VariantProps<typeof radioGroupItemVariant>,
    VariantProps<typeof radioGroupVariant> {
  options: RadioGroupOption[];
  disabled?: boolean;
}
