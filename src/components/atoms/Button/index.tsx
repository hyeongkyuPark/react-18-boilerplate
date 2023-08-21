import { cn } from 'lib/utils';
import React from 'react';
import { buttonVariant, type ButtonProps } from './teyps';

export default function Button(props: ButtonProps) {
  const {
    isFull,
    isRound,
    buttonColor,
    size,
    className,
    children,
    type = 'button',
    PrefixIcon,
    SuffixIcon,
    ...rest
  } = props;

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      {...rest}
      className={cn(
        buttonVariant({ isRound, isFull, buttonColor, size }),
        className,
      )}
    >
      {PrefixIcon != null && (
        <span className="icon">
          <PrefixIcon />
        </span>
      )}
      {children}
      {SuffixIcon != null && (
        <span className="icon">
          <SuffixIcon />
        </span>
      )}
    </button>
  );
}
