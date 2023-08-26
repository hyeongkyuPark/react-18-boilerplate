import type { Meta, StoryObj } from '@storybook/react';
import { InputTestComponent } from './Test';

const meta = {
  title: 'Test/Input',
  component: InputTestComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof InputTestComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputTestComponents: Story = {
  args: {},
};
