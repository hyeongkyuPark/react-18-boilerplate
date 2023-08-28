import type React from 'react';
import { type CheckboxProps as UiCheckboxProps } from '@radix-ui/react-checkbox';
import { type VariantProps } from 'class-variance-authority';
import {
  type checkboxIndicatorVariant,
  type checkboxVariant,
} from './variants';

export type indicatorType = 'circle' | 'check';

export interface CheckboxProps
  extends UiCheckboxProps,
    React.RefAttributes<HTMLButtonElement>,
    VariantProps<typeof checkboxVariant>,
    VariantProps<typeof checkboxIndicatorVariant> {
  indicatorType?: indicatorType;
}
