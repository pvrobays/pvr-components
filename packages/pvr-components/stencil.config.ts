import {Config} from '@stencil/core';
import {reactOutputTarget} from "@stencil/react-output-target";
import {angularOutputTarget} from '@stencil/angular-output-target';

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
    }),
    angularOutputTarget({
      componentCorePackage: 'pvr-components',
      outputType: 'component',
      directivesProxyFile: '../angular-workspace/projects/component-library/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular-workspace/projects/component-library/src/lib/stencil-generated/index.ts',
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
};
