import type { Meta, StoryObj } from '@storybook/react';
import RadioGroup from 'components/atoms/RadioGroup';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/RadioGroup',
  component: RadioGroup,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    defaultValue: 'test1',
    options: [
      { label: 'test1', value: 'test1' },
      { label: 'test2', value: 'test2' },
      { label: 'test3', value: 'test3' },
      { label: 'test4', value: 'test4' },
    ],
  },
};
export const DirectionCol: Story = {
  args: {
    defaultValue: 'test1',
    options: [
      { label: 'test1', value: 'test1' },
      { label: 'test2', value: 'test2' },
      { label: 'test3', value: 'test3' },
      { label: 'test4', value: 'test4' },
    ],
    direction: 'column',
  },
};
export const Size20: Story = {
  args: {
    defaultValue: 'test1',
    options: [
      { label: 'test1', value: 'test1' },
      { label: 'test2', value: 'test2' },
      { label: 'test3', value: 'test3' },
      { label: 'test4', value: 'test4' },
    ],
    size: 20,
  },
};
export const DirectionColSize20: Story = {
  args: {
    defaultValue: 'test1',
    options: [
      { label: 'test1', value: 'test1' },
      { label: 'test2', value: 'test2' },
      { label: 'test3', value: 'test3' },
      { label: 'test4', value: 'test4' },
    ],
    size: 20,
    direction: 'column',
  },
};
