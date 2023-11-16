import {Config} from '@stencil/core';
import {sass} from '@stencil/sass';
import {reactOutputTarget} from "@stencil/react-output-target";

export const config: Config = {
  namespace: 'pvr-components',
  globalStyle: 'src/global/global.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    reactOutputTarget({
      componentCorePackage: 'pvr-components',
      proxiesFile: '../react-library/lib/components/stencil-generated/index.ts',
    })
  ],
  testing: {
    browserHeadless: "new",
  },
  plugins: [
    sass()
  ]
};
