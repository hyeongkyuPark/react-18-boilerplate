/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useId, useRef, useState } from 'react';
import { Root as CheckboxRoot, Indicator } from '@radix-ui/react-checkbox';
import { IconCheck, IconCircle } from 'assets/svg';
import { type CheckboxProps } from './types';
import {
  checkboxIndicatorVariant,
  checkboxLabelVariant,
  checkboxVariant,
} from './variants';

export default function Checkbox(props: CheckboxProps) {
  const {
    checked: checkedProps,
    size = 24,
    isRound = false,
    indicatorType = 'check',
    onlyIcon = false,
    ...rest
  } = props;
  const autoId = useId();
  const { current: id } = useRef(rest.id ?? autoId);
  const [checked, setChecked] = useState(checkedProps ?? false);

  const renderIndicator = useCallback(() => {
    switch (indicatorType) {
      case 'check':
        return <IconCheck />;
      case 'circle':
        return <IconCircle />;
      default:
        return null;
    }
  }, [indicatorType]);

  return (
    <div className="group flex items-center gap-[8px]">
      <CheckboxRoot
        className={checkboxVariant({
          size,
          isRound,
          onlyIcon,
        })}
        defaultChecked
        id={id}
        checked={checked === true ? true : 'indeterminate'}
        onCheckedChange={e => {
          setChecked(e);
          props?.onCheckedChange?.(e);
        }}
        data-type={indicatorType}
        {...rest}
      >
        <Indicator>
          <p className={checkboxIndicatorVariant({ size })}>
            {renderIndicator()}
          </p>
        </Indicator>
      </CheckboxRoot>
      <label
        className={checkboxLabelVariant({ size, disabled: rest.disabled })}
        htmlFor={id}
      >
        test111
      </label>
    </div>
  );
}
