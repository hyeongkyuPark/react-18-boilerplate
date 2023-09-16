import { Button } from '@atoms';
import type { Meta, StoryObj } from '@storybook/react';
import * as icons from 'assets/svg';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    PrefixIcon: {
      options: ['none', ...Object.keys(icons)], // An array of serializable values
      mapping: { none: undefined, ...icons }, // Maps serializable option values to complex arg values
      control: 'select', // Type 'select' is automatically inferred when 'options' is defined
    },
    SuffixIcon: {
      options: ['none', ...Object.keys(icons)], // An array of serializable values
      mapping: { none: undefined, ...icons }, // Maps serializable option values to complex arg values
      control: 'select', // Type 'select' is automatically inferred when 'options' is defined
    },
  },
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#FFFFFF',
        },
        {
          name: 'dark',
          value: '#808080',
        },
      ],
    },
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    buttonColor: 'primary',
    children: 'primary',
  },
};

export const PrimaryGhost: Story = {
  args: {
    buttonColor: 'primaryGhost',
    children: 'primaryGhost',
  },
};

export const LightPrimary: Story = {
  args: {
    buttonColor: 'lightPrimary',
    children: 'lightPrimary',
  },
};

export const Gray: Story = {
  args: {
    buttonColor: 'gray',
    children: 'gray',
  },
};

export const GrayGhost: Story = {
  args: {
    buttonColor: 'grayGhost',
    children: 'grayGhost',
  },
};

export const Plane: Story = {
  args: {
    buttonColor: 'plane',
    children: 'plane',
  },
};

export const PlaneGhost: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    buttonColor: 'planeGhost',
    children: 'planeGhost',
  },
};

export const Rounded: Story = {
  args: {
    buttonColor: 'primary',
    children: 'rounded primary',
    isRound: true,
  },
};

export const Full: Story = {
  parameters: {
    layout: 'padded',
  },
  args: {
    buttonColor: 'primary',
    children: 'full primary',
    isFull: true,
  },
};
