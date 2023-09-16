import React, { useMemo, useState } from 'react';
import { cn } from '@styles/lib';
import { type SwitchProps } from './types';
import { switchTriggerVariant, switchVariant } from './variants';

export default function Switch(props: SwitchProps) {
  const {
    size,
    value: valueProps,
    defaultValue,
    onChange,
    CheckIcon,
    UncheckIcon,
    activeColor,
    disabled,
  } = props;

  const [value, setValue] = useState(
    defaultValue === undefined ? false : defaultValue,
  );

  const isControl = useMemo(
    () => typeof valueProps !== 'undefined',
    [valueProps],
  );
  const currentValue = useMemo(
    () => (isControl ? valueProps === true : value),
    [isControl, valueProps, value],
  );

  const handleChange = () => {
    setValue(!currentValue);
    onChange?.(!currentValue);
  };

  return (
    <button
      type="button"
      data-state={currentValue ? 'checked' : 'unchecked'}
      className={cn(switchVariant({ size, activeColor, disabled }))}
      disabled={disabled}
      onClick={handleChange}
    >
      <div className="switch-icons">
        <span>{CheckIcon !== undefined && <CheckIcon />}</span>
        <span>{UncheckIcon !== undefined && <UncheckIcon />}</span>
      </div>
      <div className={cn(switchTriggerVariant({ size }))} />
    </button>
  );
}
