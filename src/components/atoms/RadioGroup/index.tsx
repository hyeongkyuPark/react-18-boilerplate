import React, { useId } from 'react';
import {
  Root as RadioGroupUi,
  RadioGroupItem,
  Indicator,
} from '@radix-ui/react-radio-group';
import { cn } from '@styles/lib';
import { type RadioGroupProps } from './types';
import { radioGroupItemVariant, radioGroupVariant } from './variants';

export default function RadioGroup(props: RadioGroupProps) {
  const { options, id, size, direction, ...rest } = props;

  const formId = id ?? useId();

  return (
    <RadioGroupUi
      className={cn(radioGroupVariant({ size, direction }))}
      {...rest}
    >
      {options.map(item => {
        const inputId = `${formId}-${item.value}`;

        return (
          <div className="flex items-center gap-[8px]" key={item.value}>
            <RadioGroupItem
              id={inputId}
              className={cn(
                radioGroupItemVariant({ size, disabled: rest.disabled }),
              )}
              value={item.value}
            >
              <Indicator className="indicator" />
            </RadioGroupItem>
            <label htmlFor={inputId}>{item.label}</label>
          </div>
        );
      })}
    </RadioGroupUi>
  );
}
