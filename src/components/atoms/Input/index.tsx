import { IconClear } from 'assets/svg';
import { cn } from 'lib/utils';
import React, { useMemo, useRef, useState } from 'react';
import { type InputProps } from './types';
import { defaultClearButtonClassName, inputVariant } from './variatns';

export default function Input(props: InputProps) {
  const {
    type = 'text',
    isRound = false,
    hasClear = true,
    className,
    onChange,
    onKeyDown,
    ...rest
  } = props;

  const [value, setValue] = useState(rest.defaultValue);
  const [hasError, setHasError] = useState(false);
  const valueRef = useRef(rest.value);
  const isControl = useMemo(() => typeof valueRef.current !== 'undefined', []);

  const currentValue = useMemo(
    () => (isControl ? rest.value : value),
    [isControl, rest.value, value],
  );

  const handleClear = () => {
    if (rest.disabled === true) return;

    setValue('');
    onChange?.({ target: { value: '' } } as any);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
    setValue(e.target.value);
    setHasError(false);
  };

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyDown?.(e);
    if (e.key === 'Escape') {
      handleClear();
    }
  };

  return (
    <div
      className={cn(inputVariant({ isRound, hasClear }), className)}
      data-exist={currentValue !== '' && currentValue !== undefined}
      data-invalid={hasError}
      data-disabled={rest.disabled}
    >
      <input
        type={type}
        value={currentValue}
        onInvalid={() => {
          setHasError(true);
        }}
        onKeyDown={handleKeydown}
        onChange={handleChange}
        {...rest}
      />
      {hasClear === true && (
        <button
          type="button"
          className={defaultClearButtonClassName}
          onClick={handleClear}
          tabIndex={currentValue !== '' && rest.disabled !== true ? 0 : -1}
        >
          <IconClear />
        </button>
      )}
    </div>
  );
}
