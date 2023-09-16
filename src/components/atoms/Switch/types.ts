import { type VariantProps } from 'class-variance-authority';
import type React from 'react';
import { type switchVariant } from './variants';

export interface SwitchProps extends VariantProps<typeof switchVariant> {
  defaultValue?: boolean;
  value?: boolean;
  onChange?: (value: boolean) => void;
  CheckIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  UncheckIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  disabled?: boolean;
}
