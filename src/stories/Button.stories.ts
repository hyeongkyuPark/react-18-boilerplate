import { Button } from '@atoms';
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
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
  args: {
    buttonColor: 'planeGhost',
    children: 'planeGhost',
  },
};
