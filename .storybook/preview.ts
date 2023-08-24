import type { Preview } from '@storybook/react';
import '@styles/global.css';

const preview: Preview = {
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
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
