import {defineCustomElements} from '../loader';
import { html } from 'lit';

defineCustomElements();

import '../src/global/global.css';

/** @type { import('@storybook/web-components').Preview } */
const preview = {
  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: "dark",
      toolbar: {
        // The label to show for this toolbar item
        title: "Theme",
        icon: "circlehollow",
        // Array of plain string values or MenuItem shape (see below)
        items: ["light", "dark"],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
  decorators: [(story, context) => html`<div data-theme="${context.globals.theme}">${story()}</div>`],
  parameters: {
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
