import { Checkbox } from '@atoms';
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  argTypes: {
    onlyIcon: { control: 'boolean' },
    isRound: { control: 'boolean' },
    disabled: {
      control: 'boolean',
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Check: Story = {
  args: {},
};
export const Circle: Story = {
  args: {
    indicatorType: 'circle',
  },
};
export const RoundCheck: Story = {
  args: {
    isRound: true,
  },
};
export const CircleCheck: Story = {
  args: {
    indicatorType: 'circle',
    isRound: true,
  },
};
export const OnlyIcon: Story = {
  args: {
    onlyIcon: true,
  },
};
export const OnlyIconCircle: Story = {
  args: {
    indicatorType: 'circle',
    onlyIcon: true,
  },
};
export const Size20: Story = {
  args: {
    size: 20,
  },
};
