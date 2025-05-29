import type { StorybookConfig } from '@storybook/sveltekit';
 
const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
  addons: [
    // Other Storybook addons
    '@storybook/addon-svelte-csf',
  ],
  framework: "@storybook/sveltekit"
};
 
export default config;