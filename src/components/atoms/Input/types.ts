import { type VariantProps } from 'class-variance-authority';
import type React from 'react';
import { type inputVariant } from './variatns';

export interface InputProps
  extends React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    VariantProps<typeof inputVariant> {}
