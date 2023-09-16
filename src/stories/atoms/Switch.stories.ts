import { Switch } from '@atoms';
import type { Meta, StoryObj } from '@storybook/react';

import * as icons from 'assets/svg';

// const icons = { IconCheck, IconCircle, IconClear, IconPlus };

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/Switch',
  component: Switch,
  argTypes: {
    onChange: {
      table: {
        disable: true,
      },
    },
    CheckIcon: {
      options: ['none', ...Object.keys(icons)], // An array of serializable values
      mapping: icons, // Maps serializable option values to complex arg values
      control: 'select', // Type 'select' is automatically inferred when 'options' is defined
    },
    UncheckIcon: {
      options: ['none', ...Object.keys(icons)], // An array of serializable values
      mapping: icons, // Maps serializable option values to complex arg values
      control: 'select', // Type 'select' is automatically inferred when 'options' is defined
    },
    activeColor: {
      control: 'radio',
      options: [
        'primary3',
        'secondary3',
        'secondarySub3',
        'gray5',
        'red3',
        'orange3',
        'yellow3',
        'green3',
        'sky3',
        'teal3',
        'blue3',
        'purple3',
        'pink3',
      ],
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};
export const DefaultChecked: Story = {
  args: { defaultValue: true },
};
export const Size40: Story = {
  args: { size: 40 },
};
export const Size24: Story = {
  args: { size: 24 },
};
export const Icons: Story = {
  args: { CheckIcon: icons.IconClear, UncheckIcon: icons.IconClear },
};
